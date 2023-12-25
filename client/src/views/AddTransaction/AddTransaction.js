import react, {useState, useEffect} from 'react';
import axios from 'axios';

function AddTransaction(){
const [amount, setAmount] = useState('')
const [type, setType] = useState('')
const [category, setCategory] = useState('')
const [description, setDescription] = useState('')

const AddTrans = async ()=>{
    const response = await axios.post('/api/v1/transactions',{
        amount,
        type, 
        description,
        category
    })
    alert("addded");
}

// amount,type, description, category
    return(
        <>
        <div>
            <form>
                <h1>AddTransaction</h1>
                <div>
                    <input 
                    type='Number'
                    value={amount}
                    onChange={(e)=>{
                        setAmount(e.target.value)
                    }}
                    className='input-box'
                    placeholder='Amount'
                    />
                    
                </div>
                <div>
                <select
                    value={category}
                    onChange={(e)=>{
                        setCategory(e.target.value)
                    }}>
                         <option>Select category here</option>
                        <option value="food">Food</option>
                        <option value="freelances">Freelance</option>
                        <option value="salary">Salary</option>
                        <option value="entertainment">Entertainment</option>
                        <option value="other">Other</option>
                    </select>
  
                </div>
                <div>
                 
                    Type: 
                    <div>
                        <div> 
                            <input 
                    type='radio'
                    name='amount'
                    checked={type === "credit"}
                    value="credit"
                    onChange={(e)=>{
                        if(e.target.checked){
                            setType(e.target.value)
                        }
                  
                    }}
                    className='input-box'
                    
                    /> Credit
                    </div>
                        <div> 
                            <input 
                    type='radio'
                    name='type'
                    checked={type === "debit"}
                    value="debit"
                    onChange={(e)=>{
                        if(e.target.checked){
                            setType(e.target.value)
                        }
                    }}
                    className='input-box'
                    
                    /> Debit
                    </div>
                    </div>
                    
                </div>
         
                <div>
                    <input 
                    type='text'
                    value={description}
                    onChange={(e)=>{
                        setDescription(e.target.value)
                    }}
                    className='input-box'
                    placeholder='description'
                    />
                    
                </div>

                <button onClick={AddTrans}>Add</button>
            </form>
        </div>
        
        
        </>
    )
}
export default AddTransaction