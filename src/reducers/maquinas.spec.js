import maquinas from './maquinas';
import {selectMaquina,colocarMaquina} from '../actions/maquina';

describe('game reducer', () => {
    it('should return an empty board',() => {
        expect(maquinas(undefined,{type: '@@INIT'}).tablero).toEqual([])
    })

    it('should handle select action',() => {
        expect(maquinas(undefined,selectMaquina("STARTER")).maquinaSeleccionada).toEqual("STARTER")
    })

    it('should handle put action after select with enough money',() => {
        const state = maquinas(undefined,selectMaquina("STARTER"));
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
        const state = maquinas(undefined,selectMaquina("STARTER"));
        const newState = maquinas(state,colocarMaquina(2));
        expect(newState.tablero.length).toEqual(0);
        expect(newState.maquinaSeleccionada).toEqual("STARTER");
    })

    it('should not let to add a new machine in the board in a occupied cell',() => {
        const state = maquinas(undefined,selectMaquina("CRAFTER"));
        state.dinero = 1000;
        let newState = maquinas(state,colocarMaquina(2));
        expect(newState.tablero.length).toEqual(1);
        newState = maquinas(newState,selectMaquina("STARTER"));
        newState = maquinas(newState,colocarMaquina(2));
        expect(newState.tablero.length).toEqual(1);
        expect(newState.maquinaSeleccionada).toEqual("STARTER");
    })
})