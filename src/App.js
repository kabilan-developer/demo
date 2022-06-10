import './App.css';
import React,{useEffect} from 'react'
import axios from 'axios';
import { useDispatch,useSelector } from 'react-redux';
import { fetchDataSuccess } from './redux/actions/action';
import Content from './components/Content';

const url = "https://jsonplaceholder.typicode.com/users";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state)=> state.users)

  const fetchData = async()=>{
    try{
      const response = await axios.get(url);
      dispatch(fetchDataSuccess(response.data))
      console.log(response.data)
    }
    catch(err){
      console.log(err)
    }
  }
  useEffect(()=>{
    fetchData()
  },[])

  // function tricky(){
  //   for(var i=0;i<5;i++){
  //     setTimeout(()=>{
  //       console.log(i);
  //     },0)
  //   }
  // }
  // tricky();
 let array = ["one","two","three"]
 console.log(Object.assign({},array));

  return (
    <div className='App'>
      {
        user.map((item)=>(
          <p key={item.id}>{item.email}</p>
        ))
      }
      <hr/>
      <Content/>
    </div>
  );
}

export default App;
