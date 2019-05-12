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
        case "oro":
            return 50;
        case "oro fundido":
            return 40;
        default:
            return 0;
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
    switch(orientacion){
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
