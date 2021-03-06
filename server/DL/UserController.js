require('./db')
const UserModel=require('./UserModel')


async function create(data){//כל פעולה מול הדטהבייס היא אסינכרוניט
    return await UserModel.create(data)
}

async function read(filter={},projection){
   return await UserModel.find(filter,projection)
}

async function update(_id, data){
    return await UserModel.findByIdAndUpdate(
        _id,
        data,
        {new:true,runValidators:true})

 }

module.exports={create, read,update}