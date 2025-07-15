import { Component, useState } from 'react'
import { InputBox } from './components' //for UI
import useCurrencyInfo from './Hooks/useCurrencyInfo'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom]=useState("usd")
  const [to, setTo]=useState("inr")
  const [convertedAmount, setConvertedAmount]=useState(0) //Result shown in second InputBox 
  // how to use our customised hook useCurrencyInfo
  // usecurrencyInfo(from fetches exchange rates for from currency)
  const currencyInfo =useCurrencyInfo(from)

  // extraction of availabel currency code:inr,eur..
  const options=Object.keys(currencyInfo)

   const swap=()=>{
    setFrom(to);
    setTo(from);
    // since React batches state updates. So amount is still 100 when convertedAmount = amount.
    setAmount(convertedAmount);
    // const temp= amount;
    setConvertedAmount(amount);//this will save the previous value safely

   };

   const convert=()=>{
    setConvertedAmount(amount * currencyInfo[to]) //currencyInfo[to] brings the to exchange rate
   }

  return (
    <>
    <div className='min-h-screen w-full flex items-center justify-center bg-cover bg-center bg-no-repeat'
      style={{backgroundImage:`url('https://images.pexels.com/photos/69866/pexels-photo-69866.jpeg')`}}>
        {/* https://images.pexels.com/photos/69866/pexels-photo-69866.jpeg */}
             <div className='flex justify-center w-full px-4 md:px-0'>
                 <div className='w-full max-w-md mx-auto border border-gray-400 rounded-lg p-5 backdrop-blur-sm bg-white/25'>
                      <form onSubmit={(e)=>{
                        e.preventDefault();
                        convert()
                      }}>
                            <div className='w-full mb-1'>
                                 <InputBox
                                     label="From" 
                                     amount={amount}
                                     currencyoptions={options} //it displayes the whole currency option from dataset
                                     oncurrencyChange={(currency)=>
                                     setFrom(currency)} //if currency is changed then amount is agin asked to set
                                     selectCurrency={from} // from value is selected option in the dropdown
                                     onamountChange={(amount)=>setAmount(amount)} 
                                      />
                             </div>

                            <div className='relative max-w-md h-0.5'>
                                 <button type='button' 
                                 className='relative left-1/2 -translate-x-1/2 -translate-y-1/4 bottom-2 border-balck rounded-md bg-blue-600 text-white px-2 py-0.5'
                                 onClick={swap}>
                                      Swap
                                 </button>
                            </div>

                            <div className='w-full mt-1 mb-4'>
                                 <InputBox
                                   label="To" 
                                     amount={convertedAmount}
                                     currencyoptions={options}
                                     oncurrencyChange={(currency)=>
                                      setTo(currency)}
                                      selectCurrency={to} 
                                      amountDisable={true}/>
                            </div>
                            <button type='submit' 
                            className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'>
                              Convert {from.toUpperCase()} to {to.toUpperCase()}
                              {/* simce type is submit it triggers the forms onsubmit handler */}
                            </button> 
                      </form>
                 </div>
              </div>
     </div>
    </>
  )
}

export default App
