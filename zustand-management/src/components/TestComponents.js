import {React, useState , useEffect} from 'react'
import { useCartStore } from '../storeManagment/cartStore';


function loggingUtility(){
  const logCount = useCartStore.getState().itemsCount
  console.log(logCount)
}
function resetCartCount(){
  useCartStore.setState({itemsCount:0})
}

export default function TestComponents() {
    const itemsCount = useCartStore((state)=>state.itemsCount);
    const incrementFunction = useCartStore((state)=>state.increment)
    const decrementFunction = useCartStore((state)=>state.decrement)
    const [updateValue,setUpdateValue] = useState(0)
    useEffect(()=>{
      loggingUtility()
    },[updateValue])
  return (
    <div>
      This is a testing component and count is {itemsCount}
      <div>
        <button onClick={()=>incrementFunction({"updateValue" : updateValue})}>Increment Value</button>
        <input type="Number" onChange={(e)=>setUpdateValue(e.target.value)} placeholder="Update the value"  ></input>
        <button onClick={decrementFunction}>Decrement Value </button>
      </div>
      <div onClick={resetCartCount}>Reset Button</div>

    </div>
  )
}
