import { useSelector, useDispatch } from "react-redux"
import { useState } from "react"
import { incrementAction, clearAllAction } from "../redux/actions"

export default function MainPAge() {

    const [input, setInput] = useState('')
    const dispatch = useDispatch()
    const {num,count} = useSelector(state => state.incrementReducer)

    const increment = () => {
        dispatch(incrementAction(input))
        setInput('')
    }

    const clearAll = () => {
        dispatch(clearAllAction())
    }

  return (
    <div>
        <input 
            value={input}
            type='number'
            placeholder="Write number"
            onChange={(event) => {setInput(event.target.value)}}
            />
        <button onClick={increment}>ADD</button>
        <button onClick={clearAll}>CLEAR</button>
        <h2>{num}</h2>
        <h1>{count}</h1>
    </div>
  )
}
