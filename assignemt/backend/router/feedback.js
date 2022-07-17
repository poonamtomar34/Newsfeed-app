const express=require('express')
const router=new express.Router()
const Post=require('../model/model')

router.get('/feedback', async(req,res)=>{
    try{
        const getPost=await Post.find()
        res.send(getPost)
    }catch(err){
        res.send(err)
    }
})
router.post('/feedback', async(req,res)=>{
    try{
        const {firstName,lastName,comment,email,country,phoneNo}=req.body
        const post=await Post.create({
            firstName,lastName,comment,email,country,phoneNo
        })
        res.send(post)
    }catch(err){
        res.send(err)
    }
})
module.exports = router;