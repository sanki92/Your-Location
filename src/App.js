import './App.css';
import React,{ useEffect, useState } from 'react'
import Mapbox from './components/Mapbox';
// import Map from 'react-map-gl';

function App() {




  const [ip, setip] = useState(null)
  useEffect(async() => {
      let data =await fetch('https://api.ipify.org/?format=json')
      let parsedData = await data.json();
      console.log(parsedData)
      setip(parsedData.ip)
    }, [])
    
    
  
    
  return (
    <div>
    <Mapbox/>
    </div>
  );
}

export default App;
