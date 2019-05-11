import { start, tick } from '../actions/start';

const selectMaquina = (state,tipoMaquina) => {
    console.log(state);
    let newState = {tablero: state.tablero,maquinaSeleccionada:tipoMaquina};
    return  newState;
};

const colocarMaquina = (state,idCelda) => {
    let fila = Math.round(idCelda / 10);
    let columna = Math.round(idCelda % 10)+1;
    if(state.maquinaSeleccionada === "NO" || state.tablero.some((value,index,array)=> {return value.x === columna && value.y === fila})){
        return  state;
    }
    else{
        state.tablero.push({type: state.maquinaSeleccionada,x: columna,y: fila, orientacion: "derecha",recurso:"oro"});
        let newState = {tablero: state.tablero, maquinaSeleccionada: "NO"}
        console.log(newState);
        return newState;
    }
    
};

const defUbicacion = (x,y,orient,rec) => {
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

const aplicarTick = (state) => {
    let ubicarRecursos = [];
    let newTab = state.tablero.map((maquina)=>{
        switch (maquina.type){
            case "STARTER":
                let nRecurso = maquina.recurso !== "" ? "" : "oro";
                let newMaquina = {type: maquina.type,x: maquina.x,y:maquina.y, orientacion: maquina.orientacion,recurso:nRecurso};
                if(maquina.recurso !== ""){
                    ubicarRecursos.push(defUbicacion(maquina.x,maquina.y,maquina.orientacion,maquina.recurso))
                } 
                return newMaquina;
            default: 
                if(maquina.recurso !== ""){
                    ubicarRecursos.push(defUbicacion(maquina.x,maquina.y,maquina.orientacion,maquina.recurso))
                    return {type: maquina.type,x: maquina.x,y:maquina.y, orientacion: maquina.orientacion,recurso:""}
                }
                return maquina
        }
    });
    if(ubicarRecursos.length > 0){
        for(var i=0;i < ubicarRecursos.length;i++){
            newTab = moverRecurso(newTab,ubicarRecursos[i])
        }
    };
    return {tablero: newTab,maquinaSeleccionada:state.maquinaSeleccionada}


}

const moverRecurso = (tab,ubicarRecursos) => {
    return tab.map((maq)=>{
        if(maq.x === ubicarRecursos.col && maq.y === ubicarRecursos.fil){
            return {type: maq.type,x: maq.x,y:maq.y, orientacion: maq.orientacion,recurso:ubicarRecursos.recurso}
        }
        return maq
    });
}

const loop = (state) => {
    setTimeout(()=> {console.log("tick");maquinas(state,start())},1000);
    maquinas(state,tick());
    return state;
    
}

const maquinas = (state={tablero:[],maquinaSeleccionada:"NO"}, action) => {
    console.log('reducer', state, action);
    switch (action.type) {
        case 'SELECT' :
            return selectMaquina(state, action.tipoMaquina);
        case 'PUT' :
            return colocarMaquina(state, action.idCelda);
        case 'START' :
            return loop(state);
        case 'TICK':
            return aplicarTick(state);
        default: return state;

    }
};

export default maquinas;