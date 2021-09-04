import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux'
import {actionCreators, historyCreator} from './state/index'
import {useState} from 'react'


function App() {

  const account = useSelector((state)=> state.account);
  const history = useSelector((state)=> state.history);
  const dispatch = useDispatch();
  const {withdrawMoney, depositMoney} = bindActionCreators(actionCreators, dispatch);
  const {accounthistory} = bindActionCreators(historyCreator, dispatch);

  //let amount = 0;
  const [user, setUser] = useState({
      fname : "",
      amount : ""
  });

  const handleChange = (e)=>{
      const {name, value} = e.target;
      setUser(preValue =>{
          return {
            ...preValue,
            [name] : value
          }
      });
  }

  const handleDeposit = ()=>{
    depositMoney(parseInt(user.amount));
    accounthistory({
       type : 'History',
       payload : {
            transactiontype : 'deposit',
            user : user.fname,
            amount : user.amount
       }
    });
    setUser({
      fname : "",
      amount : ""
     });
  }

  const handleWithdraw = ()=>{
    withdrawMoney(parseInt(user.amount));
    accounthistory({
       type : 'History',
       payload : {
            transactiontype : 'withdraw',
            user : user.fname,
            amount : user.amount
       }
    });
    setUser({
      fname : "",
      amount : ""
  });
  }

  return (
    <>
    <div style={{marginLeft:'20%', marginRight:'20%'}}>
        <h2 style={{textAlign:'center'}}>New Balance {account}</h2>


        <div class="form-group">
          <label for="exampleInputEmail1">Amount</label>
          <input 
            type='text' 
            onChange={handleChange}
            name = 'amount'
            value ={user.amount}
            className ='form-control'
            />
        </div>

        <div class="form-group">
            <label for="exampleInputEmail1">Name</label>
            <input 
            type='text' onChange={handleChange} 
            name='fname' 
            value ={user.fname}
            className ='form-control'
            />
        </div>
       <div className='row' style={{marginTop:'20px'}}>

         <div className='col-md-6' style={{textAlign:'right'}}>
               <button className='btn btn-success' onClick = {handleDeposit}>deposit</button>
         </div>
         <div className='col-md-6' style={{textAlign:'left'}}>
              <button className='btn btn-info' onClick = {handleWithdraw} >withdraw</button>
         </div>

       </div>

        
        
   

 <br/>

      <div>
        <table className='table'>
          <thead>
          <tr>
            <td>Name</td>
            <td>Amount</td>
            <td>Transaction Type</td>
          </tr>
          </thead>
          <tbody>
            {history.map((details)=>{
             return(<tr>
                 <td>{details.user}</td>
                 <td>{details.amount}</td>
                 <td>{details.transactiontype}</td>
               </tr>)
            })}
          
          </tbody>
        </table>
      
      </div>

      </div>

    </>
    
  );
}

export default App;
