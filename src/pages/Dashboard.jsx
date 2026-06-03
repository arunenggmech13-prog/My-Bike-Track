import React, { useEffect, useState } from 'react'
import { getAllFuel } from '../services/db'

export default function Dashboard(){
  const [fuel, setFuel] = useState([])

  useEffect(()=>{
    getAllFuel().then(setFuel).catch(()=>{})
  },[])

  return (
    <div>
      <div className="row g-3 mb-3">
        <div className="col-6 col-md-3">
          <div className="card p-3"> 
            <h6>Current Mileage</h6>
            <p className="h5">{fuel.length ? fuel[fuel.length-1].mileage + ' km' : '0 km'}</p>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className="card p-3">
            <h6>Fuel Efficiency</h6>
            <p className="h5">-</p>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className="card p-3">
            <h6>Total Fuel Cost</h6>
            <p className="h5">₹{fuel.reduce((s,e)=>s+ (e.quantity*e.price),0).toFixed(2)}</p>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className="card p-3">
            <h6>Service Due</h6>
            <p className="h5">-</p>
          </div>
        </div>
      </div>

      <div className="card p-3 mb-3">
        <h6>Recent Fuel Entries</h6>
        {fuel.length === 0 ? (
          <p className="text-muted">No fuel entries yet</p>
        ) : (
          <ul className="list-group">
            {fuel.slice(-5).reverse().map((f)=> (
              <li className="list-group-item" key={f.id}>{f.date} — {f.mileage} km — {f.quantity} L @ ₹{f.price}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
