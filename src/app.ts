import express from 'express'
import routes from './routes'
import cors from 'cors'
// Connection with db
import './database/config/db'

export const app = express()
app.use(express.json())
app.use(cors())

app.use(routes)
