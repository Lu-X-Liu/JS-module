const name = 'Lu';

function double (n) {
    return n * 2;
}

export {name, double};

export default function sayHi() {
    console.log('Hi!')
}

//aggrigate modules
export {water} from './helper.js';