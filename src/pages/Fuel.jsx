import React, { useState } from 'react'
import { addFuel, getAllFuel } from '../services/db'

export default function Fuel(){
  const [state, setState] = useState({date:'',mileage:'',quantity:'',price:'',notes:''})
  const [history, setHistory] = useState([])

  const load = ()=> getAllFuel().then(setHistory)

  React.useEffect(()=>{ load() }, [])

  const submit = async (e)=>{
    e.preventDefault()
    await addFuel({ ...state, mileage: Number(state.mileage), quantity: Number(state.quantity), price: Number(state.price) })
    setState({date:'',mileage:'',quantity:'',price:'',notes:''})
    load()
  }

  return (
    <div>
      <div className="card p-3 mb-3">
        <h6>Add Fuel Entry</h6>
        <form onSubmit={submit} className="row g-2">
          <div className="col-md-3"><input required className="form-control" type="date" value={state.date} onChange={e=>setState({...state,date:e.target.value})} /></div>
          <div className="col-md-3"><input required className="form-control" placeholder="Mileage" type="number" value={state.mileage} onChange={e=>setState({...state,mileage:e.target.value})} /></div>
          <div className="col-md-2"><input required className="form-control" placeholder="Liters" step="0.1" type="number" value={state.quantity} onChange={e=>setState({...state,quantity:e.target.value})} /></div>
          <div className="col-md-2"><input required className="form-control" placeholder="Price" step="0.01" type="number" value={state.price} onChange={e=>setState({...state,price:e.target.value})} /></div>
          <div className="col-md-12"><textarea className="form-control" placeholder="Notes" value={state.notes} onChange={e=>setState({...state,notes:e.target.value})}></textarea></div>
          <div className="col-12"><button className="btn btn-primary" type="submit">Add Fuel Entry</button></div>
        </form>
      </div>

      <div className="card p-3">
        <h6>Fuel History</h6>
        {history.length===0 ? <p className="text-muted">No fuel entries yet</p> : (
          <ul className="list-group">
            {history.slice().reverse().map(h=> <li className="list-group-item" key={h.id}>{h.date} — {h.mileage} km — {h.quantity} L @ ₹{h.price}</li>)}
          </ul>
        )}
      </div>
    </div>
  )
}
