import express from 'express';
import { SERVER_PORT } from "./config"
import { apiRouter } from './routes';
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api",apiRouter)



app.listen(SERVER_PORT, () => {
  console.log(`Server is running on port ${SERVER_PORT}`);
});