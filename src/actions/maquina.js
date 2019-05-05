export const selectMaquina = (tipoMaquina) => {
    console.log(tipoMaquina);
    return {
        type: 'SELECT',
        tipoMaquina
    }
}
export const colocarMaquina = (idCelda) => {
    console.log(idCelda);
    return {
        type: 'PUT',
        idCelda
    }
}