import React from 'react'

export default function About() {
    return (
        <main className="w-full max-w-2xl">
            <h1 className="text-center text-3xl font-bold border-b py-4">About</h1>
            <section className="mt-6 border-b pt-4">
                <h2 className="text-2xl font-semibold">Projects</h2>
                <div className="mt-4">
                    <h3 className="font-semibold">AuthAPI</h3>
                    <p className="mt-1">Authentication backend with refresh tokens, email verification, password reset, and background email jobs.</p>
                    <p className="mt-1 text-sm text-gray-600">Node.js, Express.js, MongoDB, Redis, BullMQ</p>
                    <a className="mt-1 inline-block text-blue-700 underline" href="https://github.com/Ishu6129/AuthAPI" target="_blank" rel="noreferrer">View project</a>
                </div>
                <div className="mt-4 pt-3">
                    <h3 className="font-semibold">AutoQGen</h3>
                    <p className="mt-1">Generates multiple-choice questions from documents using spaCy and the Groq API, with PDF export.</p>
                    <p className="mt-1 text-sm text-gray-600">Python, Flask, spaCy, Groq API</p>
                    <a className="mt-1 inline-block text-blue-700 underline" href="https://github.com/Ishu6129/MCQ_Generator_NLP" target="_blank" rel="noreferrer">View project</a>
                </div>
                <div className="mt-4  pt-3">
                    <h3 className="font-semibold">LedgerFlow</h3>
                    <p className="mt-1">Financial transaction API using MongoDB transactions and UUID idempotency.</p>
                    <p className="mt-1 text-sm text-gray-600">Node.js, Express.js, MongoDB</p>
                    <a className="mt-1 inline-block text-blue-700 underline" href="https://github.com/Ishu6129/LedgerFlow" target="_blank" rel="noreferrer">View project</a>
                </div>
            </section>
            <section className="mt-6">
                <h2 className="text-2xl font-semibold">Technical skills</h2>
                <dl className="mt-3 grid gap-2 sm:grid-cols-[140px_1fr]">
                    <dt className="font-medium">Languages</dt><dd>Python, Java, JavaScript, SQL</dd>
                    <dt className="font-medium">AI &amp; NLP</dt><dd>LangChain, LangGraph, RAG, spaCy, embeddings, Chroma, FAISS</dd>
                    <dt className="font-medium">Backend</dt><dd>Node.js, Express.js, REST APIs, React</dd>
                    <dt className="font-medium">Databases</dt><dd>MySQL, MongoDB, Redis</dd>
                    <dt className="font-medium">Core CS</dt><dd>DBMS, OOP, data structures, algorithms, ACID</dd>
                </dl>
            </section>
            <section className="mt-6 border-t pt-4">
                <h2 className="text-2xl font-semibold">Education</h2>
                <p className="mt-2 font-medium">GLA University, Mathura</p>
                <p>B.Tech. Computer Science and Engineering (AI &amp; ML), expected May 2027</p>
                <p>CGPA: 8.49/10</p>
                <p className="mt-3 font-medium">Vidya Devi Jindal School, Mathura</p>
                <p>Class XII: 86.6% (2023)</p>
                <p>Class X: 95.0% (2023)</p>
            </section>
        </main>
    );
}