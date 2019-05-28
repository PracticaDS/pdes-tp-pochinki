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
        case "COBRE":
            return 25;
        case "CARBON":
            return 5;
        case "ALUMINIO":
            return 20;
        case "HIERRO":
            return 10;
        case "ANILLO DE ORO":
            return 300;
        case "HORNO":
            return 50;
        case "TV":
            return 120;
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

export const blueprints = () => {
    return [{nombre:"Blueprint Horno",ingrediente1:"HIERRO",ingrediente2:"CARBON",resultado:"HORNO"},
    {nombre:"Blueprint Anillo",ingrediente1:"ORO FUNDIDO",ingrediente2:"ORO FUNDIDO",resultado:"ANILLO DE ORO"},
    {nombre:"Blueprint TV", ingrediente1:"COBRE", ingrediente2:"ALUMINIO",resultado:"TV"},
    {nombre:"Blueprint Barra", ingrediente1:"HIERRO", ingrediente2:"HIERRO",resultado:"BARRA"}]
}
