const webS = require("ws")
const wss = new webS.Server({port:7777})

wss.on("connection", ws=>{
    console.log("connected client, ip: " + ws._socket.remoteAddress.replace("::ffff:",""))
    ws.on("message",msg=>{
        wss.broadcast(JSON.stringify({func:msg}))
    })
});

wss.broadcast = function broadcast(msg) {
    wss.clients.forEach(function each(client) {
        client.send(msg)
    });
};
