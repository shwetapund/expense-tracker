import Transaction from "../model/Transactions.js"

const addTransactionApi = async (req,res)=>{
    try{
        const {amount,type, description, category} = req.body;

    const obj = new Transaction({
        amount,
        type, 
        description, 
        category
    })
    const savedTransaction = await obj.save();

    res.json({
        success:true,
        data:savedTransaction,
        message:'successfully transaction added'
    })
    }
    catch(err){
        res.json({
            success:false,
            message:err.message
        })
    }
}

const getTransactionAPi = async (req,res)=>{
    const findTransaction = await Transaction.find();

    res.json({
        success:true,
        data:findTransaction,
        message:"successfully fetch Transaction"
    })
}

export {addTransactionApi, getTransactionAPi}