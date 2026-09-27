import React from 'react'
import { use } from 'react';
import { useState, useCallback,useEffect,useRef} from 'react'
const PassWordGenerator = () => {
    const [length, setLength] = useState(8);
    const [numberAllowed, SetNumberAllowed] = useState(false);
    const [specialCharAllowed, SetSpecialCharAllowed] = useState(false);
    const [password, setPassword] = useState("");
    const [copied, setCopied] = useState(false);
    const passwordRef = useRef(null);
    const generator = useCallback(() => {
        let pass = "";
        let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if (numberAllowed) str += "0123456789";
        if (specialCharAllowed) str += "!@#$%^&*()_+";
        for (let i = 0; i < length; i++) {
            let index = Math.floor(Math.random() * str.length);
            pass += str[index];
        }
        setPassword(pass);
    }, [numberAllowed, specialCharAllowed, length])
    const copyToClipBoard = useCallback(async () => {
        await navigator.clipboard.writeText(passwordRef.current?.value ?? "");
        setCopied(true);
        setTimeout(() => setCopied(false), 500);
    }, []);
    useEffect(() => {
        generator();
    }, [generator])
    return (
        <>
            <div className='flex flex-col items-center justify-center bg-slate-950 h-1/2 rounded-lg m-4 text-cyan-300 border-2 border-cyan-400'>
                <h1 className='font-semibold text-4xl m-4'> PassWord Generator </h1>
            </div>
            <div className='flex flex-col items-center justify-center bg-slate-950 h-1/2 rounded-lg m-4 text-fuchsia-300 border-2 border-fuchsia-500'>
            <input type="text" value={password} readOnly ref={passwordRef} className='bg-slate-950 text-cyan-300 border-2 border-cyan-400 rounded-lg m-4 p-2 text-center font-bold text-6xl' />
            <button onClick={copyToClipBoard} className={`rounded-lg m-4 p-2 text-slate-950 transition-colors ${copied ? 'bg-lime-400 hover:bg-lime-300' : 'bg-fuchsia-500 hover:bg-fuchsia-400'}`}>{copied ? 'Copied!' : 'Copy to Clipboard'}</button>
            </div>
            <div className='flex flex-col items-center justify-center bg-slate-950 h-100 rounded-lg m-4 text-fuchsia-300 border-2 border-fuchsia-500'>
                <div className="flex flex-col items-baseline justify-center text-2xl text-cyan-300">
                    <div>
                        <label htmlFor="lengthRange" className='m-4'>Length: {length}</label>
                        <input type="range" min="8" max="20" value={length} onChange={(e) => setLength(e.target.value)} className='m-4 cursor-pointer' id="lengthRange" />
                    </div>

                    <div>
                        <input type="checkbox" checked={numberAllowed} onChange={(e) => SetNumberAllowed(e.target.checked)} className='m-4 cursor-pointer' id="numberAllowed" />
                        <label htmlFor="numberAllowed" className='m-4'>Allow Numbers</label>
                    </div>

                    <div>
                        <input type="checkbox" checked={specialCharAllowed} onChange={(e) => SetSpecialCharAllowed(e.target.checked)} className='m-4 cursor-pointer' id="specialCharAllowed" />
                        <label htmlFor="specialCharAllowed" className='m-4'>Allow Special Characters</label>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PassWordGenerator