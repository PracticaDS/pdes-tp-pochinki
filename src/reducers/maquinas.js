
const selectMaquina = (state,tipoMaquina) => {
    let newState = {tablero: state.tablero,maquinaSeleccionada:tipoMaquina,herramienta: "SELECCIONAR"};
    return  newState;
};

const selectHerramienta = (state,herramienta) => {
    let newState = {tablero: state.tablero,maquinaSeleccionada:"NO",herramienta:herramienta};
    return  newState;
}

const colocarMaquina = (state,idCelda) => {
    let fila = Math.round(idCelda / 10);
    let columna = Math.round(idCelda % 10)+1;
    if(state.maquinaSeleccionada === "NO" || state.tablero.some((value,index,array)=> {return value.x === columna && value.y === fila})){
        return  state;
    }
    else{
        state.tablero.push({type: state.maquinaSeleccionada,x: columna,y: fila, orientacion: "derecha"});
        let newState = {tablero: state.tablero, maquinaSeleccionada: "NO",herramienta:"SELECCIONAR"}
        console.log(newState);
        return newState;
    }
    
};

const edicion = (state, idCelda) => {
    let fila = Math.round(idCelda / 10);
    let columna = Math.round(idCelda % 10)+1;
    switch (state.herramienta) {
        case "BORRAR":
            let filtered = state.tablero.filter((value,index,array)=> {
                return (value.x !== columna && value.y !== fila)
            })
            return {tablero:filtered,maquinaSeleccionada:"NO",herramienta:state.herramienta}
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
            return {tablero: newTab,maquinaSeleccionada:"NO",herramienta: state.herramienta}
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
                let newState = {tablero: filterd, maquinaSeleccionada: selectMaq[0].type, herramienta: state.herramienta}
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



const maquinas = (state={tablero:[],maquinaSeleccionada:"NO",herramienta:"SELECCIONAR"}, action) => {
    console.log('reducer', state, action);
    switch (action.type) {
        case 'SELECT' :
            return selectMaquina(state, action.tipoMaquina);
        case 'PUT' :
            return evaluarAccion(state, action.idCelda);
        case 'SELECT_HERRAMIENTA':
            return selectHerramienta(state, action.herramienta);
        default: return state;

    }
};

export default maquinas;