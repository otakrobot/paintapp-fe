import openSocket from 'socket.io-client';

const subscribeToDrawClick = () => {
    const socket = openSocket('http://localhost:9000');
    return socket;
    // socket.on('connect', data => {
    //     console.log("asd")
    // });
}

export { subscribeToDrawClick };