let socket= io()

        socket.on('connect', ()=>{
            console.log('client side connected');
            // socket.emit('creatEmail',{
            //     to:'kelechi@gmail.com',
            //     text:'hello'
            // });
            // socket.emit('creatMessage',{
            //     from:'sb@gmail.com',
            //     text:'hello yo!!'
            // });
        });

        socket.on('disconnect', ()=>{
            console.log('Client disconnected')
        });

        socket.on('newEmail', function(email){
            console.log('new Email: ', email)
        });

        socket.on('newMessage',function(message){
            console.log('new message',message)
        });

        socket.on('newUserMessage', function(message){
            console.log('new user',message)
        })