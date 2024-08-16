import express, { json } from 'express';

const server = express();
server.use(json());

server.listen(8080, () => console.log('Server running on port 3000'));