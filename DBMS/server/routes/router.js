// const express= require('express');
// const router = new express.Router();
// const conn = require("../db/conn")
// const multer = require("multer");
// const moment = require("moment")

// //img storange
// var imgconfig = multer.diskStorage({
//     destination:(req,file,callback)=>{
//         callback(null,"./uploads");
//     },
//     filename:(req,file,callback)=>{
//         callback(null,`image-${Date.now()}.${file.originalname}`)
//     }
// })

// const isimg =(req,file,callback)=>{
//     if(file.mimetype.startWith("image")){
//         callback(null,true)
//     }else{
//         callback(null,Error("only image is allowed"))
//     }
// }

// var audioconfig = multer.diskStorage({
//     destination:(req,file,callback)=>{
//         callback(null,"./uploads")
//     },
//     filename:(req,file,callback)=>{
//         callback(null,`audio-${Date.now()}.${file.originalname}`)
//     }
// })

// var upload = multer({
//     storage:imgconfig,
//     fileFilter:isimg
// })
// var upload1 = multer({
//     storage:audioconfig
// })

// router.post("/admin",upload.single("simg"),(req,res)=>{
//    const {fname} = req.bodyj;
//    const {filename} = req.file
//    if(fname || filename){
//     res.status(422).json({status:422,message:"fill all the details"})
//    }
//    try{
//         let data= moment(new data()).format("YYYY-MM-DD hh:mm:ss");
//         conn.query("INSERT INTO admin set ?",{songname:fname,img:filename,data:date})
//    }
//    catch(error){
//     res.status(422).json({status:422,error})
//    }
// })

// router.post("/admin",upload1.single("saudio"),(req,res)=>{
//     console.log(req.file)
// })

// module.exports = router;