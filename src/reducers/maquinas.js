import { start, tick } from '../actions/start';

const selectMaquina = (state,tipoMaquina) => {
    let newState = {tablero: state.tablero,maquinaSeleccionada:tipoMaquina,herramienta: "SELECCIONAR", orientacionSeleccionada: "NO"};
    return  newState;
};

const selectHerramienta = (state,herramienta) => {
    let newState = {tablero: state.tablero,maquinaSeleccionada:"NO",herramienta:herramienta, orientacionSeleccionada: "NO"};
    return  newState;
}

const colocarMaquina = (state,idCelda) => {
    let fila = Math.round(idCelda / 10);
    let columna = Math.round(idCelda % 10)+1;
    if(state.maquinaSeleccionada === "NO" || state.tablero.some((value,index,array)=> {return value.x === columna && value.y === fila})){
        return  state;
    }
    else{
        switch(state.herramienta){
            case "SELECCIONAR":
                state.tablero.push({type: state.maquinaSeleccionada,x: columna,y: fila, orientacion: "abajo"});
                let newStateS = {tablero: state.tablero, maquinaSeleccionada: "NO",herramienta:"SELECCIONAR", orientacionSeleccionada: "NO"}
                console.log(newStateS);
                return newStateS; 
            
            case "MOVER":
                state.tablero.push({type: state.maquinaSeleccionada,x: columna,y: fila, orientacion: state.orientacionSeleccionada});
                let newStateM = {tablero: state.tablero, maquinaSeleccionada: "NO",herramienta:"MOVER", orientacionSeleccionada: "abajo"}
                console.log(newStateM);
                return newStateM;
            default: return state
        }      
    }
    
};

const defUbicacion = (x,y,orient,rec) => {
    switch (orient){
        case "derecha":
            return {col: x+1,fil:y,recurso:rec}
        case "arriba":
            return {col: x,fil:y-1,recurso:rec}
        case "izquierda":
            return {col: x-1,fil:y,recurso:rec}
        case "abajo":
            return {col: x,fil:y+1,recurso:rec}
        default: return {col:x,fil:y,recurso:rec}
    }
}

const aplicarTick = (state) => {
    let ubicarRecursos = [];
    let newTab = state.tablero.map((maquina)=>{
        switch (maquina.type){
            case "STARTER":
                let nRecurso = maquina.recurso !== "" ? "" : "oro";
                let newMaquina = {type: maquina.type,x: maquina.x,y:maquina.y, orientacion: maquina.orientacion,recurso:nRecurso};
                if(maquina.recurso !== ""){
                    ubicarRecursos.push(defUbicacion(maquina.x,maquina.y,maquina.orientacion,maquina.recurso))
                } 
                return newMaquina;
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
    return {tablero: newTab,maquinaSeleccionada:state.maquinaSeleccionada}
const edicion = (state, idCelda) => {
    let fila = Math.round(idCelda / 10);
    let columna = Math.round(idCelda % 10)+1;
    switch (state.herramienta) {
        case "BORRAR":
            let filtered = state.tablero.filter((value,index,array)=> {
                return (value.x !== columna && value.y !== fila)
            })
            return {tablero:filtered,maquinaSeleccionada:"NO",herramienta:state.herramienta, orientacionSeleccionada: "NO"}
        case "ROTAR":
            let newTab = state.tablero.map((val)=> {
                if(val.x === columna && val.y === fila){
                    let newMaq = {type: val.type, x: val.x, y: val.y, orientacion: val.orientacion}
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
            return {tablero: newTab,maquinaSeleccionada:"NO",herramienta: state.herramienta, orientacionSeleccionada: "NO"}
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
                let newState = {tablero: filterd, maquinaSeleccionada: selectMaq[0].type, herramienta: state.herramienta, orientacionSeleccionada: selectMaq[0].orientacion}
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


}

const moverRecurso = (tab,ubicarRecursos) => {
    return tab.map((maq)=>{
        if(maq.x === ubicarRecursos.col && maq.y === ubicarRecursos.fil){
            return {type: maq.type,x: maq.x,y:maq.y, orientacion: maq.orientacion,recurso:ubicarRecursos.recurso}
        }
        return maq
    });
}

const loop = (state) => {
    setTimeout(()=> {console.log("tick");maquinas(state,start())},1000);
    maquinas(state,tick());
    return state;
    
}

const maquinas = (state={tablero:[],maquinaSeleccionada:"NO",herramienta:"SELECCIONAR"}, action) => {
    console.log('reducer', state, action);
    switch (action.type) {
        case 'SELECT' :
            return selectMaquina(state, action.tipoMaquina);
        case 'PUT' :
            return evaluarAccion(state, action.idCelda);
        case 'START' :
            return loop(state);
        case 'TICK':
            return aplicarTick(state);
        case 'SELECT_HERRAMIENTA':
            return selectHerramienta(state, action.herramienta);
        default: return state;

    }
};

export default maquinas;