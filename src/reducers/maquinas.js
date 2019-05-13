import { defUbicacion, precioMaquina, valorDeProducto, rotar, transformacionRecurso} from '../model/maquina';

const selectMaquina = (state,tipoMaquina) => {
    let newState = {tablero: state.tablero,maquinaSeleccionada:tipoMaquina,herramienta: "SELECCIONAR", orientacionSeleccionada: "NO",dinero: state.dinero};
    return  newState;
};

const selectHerramienta = (state,herramienta) => {
    let newState = {tablero: state.tablero,maquinaSeleccionada:"NO",herramienta:herramienta, orientacionSeleccionada: "NO", dinero: state.dinero};
    return  newState;
}

const colocarMaquina = (state,idCelda) => {
    let fila = Math.round(idCelda / 10);
    let columna = Math.round(idCelda % 10)+1;
    if(state.maquinaSeleccionada === "NO" || state.tablero.some((value,index,array)=> {return value.x === columna && value.y === fila}) || state.dinero < precioMaquina(state.maquinaSeleccionada)){
        return  state;
    }
    else{
        switch(state.herramienta){
            case "SELECCIONAR":
                if(state.maquinaSeleccionada === "SELLER"){
                    state.tablero.push({type: state.maquinaSeleccionada,x: columna,y: fila, orientacion: "abajo", recurso: []});
                }
                else{
                    state.tablero.push({type: state.maquinaSeleccionada,x: columna,y: fila, orientacion: "abajo", recurso: ""});
                }
                let newStateS = {tablero: state.tablero, maquinaSeleccionada: "NO",herramienta:"SELECCIONAR", orientacionSeleccionada: "NO",dinero: state.dinero - precioMaquina(state.maquinaSeleccionada)}
                console.log(newStateS);
                return newStateS; 
            
            case "MOVER":
                state.tablero.push({type: state.maquinaSeleccionada,x: columna,y: fila, orientacion: state.orientacionSeleccionada, recurso: ""});
                let newStateM = {tablero: state.tablero, maquinaSeleccionada: "NO",herramienta:"MOVER", orientacionSeleccionada: "abajo",dinero: state.dinero}
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
                let nRecurso = maquina.recurso !== "" ? "" : "ORO";
                let newMaquina = {type: maquina.type,x: maquina.x,y:maquina.y, orientacion: maquina.orientacion,recurso:nRecurso};
                if(maquina.recurso !== ""){
                    ubicarRecursos.push(defUbicacion(maquina.x,maquina.y,maquina.orientacion,maquina.recurso))
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
                    let newMaquina = {type: maquina.type,x: maquina.x,y: maquina.y, orientacion: maquina.orientacion, recurso: nRecurso};
                    console.log('Maq con mat fundido ', newMaquina);
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
    return {tablero: newTab,maquinaSeleccionada:state.maquinaSeleccionada,herramienta: state.herramienta,orientacionSeleccionada: state.orientacionSeleccionada, dinero: state.dinero + sumaDinero}
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
                    let newMaq = {type: val.type, x: val.x, y: val.y, orientacion: rotar(val.orientacion)}
                    return newMaq;
                }
                else{
                    return val;
                }
            })
            return {tablero: newTab,maquinaSeleccionada:"NO",herramienta: state.herramienta, orientacionSeleccionada: "NO",dinero:state.dinero}
        case "MOVER": //estoy eliminando y reemplazando habria que quizas guardar en el store la orientacion por ahora 
            if(state.maquinaSeleccionada === "NO"){
                let selectMaq = state.tablero.map( (maq) => {
                    if(maq.x === columna && maq.y === fila){
                        let selMaq = {type: maq.type, x: maq.x, y: maq.y, orientacion: maq.orientacion}
                        return selMaq;
                    }else{
                        return maq;
                    }
                })
                
                let filterd = state.tablero.filter( (value,index,array) => {
                    return (value.x !== columna && value.y !== fila)
                })
                let newState = {tablero: filterd, maquinaSeleccionada: selectMaq[0].type, herramienta: state.herramienta, orientacionSeleccionada: selectMaq[0].orientacion,dinero: state.dinero}
                console.log('nuevo estado ', newState);
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
                default: return {type: maq.type,x: maq.x,y:maq.y, orientacion: maq.orientacion,recurso:ubicarRecursos.recurso}
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
        default: return state;

    }
};

export default maquinas;