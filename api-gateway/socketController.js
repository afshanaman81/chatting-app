module.exports = {
    handleJoin: () => {
        console.log(`user joined`)
    },
    handleRegister: () => {
        console.log(`user registered`)
    },
    handleLeave: () => {
        console.log(`user left`)
    },
    handleMessage: (msg) => {
        console.log(`message: ${msg}\n`)
        io.emit('message', msg);
        // call the direct-message-service 
    },
    handleGroupMessage: (msg) => {
        console.log(`group message: ${msg}\n`)
        // call the group-message-service 
    },
    handleBroadcast: (msg) => {
        console.log(`broadcast: ${msg}\n`);
        io.emit('broadcast', msg);
      }
}