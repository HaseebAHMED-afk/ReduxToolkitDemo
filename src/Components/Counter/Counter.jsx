import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement,incrementByValue, counterUpdate } from '../Store/counterSlice'

const Counter = () => {
    let [value, setValue] = useState(0)
    const dispatch = useDispatch()
    const {counter, isLoading} = useSelector((state) => {
        return{ 
           counter: state.counter.count,
           isLoading: state.counter.isLoading
        }
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

    const increaseByServer = () =>{
        dispatch(counterUpdate())
    }

    if(isLoading){
        return <div>Loading.....</div>
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
            <button onClick={increaseByServer} >Increment By Server</button>
        </div>
    )
}

export default Counter
