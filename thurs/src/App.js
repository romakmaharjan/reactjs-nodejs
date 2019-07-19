import React from 'react';
import logo from './logo.svg';
import UserDetails from './UserDetails'
import './App.css';

function App() {
  const [data,setData]=React.useState([])
  async function getData(){
    const response =await fetch('http://localhost:4000')
    const jsondata= await response.json()
    setData(jsondata)
  }
  
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <button onClick={getData}>Submit</button>
          {data.map(item => 
            
            <UserDetails 
              name = {item.name.first} 
              imgUrl = {item.picture.large} 
              email = {item.email}
            />)
            
          }
          
          {/* {data.gender} */}
          {/* {data.name} */}
          {/* {data.city} */}
          </div>
        
    </div>
  );
}

export default App;
