import React from 'react'

const Details = ({country,regionName,city,zip,isp,query}) => {
    
  return (
    <div className="details card" >
  <div className="card-body">
    <p className="card-text">IP Address :  <span>{query}</span></p>
    <p className="card-text">City : <span>{city}</span>, Zip : <span>{zip}</span></p>
    <p className="card-text">State :  <span>{regionName}</span>, Country : <span>{country}</span></p>
    <p className="card-text">Network : <span>{isp}</span></p>
  </div>
</div>
  )
}

export default Details