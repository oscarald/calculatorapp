import React, { useState } from 'react'
import Numberscalculator from './Numberscalculator'
import Screencalculator from './Screencalculator'
import Topcalculator from './Topcalculator'


function Calculator() {
    const[number, setNumber]=useState("0")

    const handleNum = (value) => {
        if(number==="0"){
            let newNumber = value
            setNumber(newNumber)
        } else{
            let newNumber = number + value
            setNumber(newNumber)
        }
    }
    const handleDel = () => {
            let newNumber = number.slice(0, number.length-1)
            if(newNumber===""){
                setNumber("0") 
            }
            else{
                setNumber(newNumber)
            }
    }
    const handleReset = () => {
        setNumber("0") 

    }


    const handleResult = () => {
        try{
            let resultado = eval(number)
            if(resultado%1===0){
                setNumber(resultado)
            } else{
                resultado = resultado.toFixed(3)
                setNumber(resultado)
            }
        }
        catch{
            setNumber("Error")
        }
    }
    
    
  return (
    <div className='flex items-center justify-center h-screen w-screen bg-slate-300'>
        <div className='bg-slate-600 w-80 h-96 text-white rounded-lg'>
            <Topcalculator/>
            <Screencalculator number={number}/>
            <Numberscalculator handleNum={handleNum} handleDel={handleDel} handleReset={handleReset} handleResult={handleResult}/>
        </div>
    </div>
  )
}

export default Calculator