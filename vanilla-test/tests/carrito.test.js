import { carrito } from "../src/carrito";

import {describe, it, expect} from 'vitest';

describe('Carrito de compras', ()=>{
    it('should add items correctly', ()=>{
        carrito.push({id:4, nombre:'Gorra', precio:8});
        expect(carrito.length).toBe(4);
    });

    it('should remove items correctly',()=>{
        carrito.pop();
        expect(carrito.length).toBe(3);
    });

    it('shoul calculate total correctly', ()=>{
        const total = carrito.reduce((total, item)=> total + item.precio, 0);
        expect(total).toBe(95);
    })
})