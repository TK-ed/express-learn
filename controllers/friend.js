const frnds=require('../models/frnds')

// function postfrnd(req,res){

//     if(!req.body.name){
//         res.status(400).json({
//             error:"no friend to add"
//         });
//     }
//     const frind={
//         id:frnds.length,
//         name:req.body.name
//     }
//     frnds.push(frind)
//     console.log(frnds);
//     res.send(frnds)
// }

const function postFriend = (req, res) => {
    if(!req.body){
        res.status(401).send('No friend to add!!')
    }
    var arr = [
        {
            "id": 0,
            "name": "TK-ed"
        }
    ]
    try {
        const { id, name } = req.body
        let newArr = {
            id: id,
            "name": name
        }
        arr.push(newArr)
        res.status(201).send(newArr)
    } catch (err){
        res.send(err)
    }
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
