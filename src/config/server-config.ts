import {config} from 'dotenv';

config();

const SERVER_PORT = process.env.SERVER_PORT ?? 9999;

export {
  SERVER_PORT
};