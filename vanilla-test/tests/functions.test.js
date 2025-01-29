import { sum, isPrime } from "../src/functions";

import {describe, it, expect} from 'vitest';

describe('Sum function', ()=>{
    it('should return correct results',()=>{
        expect(sum(2,3)).toBe(5);
        expect(sum(-1,3)).toBe(2);
        expect(sum(0,0)).toBe(0);
    });

    it('should handle non-numeric values', ()=>{
        expect(()=>sum('hola','chau')).toThrow();
        expect(()=>sum(null,5)).toThrow();
    })
});

describe('isPrime function',()=>{
    it('should correctly identify prime numbers', ()=>{
        expect(isPrime(2)).toBe(true);
        expect(isPrime(4)).toBe(false);
        expect(isPrime(-1)).toBe(false);
        expect(isPrime()).toBe(false);
    })
})