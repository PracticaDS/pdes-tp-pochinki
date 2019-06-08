
import { defUbicacion, precioMaquina, valorDeProducto, transformacionRecurso} from '../model/maquina';



const selectMaquina = (state,tipoMaquina) => {
    let newState = {tablero: state.tablero,maquinaSeleccionada:tipoMaquina,herramienta: "SELECCIONAR", orientacionSeleccionada: "NO",dinero: state.dinero};
    return  newState;
};

const selectHerramienta = (state,herramienta) => {
    let newState = {tablero: state.tablero,maquinaSeleccionada:"NO",herramienta:herramienta, orientacionSeleccionada: "NO", dinero: state.dinero};
    return  newState;
}

const selectMaterial = (state,material) => {
    let newState = {tablero: state.tablero,maquinaSeleccionada:state.maquinaSeleccionada,herramienta: "SELECCIONAR", orientacionSeleccionada: "NO", materialSeleccionado: material,dinero:state.dinero};
    console.log('state con material ', newState);
    return newState;
}

const colocarMaquina = (state,idCelda) => {
    let fila = Math.round(idCelda / 10);
    let columna = Math.round(idCelda % 10)+1;
    console.log(state.materialSeleccionado);
    if( (state.maquinaSeleccionada === "NO" && state.maquinaSeleccionadaMover === "NO") || state.tablero.some((value,index,array)=> {return value.x === columna && value.y === fila}) || state.dinero < precioMaquina(state.maquinaSeleccionada)){
        return state;
    }
    else{
        switch(state.herramienta){
            case "SELECCIONAR":
                if(state.maquinaSeleccionada === "STARTER"){
                    if(state.materialSeleccionado !== "" && state.materialSeleccionado !== "NO" && typeof state.materialSeleccionado !== "undefined"){
                        state.tablero.push({type: state.maquinaSeleccionada,x: columna,y: fila, orientacion: "abajo", recurso: state.materialSeleccionado,material: state.materialSeleccionado});
                    }else{
                        let baseState = {tablero: state.tablero,maquinaSeleccionada:"NO",herramienta: "SELECCIONAR", orientacionSeleccionada: "NO", materialSeleccionado: "NO",dinero:state.dinero};
                        return  baseState;
                    }
                }
                else if(state.maquinaSeleccionada === "SELLER"){
                    state.tablero.push({type: state.maquinaSeleccionada,x: columna,y: fila, orientacion: "abajo", recurso: []});
                }
                else{
                    state.tablero.push({type: state.maquinaSeleccionada,x: columna,y: fila, orientacion: "abajo", recurso: ""});
                }
                let newStateS = {tablero: state.tablero, maquinaSeleccionada: "NO",herramienta:"SELECCIONAR", orientacionSeleccionada: "NO",dinero: state.dinero - precioMaquina(state.maquinaSeleccionada)}
                console.log(newStateS);
                return newStateS; 
            
            case "MOVER":
                state.tablero.push({type: state.maquinaSeleccionadaMover,x: columna,y: fila, orientacion: state.orientacionSeleccionada, recurso: state.materialSeleccionadoMover,material: state.materialSeleccionado});
                let newStateM = {tablero: state.tablero, maquinaSeleccionada: state.maquinaSeleccionada,herramienta:"MOVER", orientacionSeleccionada: "abajo",dinero: state.dinero, maquinaSeleccionadaMover: "NO", materialSeleccionadoMover: "NO"}
                console.log(newStateM);
                return newStateM;
            default: return state
        }      
    }
    
};

const aplicarTick = (state) => {
    let ubicarRecursos = [];
    let sumaDinero = 0;
    let newTab = state.tablero.map((maquina)=>{
        switch (maquina.type){
            case "STARTER":

                let nRecurso = maquina.recurso !== "" ? "" : maquina.material;
                let newMaquina = {type: maquina.type,x: maquina.x,y:maquina.y, orientacion: maquina.orientacion,recurso:nRecurso, material: maquina.material};

                if(maquina.recurso !== ""){
                    ubicarRecursos.push(defUbicacion(maquina.x,maquina.y,maquina.orientacion,maquina.recurso))
                    maquina.recurso = "";
                } 
                return newMaquina;
            case "SELLER":
                if(maquina.recurso !== ""){
                    maquina.recurso.forEach((rec) =>{
                        sumaDinero += valorDeProducto(rec);
                    })
                    return {type: maquina.type,x: maquina.x,y:maquina.y, orientacion: maquina.orientacion,recurso:[]}
                }
                return maquina
            case "FURNACE":
                if(maquina.recurso !== ""){
                    let nRecurso = transformacionRecurso(maquina.recurso);
                    ubicarRecursos.push(defUbicacion(maquina.x,maquina.y,maquina.orientacion,nRecurso))
                    let newMaquina = {type: maquina.type,x: maquina.x,y: maquina.y, orientacion: maquina.orientacion, recurso: ""};
                    return newMaquina;
                }
                return maquina;
            default: 
                if(maquina.recurso !== ""){
                    ubicarRecursos.push(defUbicacion(maquina.x,maquina.y,maquina.orientacion,maquina.recurso))
                    return {type: maquina.type,x: maquina.x,y:maquina.y, orientacion: maquina.orientacion,recurso:""}
                }
                return maquina
        }
    });
    if(ubicarRecursos.length > 0){
        for(var i=0;i < ubicarRecursos.length;i++){
            newTab = moverRecurso(newTab,ubicarRecursos[i])
        }
    };
    return {tablero: newTab,maquinaSeleccionada:state.maquinaSeleccionada,herramienta: state.herramienta,orientacionSeleccionada: state.orientacionSeleccionada,materialSeleccionado: state.materialSeleccionado, dinero: state.dinero + sumaDinero, maquinaSeleccionadaMover: state.maquinaSeleccionadaMover, materialSeleccionadoMover: state.materialSeleccionadoMover}
}


//Deberiamos refactorizar cada metodo en uno aparte
const edicion = (state, idCelda) => {
    let fila = Math.round(idCelda / 10);
    let columna = Math.round(idCelda % 10)+1;
    switch (state.herramienta) {
        case "BORRAR":
            let filtered = state.tablero.filter((value,index,array)=> {
                return (value.x !== columna || value.y !== fila)
            })
            return {tablero:filtered,maquinaSeleccionada:"NO",herramienta:state.herramienta, orientacionSeleccionada: "NO",dinero: state.dinero}
        case "ROTAR":
            let newTab = state.tablero.map((val)=> {
                if(val.x === columna && val.y === fila){
                    let newMaq = {type: val.type, x: val.x, y: val.y, orientacion: val.orientacion, recurso: val.recurso, material: val.material}
                    switch(val.orientacion){
                        case "abajo":
                            newMaq.orientacion = "izquierda";
                            break;
                        case "arriba":
                            newMaq.orientacion = "derecha";
                            break;
                        case "izquierda":
                            newMaq.orientacion = "arriba";
                            break;
                        case "derecha":
                            newMaq.orientacion = "abajo";
                            break;
                        default: break;
                    }
                    return newMaq;
                }
                else{
                    return val;
                }
            })
            return {tablero: newTab,maquinaSeleccionada:"NO",herramienta: state.herramienta, orientacionSeleccionada: "NO",dinero:state.dinero}
        case "MOVER":
            if(state.maquinaSeleccionadaMover === "NO" || typeof state.maquinaSeleccionadaMover === "undefined"){
                let selectMaq = state.tablero.map( (maq) => {
                    if(maq.x === columna && maq.y === fila){
                        let selMaq = {type: maq.type, x: maq.x, y: maq.y, orientacion: maq.orientacion, material: maq.material}
                        return selMaq;
                    }else{
                        return maq;
                    }
                })
                
                let filterd = state.tablero.filter( (value,index,array) => {
                    return (value.x !== columna || value.y !== fila)
                })

                let newState = {tablero: filterd, maquinaSeleccionada: state.maquinaSeleccionada, herramienta: state.herramienta, orientacionSeleccionada: selectMaq[0].orientacion, dinero: state.dinero, maquinaSeleccionadaMover: selectMaq[0].type, materialSeleccionadoMover: selectMaq[0].material}
              return newState;
            }else {
                return colocarMaquina(state, idCelda);
            }    
            
            
            
        case "SELECCIONAR":
            return state;
        default: return state;
    }
}

const evaluarAccion = (state,idCelda) => {
    let fila = Math.round(idCelda / 10);
    let columna = Math.round(idCelda % 10)+1;
    if(state.maquinaSeleccionada === "NO" || state.tablero.some((value,index,array)=> {return value.x === columna && value.y === fila})){
        return edicion(state,idCelda)
    }
    else{
        return colocarMaquina(state,idCelda)
    }
}

const moverRecurso = (tab,ubicarRecursos) => {
    return tab.map((maq)=>{
        if(maq.x === ubicarRecursos.col && maq.y === ubicarRecursos.fil){
            switch (maq.type){
                case "STARTER":
                    return maq;
                case "SELLER":
                    maq.recurso.push(ubicarRecursos.recurso)
                    return {type: maq.type,x: maq.x,y:maq.y, orientacion: maq.orientacion,recurso:maq.recurso }
                default: return {type: maq.type,x: maq.x,y:maq.y, orientacion: maq.orientacion,recurso:ubicarRecursos.recurso, material: maq.material}
            }
        }
        return maq
    });
}



const maquinas = (state={tablero:[],maquinaSeleccionada:"NO",herramienta:"SELECCIONAR",dinero:0}, action) => {
    console.log('reducer', state, action);
    switch (action.type) {
        case 'SELECT' :
            return selectMaquina(state, action.tipoMaquina);
        case 'PUT' :
            return evaluarAccion(state, action.idCelda);
        case 'TICK':
            return aplicarTick(state);
        case 'SELECT_HERRAMIENTA':
            return selectHerramienta(state, action.herramienta);
        case 'SELECT_MAT':
            return selectMaterial(state,action.material);
        default: return state;

    }
};

export default maquinas;