import { carrito } from "../src/carrito";
import { calculateTotal } from "../src/functions";
import {describe, it, expect} from 'vitest';

describe('Integration test: Shopping cart',()=>{
    it('should calculate total correctly', ()=>{
        expect(calculateTotal(carrito)).toBe(95);
    });
})