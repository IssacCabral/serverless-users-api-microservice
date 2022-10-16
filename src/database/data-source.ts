import {DataSource} from 'typeorm'

// import env from '../config/env'
// const dataSource = new DataSource({
//     type: 'mysql',
//     host: env.TYPEORM_HOST,
//     port: Number(env.TYPEORM_PORT),
//     username: env.TYPEORM_USERNAME,
//     password: env.TYPEORM_PASSWORD,
//     database: env.TYPEORM_DATABASE,
//     migrations: [__dirname + '/migrations/*{.ts,.js}'],
//     entities: [ __dirname + "/../app/entities/*{.ts,.js}"],
// })

const dataSource = new DataSource({
    type: 'mysql',
    host: 'users-microservice-db.cvnv8efwjlyi.us-east-1.rds.amazonaws.com',
    port: 3306,
    username: 'admin',
    password: '12345678',
    database: 'app',
    migrations: [__dirname + '/migrations/*{.ts,.js}'],
    entities: [ __dirname + "/../app/entities/*{.ts,.js}"],
})

// dataSource.initialize()
//     .then(() => {
//         console.log("Data Source has been initialized!")
//     })
//     .catch((err) => {
//         console.error("Error during Data Source initialization", err)
//     })

export default dataSource