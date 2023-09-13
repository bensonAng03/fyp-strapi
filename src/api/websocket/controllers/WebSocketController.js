// api/websocket/WebSocketController.js

module.exports = {
  connect: async (ctx) => {
    const { io } = strapi.plugins['websocket'];

    // 处理WebSocket连接建立的逻辑
    console.log('WebSocket connection established');

    const socket = ctx.socket;
    const { id } = socket;

    // 监听WebSocket消息事件
    socket.on('message', (message) => {
      // 处理接收到的WebSocket消息
      console.log('Received message:', message);

      // 在这里执行相应的业务逻辑，如处理视频聊天消息等

      // 广播消息给所有客户端
      io.emit('message', message);
    });

    // 处理WebSocket连接关闭的事件
    socket.on('disconnect', () => {
      console.log('WebSocket connection closed');
    });
  },
};
