export const selectMaquina = (tipoMaquina) => {
    console.log(tipoMaquina);
    return {
        type: 'SELECT',
        tipoMaquina
    }
}