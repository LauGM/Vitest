export function sum(a,b){
    if(typeof a !== 'number' ||typeof b !== 'number' ){
        throw new Error('Invalid arguments!');
    }
    return a + b;
}

export function isPrime(number) {
    if (number == null) return false;
    if (number <= 1) return false;
    for (let i = 2; i < number; i++) {
        if (number % i === 0) return false;
    }
    return true;
}

export function calculateTotal(cart) {
    return cart.reduce((total, item) => total + item.precio, 0);
  };