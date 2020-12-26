import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:9000');

const subscribeToDrawClick = () => {
    socket.on('connect', data => {
        console.log(data)
    });
}

export { subscribeToDrawClick };