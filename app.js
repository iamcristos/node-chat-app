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

    socket.emit('newEmail',{
        from:'cristos@gmail.com',
        text:'Hello there',
        createdAt:12345
    });
    socket.emit('newMessage',{
        from:'2@gmail.com',
        text:'Hello am here',
        createdAt:1234567
    });
    socket.on('creatEmail',(data)=>{
        console.log('creat email',data)
    });
    socket.on('creatMessage',(message)=>{
        console.log('creat message',message)
    })

    socket.on('disconnect', ()=>{
        console.log('server disconnected')
    });
});

server.listen(port, ()=>{
    console.log(`express is listening at ${port}`)
});