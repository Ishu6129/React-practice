import InputBox from "./InputBox"
import useCurrency from './hooks/useCurrency'
import { useEffect, useState } from "react"

function CNC() {
    const [amount,setAmount]=useState(0);
    const [fromCurrency,setFromCurrency]=useState("usd");
    const [toCurrency,setToCurrency]=useState("inr");
    const [convertAmount,setConvertedAmount]=useState(0);
    const [hasConverted, setHasConverted] = useState(false);
    const currencyInfo = useCurrency(fromCurrency);
    const data=Object.keys(currencyInfo);
    const [fromCurrencyName, setFromCurrencyName] = useState("");
    const [toCurrencyName, setToCurrencyName] = useState("");

    useEffect(() => {
        fetch("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json")
            .then((response) => response.json())
            .then((data) => {
                setFromCurrencyName(data[fromCurrency]?.toUpperCase() ?? fromCurrency.toUpperCase());
                setToCurrencyName(data[toCurrency]?.toUpperCase() ?? toCurrency.toUpperCase());
            });
    }, [fromCurrency, toCurrency]);

    const convert=()=>{
        setConvertedAmount((currencyInfo[toCurrency] ?? 0) * amount);
        setHasConverted(true);
    }

  return (
    <main className="w-full max-w-2xl self-center">
        <h1 className="text-center text-2xl font-bold">COIN SHIFT</h1>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <InputBox
                type="From"
                amount={amount}
                selectedCurrency={fromCurrency}
                onAmountChange={setAmount}
                onCurrencyChange={setFromCurrency}
                options={data}
                name={fromCurrencyName}
            />
            <InputBox
                type="To"
                amount={convertAmount}
                isDisabled
                selectedCurrency={toCurrency}
                onAmountChange={setConvertedAmount}
                onCurrencyChange={setToCurrency}
                options={data}
                name={toCurrencyName}
            />
        </div>
        <div className="mt-4 flex flex-col items-center">
            <button
                onClick={convert}
                className="mt-4 rounded bg-blue-700 px-4 py-2 text-white"
            >
                Convert
            </button>
            {hasConverted && (
                <p className="mt-4" aria-live="polite">
                    {amount} {fromCurrency.toUpperCase()} = {convertAmount} {toCurrency.toUpperCase()}
                </p>
                
            )}
        </div>
    </main>
  )
}

export default CNC