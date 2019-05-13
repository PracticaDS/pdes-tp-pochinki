export const defUbicacion = (x,y,orient,rec) => {
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

export const valorDeProducto = (recurso) => {
    switch (recurso) {
        case "ORO":
            return 50;
        case "ORO FUNDIDO":
            return 40;
        default:
            return 0;
    }
}

export const transformacionRecurso = (recurso) => {
    switch(recurso){
        case "ORO":
            return "ORO FUNDIDO";
        case "COBRE":
            return "COBRE FUNDIDO";
        case "ALUMINIO":
            return "ALUMINIO FUNDIDO";
        case "CARBON":
            return "CARBON FUNDIDO";
        case "HIERRO":
            return "HIERRO FUNDIDO";
        default:
            return recurso;
    }
}

export const precioMaquina = (maquina) => {
    switch (maquina){
        case "STARTER":
            return 300;
        case "TRANSPORTER":
            return 100;
        case "FURNACE":
            return 200;
        case "CRAFTER":
            return 250;
        case "SELLER":
            return 300;
        default: return 0
    }
}

export const rotar = (orientation) => {
    switch(orientation){
        case "abajo":
            return "izquierda";
        case "arriba":
            return "derecha";
        case "izquierda":
            return "arriba";
        case "derecha":
            return "abajo";
        default: return orientation;
    }
}
