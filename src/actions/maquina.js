export const selectMaquina = (maquina) => {
    return{
            type: 'SELECT',
            tipoMaquina: maquina.tipoMaquina
    }
}

export const colocarMaquina = (idCelda) => {
    console.log(idCelda);
    return {
        type: 'PUT',
        idCelda
    }
}

export const selectMaterial = (material) => {
    return {
        type: 'SELECT_MAT',
        material
    }
}

export const selectBlueprint = (blueprint) => {
    return {
        type: 'SELECT_BLUE',
        blueprint
    }
}