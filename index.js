const express = require("express")
const servidor = express()
const hbs = require("hbs")
servidor.listen(80)
servidor.use(express.static(`${__dirname}/views`))
servidor.set('view engine', 'hbs')
hbs.registerPartials(`${__dirname}/views/partials`)
servidor.get("/",(req,res)=>{
    res.render("index.hbs",{
        nombre:"nicolas"
    })
})
servidor.get("/login",(req,res)=>{
    res.render("login.hbs")
})