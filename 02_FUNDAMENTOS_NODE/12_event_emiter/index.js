const EventEmitter =require('events')
const eventEmitter = new EventEmitter()


eventEmitter.on('start',()=>{
    console.log('começou...')
})
console.log('prepare-se' )

function emit(){
    eventEmitter.emit('start')
}

setTimeout (emit,5000) 