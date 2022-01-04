import {EventEmitter} from "events";

const emitter = new EventEmitter();

emitter.on('hello', (name) => {
    console.info(`Hello ${name}`)
})
emitter.on('hello', (name) => {
    console.info(`Halo ${name}`)
})
emitter.emit('hello', 'Abdurahman');