import { start } from "../actions/start";

const loop = (state) => {
    setTimeout(()=> {console.log("tick");tick(state,start())},1000);
    return state;
    
}

const tick = (state="NO", action) => {
    console.log('reducer', state, action);
    switch (action.type) {
        case 'START' :
            return loop(state)
        default: return state
    }
};

export default tick;