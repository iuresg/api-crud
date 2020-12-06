import "reflect-metadata"; 
import { app } from './app'
const PORT = 3000

const server = app.listen(PORT, () => console.log('rodando na porta =>',PORT))

process.on("SIGINT", () => {
    server.close()
    console.log('App encerrado!')
})