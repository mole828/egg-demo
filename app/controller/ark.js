const Controller = require('egg').Controller;

const mongoose = require('mongoose')
console.log('init')
const db = mongoose.createConnection('mongodb://localhost:27017/moles')
const {Schema} = mongoose
var doctorSchema = new Schema({},{collection:'doctor'})
var doctors = db.model('doc',doctorSchema)

var gachas = db.model('',new Schema({},{collection:'gacha'}))

const pageSize = 10

function init(router){
    router.get('/ark/list.doc',async function(ctx){
        const result = await doctors.find({})
        console.log(result)
        ctx.body=result
    })
    router.get('/ark/gacha',async function(ctx){
        const page = ctx.query.page?ctx.query.page:0
        ctx.body = await gachas.find({}).skip(pageSize*page).limit(pageSize)
    })
}

module.exports = {
    init
}