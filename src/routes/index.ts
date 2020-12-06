import { Router } from 'express';
import userRouter from './user.routes'

const routes = Router()
routes.use('/usuarios', userRouter)

export default routes;