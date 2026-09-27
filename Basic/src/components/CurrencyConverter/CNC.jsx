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
    <main className="flex min-h-screen w-full items-center justify-center bg-slate-50 p-4 sm:p-8">
        <div className="mx-auto grid w-full max-w-screen-2xl grid-cols-1 gap-6 lg:grid-cols-3">
            <section className="flex flex-col justify-center gap-8 rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-8 lg:col-span-2 items-center">
                <h1 className="text-5xl font-semibold text-slate-800">CURRENCY CONVERTER</h1>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <InputBox
                        type="FROM"
                        amount={amount}
                        selectedCurrency={fromCurrency}
                        onAmountChange={(amount) => setAmount(amount)}
                        onCurrencyChange={(currency) => setFromCurrency(currency)}
                        options={data}
                        name={fromCurrencyName}
                    />
                    <InputBox
                        type="TO"
                        amount={convertAmount}
                        isDisabled={true}
                        selectedCurrency={toCurrency}
                        onAmountChange={(amount) => setConvertedAmount(amount)}
                        onCurrencyChange={(currency) => setToCurrency(currency)}
                        options={data}
                        name={toCurrencyName}
                    />
                </div>
                <button
                    onClick={convert}
                    className="self-center rounded-md bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
                >
                    Convert
                </button>
            </section>

            {hasConverted && (
                <aside className="flex h-[90vh] min-h-80 flex-col rounded-lg border border-sky-200 bg-sky-50 p-5">
                    <h2 className="mb-4 font-semibold text-sky-800">ALL RATES FOR {fromCurrency.toUpperCase()}.{amount}</h2>
                    <ol className="grid grid-cols-1 gap-x-4 gap-y-1 overflow-y-auto pr-2 text-sm text-slate-700 sm:grid-cols-2">
                        {Object.entries(currencyInfo).map(([currency, rate]) => (
                            <li key={currency} className="border-b border-sky-100 py-1">
                                {currency.toUpperCase()}: {rate * amount}
                            </li>
                        ))}
                    </ol>
                </aside>
            )}
        </div>
    </main>
  )
}

export default CNC