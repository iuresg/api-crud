import { createConnection } from "typeorm"

const connection = async () => {
    const connect = await createConnection()
    console.log(connect.options.database)

    process.on('SIGINT', () =>{
        connect.close().then(() => {
            console.log('conecção com db encerrada!')
        })
    })
};

export default connection();