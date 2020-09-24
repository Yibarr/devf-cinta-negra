const express = require('express')
const axios = require('axios')
const app = express()

const PORT = 4000

// const errorHandler = (err, req, res, next) => {

//   console.log(err.stack)
//   res.status(500).send('Oops...')
// }

const reqDate = (req, res, next) => {
  const date = 'Hola que tal'
  req.date = date
  next()
}


app.use(express.json({ extended: true }))
app.use(reqDate)




app.get('/', (request, response) => {
  console.log(request.date)
  response.send('<h1>Bienvenido a mi API</h1>')
})


app.post('/login', ({ body }, response) => {
  response.send(body)
  
})



app.get('/pokedex/:id', async ({ params }, response, next) => {
  const { id } = params
  try {
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    response.send(`Se hizo la petición del pokemón ${data.name}, ${data.id}`)
    
  } catch (error) {
    next(error)
  }

})

app.listen(PORT, () => {
  console.log(`Se ha inicializado la aplicación en el puerto ${PORT}`)
})