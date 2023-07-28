import express from 'express';
import http from 'http';
import socketIo from 'socket.io';
import balanceRouter from './routes/balance.router';
import BalanceService from './services/balance.service';

const cors = require('cors');
const app = express();
const server = http.createServer(app);

const io = require('socket.io')(server, {
  cors: {
    origin: '*', 
    methods: ['GET', 'POST'],
    allowedHeaders: ['my-custom-header'],
    credentials: true,
  },
});

const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/api', balanceRouter);

// Escuchar conexiones de clientes
io.on('connection', (socket:socketIo.Socket) => {
  console.log('Cliente conectado');
  // Emitir los datos al cliente cada 8 segundos
  setInterval(async () => {
    const data = await new BalanceService().getBalance(); 
    socket.emit('message', data);
  }, 8000);
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});