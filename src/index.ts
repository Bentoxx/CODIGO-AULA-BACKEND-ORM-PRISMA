import 'dotenv/config'
import express, { Request, Response } from 'express'

const app = express()

app.use(express.json())
app.get('/', (req: Request, res: Response)=>{
    return res.json('Tudo ok!')
})

app.listen(process.env.PORT, () =>{
    console.log('Servidor iniciado na porta: '+ process.env.PORT);
    
})