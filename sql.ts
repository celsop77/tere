import mysql, { ConnectionOptions } from 'mysql2';

const access: ConnectionOptions = {
  user: 'root',
  password: '',
  host:'localhost',
  database: 'tere',
};

export const conn = mysql.createConnection(access);