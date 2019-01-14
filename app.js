const express= require('express');
const socketIO=require('socket.io');
const http= require('http');
const app= express();
let server=http.createServer(app);
let io= socketIO(server)
const path= require('path');
const port= process.env.PORT || 3000
app.use(express.static(path.join(__dirname, 'public')));

// app.get('/',(req,res,next)=>{
//     res.render('index.html')
// });

// setting up connection
io.on('connection', (socket)=>{
    console.log('connected');

    // socket.emit('newEmail',{
    //     from:'cristos@gmail.com',
    //     text:'Hello there',
    //     createdAt:12345
    // });
    // socket.emit('newMessage',{
    //     from:'2@gmail.com',
    //     text:'Hello am here',
    //     createdAt:1234567
    // });
    socket.on('creatEmail',(data)=>{
        console.log('creat email',data)
    });
    socket.emit('newMessage', {
        from:'Admin',
        text:'welcome to the chat app',
        createdAt: new Date().getTime()
    });

    socket.broadcast.emit('newMessage', {
        from:'Admin',
        text:'new user joined',
        createdAt: new Date().getTime()
    })
    socket.on('creatMessage',(message)=>{
        console.log('creat message',message)
        io.emit('newMessage', {
            from: message.from,
            text:message.text,
            createdAt:new Date().getTime()
        })
    })

    socket.on('disconnect', ()=>{
        console.log('server disconnected')
    });
});

server.listen(port, ()=>{
    console.log(`express is listening at ${port}`)
});