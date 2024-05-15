import React,{ useState} from 'react'
import ParentContainer from './components/ParentContainer'
import Display from './components/Display'
import Button from './components/Button'

export default function App() {
  const[data,setData] = useState('');
  function handleClick(val){
    if(val ==='='){
      setData(eval(data));
    }
    else if(val==="C"){
      setData("");
    }
    else if(val ==="<"){
      let res = data+'';
      setData(res.slice(0,-1));
    }
    else{
      setData(data+val);
    }

  }
  return (

   
      <>
      <ParentContainer>
        {/* the data written inside this conatiner willl not be visisble until or unless we treat the html elements usind in it as the children in the main file */}
       
        <Display data={data}/>
        <Button btnClick ={handleClick}/>
      </ParentContainer>
     
      </>

      
   
  )
}
