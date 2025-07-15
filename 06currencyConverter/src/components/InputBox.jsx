import React, {useId} from 'react';
// Input Box taking inputs from the users that why in {}
// the classname prop is used to allow additional tailwind or customcss
// classes to be passes from the parent component
function InputBox ({
    label,  // from ,to
    amount, 
    onamountChange, //
    oncurrencyChange, //
    currencyoptions= [],
    selectCurrency="usd",//correct default value
    amountDisable =false,
    currencyDisable=false,
    className="",
}) {

    const amountInputId=useId() //generates stable an dunique Ids helps in 
    // accessiblity and dynamic UI elements rather then creating random id during re-rendering time 
    // useid create unique id if currency changes
    return (

    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
        <div className='w-1/2'>
             <label htmlFor={amountInputId}
             className='text-black/40 mb-2 inline-block'>
                {/* so that it comes from variable */}
             {label}         
             </label>
             <input id={amountInputId}
             className='outline-none w-full bg-transparent'
             type="number" placeholder='Amount'
             disabled={amountDisable} //disables the input
             value={amount}
             onChange={(e) =>onamountChange && //Guard Clause only calls the function if its provided
                 onamountChange(Number(e.target.value)) //since React return in string format so will convert it into number
                } 
             />
        </div>
        <div className='w-1/2 flex flex-wrap justify-end text-right'>
            <p className='text-black/40 mb-2 w-full'>Currency type</p>
                <select className='rounded-lg px-1 py-1 bg-gray-200 cursor-pointer
                outline-none'
                value={selectCurrency}
                onChange={(e) => oncurrencyChange && 
                oncurrencyChange(e.target.value)}
                disabled={currencyDisable}>
                    {/* we have to llop throgh the currencies */}
                    {/* IMP:rember the key while looping in react currency is unique in our api database*/}
                    {/* key helps raect identify items uniquely during DOM diffing  */}
                    {currencyoptions.map((currency)=>(
                        <option key={currency}
                        value={currency}>{currency}</option>
                    ))}
                    
                </select>
        </div>
   </div>
    )
}

export default InputBox ;