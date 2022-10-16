import express from 'express'
import mainRouter from './routes/main-router'
import corsConfig from './config/corsConfig'

const app = express()

app.use(mainRouter)
app.use(express.json())
app.use(corsConfig)

export default app