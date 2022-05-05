import 'dotenv/config'; 
import express from 'express';
import cors from 'cors';
import { submitRout } from './Controllers';

const app = express();

app.use(cors())
app.use(express.json());
app.use(submitRout);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('❤️‍🔥 Server is running at http://localhost:' + PORT, '🚀')
});