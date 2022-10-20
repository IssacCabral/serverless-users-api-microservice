import "reflect-metadata"
import express from 'express'
import mainRouter from './routes/main-router'
import corsConfig from './config/corsConfig'
import { json } from 'express';

const app = express()

app.use(corsConfig)
app.use(json())
app.use(mainRouter)

app.listen(3333)

//export default app