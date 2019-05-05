
const selectMaquina = (state,tipoMaquina) => {
    console.log(state);
    let newState = {tablero: state.tablero,maquinaSeleccionada:tipoMaquina};
    return  newState;
};

const colocarMaquina = (state,idCelda) => {
    let fila = idCelda / 10;
    let columna = idCelda % 10;
    if(state.maquinaSeleccionada == "NO" || state.tablero.some((value,index,array)=> {return value.x == columna && value.y == fila})){
        return  state;
    }
    else{
        state.tablero.push({type: state.maquinaSeleccionada,x: columna,y: fila});
        let newState = {tablero: state.tablero, maquinaSeleccionada: "NO"}
        console.log(newState);
        return newState;
    }
    
};



const maquinas = (state={tablero:[],maquinaSeleccionada:"NO"}, action) => {
    console.log('reducer', state, action);
    switch (action.type) {
        case 'SELECT' :
            return selectMaquina(state, action.tipoMaquina);
        case 'PUT' :
            return colocarMaquina(state, action.idCelda);
        default: return state;

    }
};

export default maquinas;