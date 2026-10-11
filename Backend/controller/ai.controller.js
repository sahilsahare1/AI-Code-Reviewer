const app = require('../src/app')
const aiService = require('../services/ai.services')

module.exports.aiResponse = async (req,res)=> {

    const prompt = req.body.prompt

    if(!prompt){
       return res.status(400).send("Prompt required")
    }
    
    const response =  await aiService(prompt);

    res.send(response)
}

 