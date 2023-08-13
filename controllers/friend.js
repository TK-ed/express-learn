const frnds=require('../models/frnds')

function postfrnd(req,res){

    if(!req.body.name){
        res.status(400).json({
            error:"no friend to add"
        });
    }
    const frind={
        id:frnds.length,
        name:req.body.name
    }
    frnds.push(frind)
    console.log(frnds);
    res.send(frnds)
}

function getfrnds(req,res){
    const frndid=req.params.frndid;
    const frnd=frnds[frndid]
    if(frnd){
        res.status(200).json(frnd)
    }else{
        res.status(404).json({
            error:"the fnd doesnot exits"
        })
    }
}

function getfrnd(req,res){
    console.log('middleware');
    res.send(frnds)
}

module.exports={
    postfrnd,
    getfrnds,
    getfrnd
}