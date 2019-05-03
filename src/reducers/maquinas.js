
const selectMaquina = (state,tipoMaquina) => {
    state = tipoMaquina;
    return  state;
};


const maquinas = (state="NO", action) => {
    console.log('reducer', state, action);
    switch (action.type) {
        case 'SELECT' :
            return selectMaquina(state, action.tipoMaquina)
        default: return state
    }
};

export default maquinas;