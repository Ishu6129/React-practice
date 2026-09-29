import React, { useState, useCallback, useEffect, useRef } from 'react'
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
        <main className="w-full max-w-xl">
            <h1 className="text-center text-2xl font-bold">Password generator</h1>
            <div className="mt-4 flex gap-2">
                <input
                    aria-label="Generated password"
                    type="text"
                    value={password}
                    readOnly
                    ref={passwordRef}
                    className="min-w-0 flex-1 rounded border px-3 py-2 font-mono"
                />
                <button onClick={copyToClipBoard} className="rounded bg-blue-700 px-3 py-2 text-white">
                    {copied ? 'Copied' : 'Copy'}
                </button>
            </div>
            <div className="mt-5 grid gap-4">
                <label className="flex items-center gap-3">
                    <span className="w-28">Length: {length}</span>
                    <input
                        type="range"
                        min="8"
                        max="20"
                        value={length}
                        onChange={(event) => setLength(Number(event.target.value))}
                        className="flex-1"
                    />
                </label>
                <label className="flex items-center gap-2">
                    <input type="checkbox" checked={numberAllowed} onChange={(event) => SetNumberAllowed(event.target.checked)} />
                    Allow numbers
                </label>
                <label className="flex items-center gap-2">
                    <input type="checkbox" checked={specialCharAllowed} onChange={(event) => SetSpecialCharAllowed(event.target.checked)} />
                    Allow special characters
                </label>
            </div>
        </main>
    )
}

export default PassWordGenerator