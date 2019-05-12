export const selectMaquina = (maquina) => {
    console.log('Objeto maquina action ',maquina);
    switch(maquina.tipoMaquina){
        case "STARTER":
            return {
                type: 'SELECT',
                tipoMaquina: maquina.tipoMaquina,
                material: maquina.material        
            }
        default: return {
            type: 'SELECT',
            tipoMaquina: maquina.tipoMaquina
        }
    }
}
export const colocarMaquina = (idCelda) => {
    console.log(idCelda);
    return {
        type: 'PUT',
        idCelda
    }
}