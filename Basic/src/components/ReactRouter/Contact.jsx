import React from 'react'

export default function Contact() {
    return (
        <main className="w-full max-w-sm">
            <h1 className="text-center text-2xl font-bold">Contact</h1>
            <ul className="mt-6 space-y-3 text-center">
                <li><a className="text-blue-700 underline" href="mailto:ishuagrawal124356@gmail.com">ishuagrawal124356@gmail.com</a></li>
                <li><a className="text-blue-700 underline" href="tel:+918126025120">+91 8126025120</a></li>
                <li><a className="text-blue-700 underline" href="https://linkedin.com/in/ishuag/" target="_blank" rel="noreferrer">LinkedIn</a></li>
                <li><a className="text-blue-700 underline" href="https://github.com/Ishu6129" target="_blank" rel="noreferrer">GitHub profile</a></li>
                <li><a className="text-blue-700 underline" href="https://leetcode.com/u/ishuagrawal124356/" target="_blank" rel="noreferrer">LeetCode</a></li>
            </ul>
        </main>
    );
}