import React,{ useEffect, useState } from 'react'
import Map from 'react-map-gl';
import Details from './Details';

const Mapbox = (props) => {
    const [locData, setlocData] = useState("")
    
    const [viewport, setviewport] = useState({
        latitude:null,
        longitude:null,
        zoom:12
      })
      
      useEffect(async() => {
        let locData= await fetch(`http://ip-api.com/json/157.34.156.19`)
        let parsedLocData = await locData.json();
        setlocData(parsedLocData);
        // console.log(parsedLocData)
        setviewport({
          latitude:parsedLocData.lat,
          longitude:parsedLocData.lon,
        })
      }, [])

  return  (
    <>
    <div className='map'>
         <Map id="map-card" style={{width: "90vw", height: "50vh",margin:"0 auto"}} 
          {...viewport} 
          mapboxAccessToken={"pk.eyJ1Ijoic2Fua2FscHQ5MiIsImEiOiJja3p0bG95YXE2MXc5Mm9vMXppcGN5b2hkIn0.HubbrNIGAt06pl8Ug1llog"} 
          mapStyle={"mapbox://styles/mapbox/streets-v9"}
         onViewportChange={viewport=>{
           setviewport(viewport);
         }}>
         </Map>
    </div>
         <Details query={locData.query} country={locData.country} regionName={locData.regionName} city={locData.city} zip={locData.zip} isp={locData.isp}/>
    </>
  )
}

export default Mapbox