// const AutomationsController = require("../controllers/AutomationsController")

const socketRouter = (socket) => {
    // Import JWT verification middleware
    // const { JWTValidationSocket } = require("../middlewares/AuthMiddleware");
    // socket.use(JWTValidationSocket)

    var gameroom = socket.of('/game');

    gameroom.on('connection', (io)=>{
        io.on('chat_message', async (message)=>{
            console.log(message)
            gameroom.emit('chat_message', message);
        })

        io.on('draw', async (message)=>{
            console.log(message)
            gameroom.emit('draw', message);
        })
    })
}

module.exports = socketRouter;
