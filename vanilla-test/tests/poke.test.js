import {it, expect, describe} from 'vitest';
import { findPokemon } from '../src/poke';

describe('findPokemon', ()=>{
    it('should throw an error if id is not a number', async()=>{
        await expect(findPokemon('a')).rejects.toThrowError('id parameter must be a number and an integer');
    });

    it('should throw an error if id is null or undefined', async()=>{
        await expect(findPokemon(null)).rejects.toThrowError('id is required');
    });

    it('should throw an error if id is lower than 1', async()=>{
        await expect(findPokemon(0)).rejects.toThrowError('id parameter must be greater than 0')
    });

    it('should throw an error if id is higher than 1302', async()=>{
        await expect(findPokemon(1303)).rejects.toThrowError('id parameter must be lower than 1303');
    });

    it('should return bulbasaur if id is 1', async()=>{
        const pokemon = await findPokemon(1);
        expect(pokemon.name).toBe('bulbasaur');
    })
})

