const fs=require('fs')
const StartPage=fs.readFileSync(`${__dirname}/../../Frontend/Start.html`,'utf-8')
const mainPage=fs.readFileSync(`${__dirname}/../../Frontend/Home.html`,'utf-8')
exports.start=(req,res)=>{
res.send(StartPage)
}
exports.home=(req,res)=>{
    res.send(mainPage)
}
