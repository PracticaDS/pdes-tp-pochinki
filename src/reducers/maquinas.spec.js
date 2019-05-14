import maquinas from './maquinas';
import {selectMaquina,colocarMaquina, selectMaterial} from '../actions/maquina';
import{tick} from '../actions/start';

describe('game reducer', () => {
    it('should return an empty board',() => {
        expect(maquinas(undefined,{type: '@@INIT'}).tablero).toEqual([])
    })

    it('should handle select action',() => {
        let newS = maquinas(undefined,selectMaquina({tipoMaquina:"SELLER"}));
        console.log(newS);
        expect(newS.maquinaSeleccionada).toEqual("SELLER")
    })


    it('should handle put action after select with enough money',() => {
        const state = maquinas(undefined,selectMaquina({tipoMaquina:"SELLER"}));
        state.dinero = 1000;
        const newState = maquinas(state,colocarMaquina(2));
        expect(newState.tablero.length).toEqual(1);
        expect(newState.maquinaSeleccionada).toEqual("NO");
        expect(newState.dinero).toEqual(700);
    })

    it('should not let to add a new machine if none is selected',() => {
        const newState = maquinas(undefined,colocarMaquina(2));
        expect(newState.tablero.length).toEqual(0);
        expect(newState.maquinaSeleccionada).toEqual("NO");
    })

    it('should not let to add a new machine in the board without enough money',() => {
        const state = maquinas(undefined,selectMaquina({tipoMaquina:"SELLER"}));
        const newState = maquinas(state,colocarMaquina(2));
        expect(newState.tablero.length).toEqual(0);
        expect(newState.maquinaSeleccionada).toEqual("SELLER");
    })

    it('should not let to add a new machine in the board in a occupied cell',() => {
        const state = maquinas(undefined,selectMaquina({tipoMaquina:"CRAFTER"}));
        state.dinero = 1000;
        let newState = maquinas(state,colocarMaquina(2));
        expect(newState.tablero.length).toEqual(1);
        newState = maquinas(newState,selectMaquina({tipoMaquina:"SELLER"}));
        newState = maquinas(newState,colocarMaquina(2));
        expect(newState.tablero.length).toEqual(1);
        expect(newState.maquinaSeleccionada).toEqual("SELLER");
    })

    it('should not let to add a new starter without a material', () => {
        const state = maquinas(undefined,selectMaquina({tipoMaquina:"STARTER"}));
        const newState = maquinas(state,colocarMaquina(2));
        expect(newState.tablero.length).toEqual(0);
        expect(newState.maquinaSeleccionada).toEqual("STARTER");
    })

    it('should pass material from starter to transporter', () => {
        const state = maquinas(undefined,selectMaquina({tipoMaquina:"STARTER"}));
        state.dinero = 10000;
        const stateWithMat = maquinas(state,selectMaterial("ORO"));
        const newStateSt = maquinas(stateWithMat,colocarMaquina(2));
        const newStateT = maquinas(newStateSt,selectMaquina({tipoMaquina:"TRANSPORTER"}));
        const tickState = maquinas(newStateT,colocarMaquina(12));
        const finalState = maquinas(tickState,tick());
        expect(finalState.tablero.length).toEqual(2);
        expect(finalState.tablero[1].type).toEqual("TRANSPORTER");
        expect(finalState.tablero[1].recurso).toEqual("ORO");
    })

    it('should pass material from starter to furnace, transform it and pass it to another transporter', () => {
        const state = maquinas(undefined,selectMaquina({tipoMaquina:"STARTER"}));
        state.dinero = 10000;
        const stateWithMat = maquinas(state,selectMaterial("ORO"));
        const newStateSt = maquinas(stateWithMat,colocarMaquina(2));
        const newStateT = maquinas(newStateSt,selectMaquina({tipoMaquina:"TRANSPORTER"}));
        const tick1State = maquinas(newStateT,colocarMaquina(12));
        const newStateF = maquinas(tick1State,tick());
        const newStateWF = maquinas(newStateF,selectMaquina({tipoMaquina:"FURNACE"}));
        const tick2State = maquinas(newStateWF,colocarMaquina(22));
        const newStateT2 = maquinas(tick2State,selectMaquina({tipoMaquina:"TRANSPORTER"}));
        const tick3State = maquinas(newStateT2,colocarMaquina(32));
        const preMeltState = maquinas(tick3State,tick());
        expect(preMeltState.tablero.length).toEqual(4);
        expect(preMeltState.tablero[2].type).toEqual("FURNACE");
        expect(preMeltState.tablero[2].recurso).toEqual("ORO");
        const finalState = maquinas(preMeltState,tick());
        expect(finalState.tablero[3].recurso).toEqual("ORO FUNDIDO");
    })

})