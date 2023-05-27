const postsModel = require("../models/postsModel")

// Create

exports.createPost = (req, res)=>{
    let reqBody= req.body;
    reqBody.email= req.headers['email']

    postsModel.create(reqBody,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail", data: err})
        }
        else {
            res.status(200).json({status:"success", data: data})
        }
    })
}
//
exports.deletePost= (req,res)=>{
    let id= req.params.id;
    let Query = {_id: id};
    postsModel.remove(Query,(err,data)=>{
        if(err){
            res.status(400).json({status:"Delete Fail", data: err})
        }
        else {
            res.status(200).json({status:"Success", data: data})
        }
    })

}
//
//
exports.updatePost = (req, res)=>{
    //let email = req.headers['email'];
    let id= req.params.id;
    let Query = {_id: id};
    let reqBody = req.body;
    reqBody.email= req.headers['email']


    postsModel.updateOne( Query, reqBody, (err,data)=>{
        if(err){
            res.status(400).json({status:"Fail", data: err})
        }
        else {
            res.status(200).json({status:"Success", data: data})
        }
    })
}
//
exports.readPost= (req,res)=>{
    let email = req.headers['email'];

    postsModel.aggregate([
        {$match:{ email: email}},
        {$project:{
                _id:1,title:1,author:1, content:1,email:1,
                createDate:{
                    $dateToString:{
                        date:"$createDate",
                        format:"%d-%m-%Y"
                    }
                }
            }
        }
    ],(err,data)=>{
        if(err){
            res.status(400).json({status:"Query Fail", data: err})
        }
        else {
            res.status(200).json({status:"Success", data: data})
        }
    })
}


exports.readPostByID= (req,res)=>{
    let email = req.headers['email'];
    let id= req.params.id;
    //let Query = {_id: id};
    postsModel.aggregate([
        {$match:{ _id: id, email: email }},
        {$project:{
                _id:1,title:1,author:1, content:1,email:1,
                createDate:{
                    $dateToString:{
                        date:"$createDate",
                        format:"%d-%m-%Y"
                    }
                }
            }
        }
    ],(err,data)=>{
        if(err){
            res.status(400).json({status:"Query Fail", data: err})
        }
        else {
            res.status(200).json({status:"Success", data: data})
        }
    })
}

