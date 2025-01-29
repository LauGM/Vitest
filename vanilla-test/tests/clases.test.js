import { Producto } from "../src/clases";

import {describe, it, expect} from 'vitest';

let producto = new Producto('Camiseta', 15);

describe('Producto', ()=>{
    it('should create a product with name and price', ()=>{
        expect(producto.nombre).toBe('Camiseta');
        expect(producto.precio).toBe(15);
    });

    it('should calculate tax correctly', ()=>{
        const tax=0.2;
        expect(producto.calcularImpuesto(tax)).toBe(18);
    })
})