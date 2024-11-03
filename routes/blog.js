const express = require('express')
const path = require('path')
const blogs = require ('../data/blogs.js')

const router = express.Router()

router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../templates/index.html'))
})
router.get('/bloggg',(req,res)=>{
    blogs.forEach(e => {
        console.log(e.title)
    });
    res.sendFile(path.join(__dirname,'../templates/blogHome.html'))
})


module.exports = router