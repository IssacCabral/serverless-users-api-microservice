import express from 'express'
import mainRouter from './routes/main-router'
import corsConfig from './config/corsConfig'

const app = express()

app.use(corsConfig)
app.use(mainRouter)
app.use(express.json())

export default app