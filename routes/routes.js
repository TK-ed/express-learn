const express=require('express');
const fnd=require('../controllers/friend.js')

const router=express.Router();

router.get('/',fnd.getfrnd)
router.get('/:frndid',fnd.getfrnds)

router.post('/',fnd.postfrnd)

module.exports=router;