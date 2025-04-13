
const aiservise = require("../services/ai.google.js")

module.exports.getReview = async(req,res) =>{
    const code = req.body.code;

    if(!code){
        return res.status(400).send("Promt is required");
    }
    const response = await aiservise(code);
    res.send(response);
}