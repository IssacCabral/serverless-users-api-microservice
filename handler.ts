import serverless from 'serverless-http'
import app from './src'

export const handler = serverless(app)