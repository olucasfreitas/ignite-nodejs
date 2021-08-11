const express = require('express');

const app = express();

app.get('/', (request, response) => {
  return response.json({message: 'hello world - fundamentos js'})
})

app.listen(3333, () => {
  console.log('Server started')
})