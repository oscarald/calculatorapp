
function Numberscalculator({handleNum,handleDel,handleReset,handleResult}) {

  return (
    <div className='grid grid-cols-4 gap-x-2 gap-y-2 m-2 col-auto-auto mt-8'>
        <button className='py-1 bg-slate-300 text-slate-800 text-2xl rounded-md font-bold hover:bg-slate-400' onClick={()=>handleNum("7")}>7</button>
        <button className='py-1 bg-slate-300 text-slate-800 text-2xl rounded-md font-bold hover:bg-slate-400' onClick={()=>handleNum("8")}>8</button>
        <button className='py-1 bg-slate-300 text-slate-800 text-2xl rounded-md font-bold hover:bg-slate-400' onClick={()=>handleNum("9")}>9</button>
        <button className='py-1 bg-slate-300 text-slate-800 text-2xl rounded-md font-bold hover:bg-slate-400' onClick={handleDel}>DEL</button>
        <button className='py-1 bg-slate-300 text-slate-800 text-2xl rounded-md font-bold hover:bg-slate-400' onClick={()=>handleNum("4")}>4</button>
        <button className='py-1 bg-slate-300 text-slate-800 text-2xl rounded-md font-bold hover:bg-slate-400' onClick={()=>handleNum("5")}>5</button>
        <button className='py-1 bg-slate-300 text-slate-800 text-2xl rounded-md font-bold hover:bg-slate-400' onClick={()=>handleNum("6")}>6</button>
        <button className='py-1 bg-slate-300 text-slate-800 text-2xl rounded-md font-bold hover:bg-slate-400' onClick={()=>handleNum("+")}>+</button>
        <button className='py-1 bg-slate-300 text-slate-800 text-2xl rounded-md font-bold hover:bg-slate-400' onClick={()=>handleNum("1")}>1</button>
        <button className='py-1 bg-slate-300 text-slate-800 text-2xl rounded-md font-bold hover:bg-slate-400' onClick={()=>handleNum("2")}>2</button>
        <button className='py-1 bg-slate-300 text-slate-800 text-2xl rounded-md font-bold hover:bg-slate-400' onClick={()=>handleNum("3")}>3</button>
        <button className='py-1 bg-slate-300 text-slate-800 text-2xl rounded-md font-bold hover:bg-slate-400' onClick={()=>handleNum("-")}>-</button>
        <button className='py-1 bg-slate-300 text-slate-800 text-2xl rounded-md font-bold hover:bg-slate-400' onClick={()=>handleNum(".")}>.</button>
        <button className='py-1 bg-slate-300 text-slate-800 text-2xl rounded-md font-bold hover:bg-slate-400' onClick={()=>handleNum("0")}>0</button>
        <button className='py-1 bg-slate-300 text-slate-800 text-2xl rounded-md font-bold hover:bg-slate-400' onClick={()=>handleNum("/")}>/</button>
        <button className='py-1 bg-slate-300 text-slate-800 text-2xl rounded-md font-bold hover:bg-slate-400' onClick={()=>handleNum("*")}>*</button>
        <button className='py-1 bg-slate-300 text-slate-800 text-2xl rounded-md col-span-2 font-bold hover:bg-slate-400' onClick={handleReset}>Reset</button>
        <button className='py-1 bg-slate-300 text-slate-800 text-2xl rounded-md col-span-2 font-bold hover:bg-slate-400' onClick={handleResult}>=</button>
    </div>
  )
}

export default Numberscalculator