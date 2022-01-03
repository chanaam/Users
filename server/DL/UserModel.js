const mongoose=require('mongoose')

const schema=new mongoose.Schema({
    name:{
        type:String,
        required:true,//שדה חובה? כן
        minlengt:2,//מינימום אורך שם שתי אותיות
        trim:true//מוריד רווחים
    },
    email:{
        type:String,
        required:true,
        unique:true,//משתמש יחודי אימייל אחד למשתמש
        lowercase:true//אותיות קטנות
    },
    password:{
        type:String,
        required:true,
        select:false//שלא יביא לי כשאני עושה סלקט
    },
    lastSeen:{//ניראה לאחרונה
        type:Date,
        default:Date.now
    }
    

})

module.exports=mongoose.model('user', schema)//name in the mongo and schema