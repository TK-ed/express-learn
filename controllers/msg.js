function getMsg(req,res){
    res.send(`<h1>fuck</h1>`)
    console.log(req.method)
}

module.exports={
    getMsg,
}