import { useState } from 'react';
import './App.css'
import BgChange from './components/ChangeBg/BgChange';
import PassWordGenerator from './components/PassGenerator/PassWordGenerator';
import GetCurrency from './components/CurrencyConverter/hooks/useCurrency';
import CNC from './components/CurrencyConverter/CNC';

function App() {
  return (
    <>
    <div className="flex flex-col justify-center items-center gap-4">
      {/* <BgChange/>
      <PassWordGenerator/> */}
      <CNC/>
    </div>
    </>
  )
}

export default App
