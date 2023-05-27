const mongoose=  require("mongoose");

const DataSchema= mongoose.Schema({
        title: {type: String,unique: true},
        author:{type: String},
        content:{type: String},
        email:{type: String},
        createDate:{type: Date, default:Date.now}
    },{versionKey:false}
)
const postsModel= mongoose.model("posts", DataSchema);
module.exports = postsModel;


