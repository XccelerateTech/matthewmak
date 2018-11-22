$(() => {

    var socket = io();

    $('#send').click((e) => {
        e.preventDefault();
        socket.emit('chat message', $('#OwnMessage').val());
        $('#OwnMessage').val('');
        return false;
    })

    socket.on('chat message', function (msg) {
        $('#MessageBlock').append($('<li>').text(msg));
    });

})