import {Schema,model} from "mongoose";

const transactionSchema = new Schema({
    amount:{
        type:Number,
        required:true
    },
    type:{
        type:String,
        enum:['debit','credit'],
        required:true
    },
    description:{
        type:String,
        
    },
    category:{
        type:String,
        enum:['entertainment','food','salary','freelances','market','other'],   
    }
})

const Transaction = model('Transaction',transactionSchema)

export default Transaction;