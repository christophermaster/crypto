
import express from 'express';
import balanceRouter from './routes/balance.router';
const cors = require('cors');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/api', balanceRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});