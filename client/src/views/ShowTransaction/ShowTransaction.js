import { useEffect, useState } from "react"
import axios from "axios";
import "./ShowTransaction.css";

function ShowTransaction(){
const [transaction, setTransaction] = useState([]);
const [creditSum, setCreditSum] = useState(0);
const [debitSum, setDebitSum] = useState(0);

    const fetchTransaction = async ()=>{
        const response = await axios.get('/api/v1/transactions')
        const transactions = response?.data?.data

        let totalCredit = 0;
        let totalDebit = 0;

        transactions?.forEach((Trans)=> {
            if(transaction.type === 'credit')
            {
                totalCredit += transaction.amount;
            }else{
                totalDebit += transaction.amount;
            }
            
        });
        setCreditSum(totalCredit)
        setDebitSum(totalDebit)

        setTransaction(transactions)
    }

    useEffect(()=>{
        fetchTransaction();
    }, [])

    return(
        <>
        <div>
            <h1 className="text-center">Show Transaction</h1>
            <p>Credit: {creditSum}</p>
            <p>Debit: {debitSum}</p>

            {
                transaction?.map((newTrans, index)=>{
                    const {amount, type, category, description} = newTrans;
                    
                    
                    return(
                        <>
             
                        <div key={index} className="transaction-data">
                            <span className={`trans-amount ${type === 'credit' ? 'credit-amount': 'debit-amount'}`}>
                                {type === 'credit' ? '+': '-'} {amount}
                                &nbsp; {type === 'credit' ? 'credited': 'debited'}
                            </span>
                            
                            <p className="category-text">{category}</p>
                            <p className="description-text">{description}</p>
                        </div>
              
                        </>
                    )
                })
            }
        </div>
        </>
    )
}
export default ShowTransaction