import { cube } from './math.js';
import './style.css'

function component() {
    var element = document.createElement('pre');

    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    element.innerHTML = [
        'Hello webpack!',
        '5 cubed is equal to ' + cube(5) + '\n\nprocess.env.NODE_ENV = ' + process.env.NODE_ENV
    ].join('\n\n');

    element.classList.add('hello')
    return element;
}

document.body.appendChild(component());