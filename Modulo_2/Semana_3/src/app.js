import express from 'express'
import cors from 'cors'
import  { v4 as uuidv4 } from 'uuid';
import pizzaRoutes from './routes/pizzas.routes.js';
import solicitationsRoutes from './routes/solicitations.routes.js';

const app = express()
app.use(express.json())
app.use(pizzaRoutes)
app.use(solicitationsRoutes)

export default app