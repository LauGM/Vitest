export class Producto {
    constructor(nombre, precio) {
      this.nombre = nombre;
      this.precio = precio;
    }
  
    calcularImpuesto(impuesto) {
      return this.precio * (1 + impuesto);
    }
  }