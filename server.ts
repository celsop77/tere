import Fastify from 'fastify'
import cors from '@fastify/cors'
import { conn } from './sql'
const fastify = Fastify()

fastify.register(cors)

fastify.get('/produtos', (request, reply) => {

    try {

        conn.query('SELECT id, nome, preco, categoria FROM produtos;' , (_err,rows) =>{
            console.log(rows) 
            return rows  
        })
    


//         conn.query<RowDataPacket[]>('SHOW TABLES FROM `test`;', (_err, rows) => {
//   console.log(rows);

    } catch (error) {
        console.log(error)
    }


})

fastify.listen({ port: 8001 }, (err, address) => {

    if (err) throw err

    console.log('servidor rodando')

})