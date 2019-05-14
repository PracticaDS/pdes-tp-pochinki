import maquinas from './maquinas';
import {selectMaquina,colocarMaquina} from '../actions/maquina';

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
})