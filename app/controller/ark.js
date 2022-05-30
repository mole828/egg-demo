
const mongoose = require('mongoose')
console.log('init')
const db = mongoose.createConnection('mongodb://localhost:27017/moles')
const {Schema} = mongoose
var doctorSchema = new Schema({nickName:String},{collection:'doctor'})
var doctors = db.model('doc',doctorSchema)

function init(router){
    
    router.get('/ark/docs',async function(ctx){
        const result = await doctors.find({})
        console.log(result)
        ctx.body=result
    })
}

module.exports = {
    init
}