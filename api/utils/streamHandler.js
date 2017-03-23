module.exports = {
  io: function(socket) {
    socket.on('activity', function(data) {
      console.log(data);
    });
  }
}
