const express = require('express')
const { Configuration, OpenAIApi} = require('openai')
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()

const app = express()
const port = process.env.PORT || 4000

app.use(express.json())
app.use(cors())

// config openai
const configuration = new Configuration({
    apiKey: process.env.api_key
})

const openai = new OpenAIApi(configuration)

app.post('/openai', async(req, res)=> {
    const { message} = req.body
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `${message}`,
        max_tokens: 7,
        temperature: 1
    })
    res.json({
        completion: response.data.choices[0].text
    })
})

app.listen(port, ()=> console.log(`server running on http://localhost:4000`))


