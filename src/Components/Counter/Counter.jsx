import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement,incrementByValue } from '../Store/counterSlice'

const Counter = () => {
    let [value, setValue] = useState(0)
    const dispatch = useDispatch()
    const counter = useSelector((state) => {
        return state.counter.count
    })

    console.log(counter);

    const addChange = (e) =>{
        setValue(e.target.value)
    }

    const increase = () =>{
        dispatch(increment())
    }

    const decrease = () =>{
        dispatch(decrement())
    }


    const increaseByValue = () => {
        dispatch(incrementByValue(Number(value)))
    }


    return (
        <div>
            <h1>
                Counter {counter}
            </h1>
            <input type='text' onChange={addChange} value={value} />
            <button onClick={increase} >Increase</button>
            <button onClick={decrease} >Decrease</button>
            <button onClick={increaseByValue} >Increase By Value</button>
        </div>
    )
}

export default Counter
