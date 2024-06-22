import React from 'react'

function Card({name,des}) {
  return (
   <>
    <div className="card">
      <img src="https://via.placeholder.com/150" alt="Placeholder" />
      <h2>{name}</h2>
      <p>{des}</p>
      {/* <h2>Yash</h2>
      <p>Shree</p> */}
      
    </div>
   </>
  )
}

export default Card