import React from 'react'

function InputBox({
    type, 
    selectedCurrency="usd",
    isDisabled=false,
    amount=0,
    onAmountChange,
    onCurrencyChange,
    options=[],
    name=""

}) {    
  return (
    <div className='flex w-full min-w-0 flex-col gap-3'>
        <label className='text-sm font-medium text-slate-700'>
            {type}
        </label>
        <div className='flex min-w-0 flex-col gap-2'>
            <div className='flex min-w-0 gap-3'>
                <input 
                    type="number" 
                    disabled={isDisabled} 
                    value={amount} 
                    onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}
                    className='h-12 min-w-0 flex-1 rounded border border-slate-300 bg-white px-4 text-lg focus:border-blue-500 focus:outline-none disabled:bg-slate-100 disabled:text-slate-600'
                />
                <select
                    value={selectedCurrency}
                    onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}
                    className='h-12 w-28 shrink-0 rounded border border-slate-300 bg-white px-3 text-sm'
                >
                    {options.map((cur)=>{
                        return (
                            <option key={cur} value={cur}>{cur}</option>
                        )
                    })}
                </select>
            </div>
            {name && (
                <span className='text-center text-sm text-slate-500'>{name}</span>
            )}
        </div>
    </div>
  )
}
export default InputBox