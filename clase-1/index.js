const axios = require('axios');













////------------ Stack
//Hola






// Event Loop 


//------------ QUEUE

// setTimeout(async () => {
function sayHi() {
  
}
  
  
const searchPokemon = async (param) => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${param}`)

    console.log(response.data.name);

  } catch (error) {
    console.log(error.message);
  }
}

searchPokemon('340000')

//   console.log(response.data);
//   //data
// }, 1000);



