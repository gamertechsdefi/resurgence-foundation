"use client";
import Header from '@/components/Header';
import { useState } from 'react';

export default function Donation() {
    const walletAddress = "0xd37BcEE932eBC29aee1431f88369889200CBdE22";
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(walletAddress);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 2000);
    };

    return (
        <div className="bg-white text-neutral-900 min-h-screen">
            <Header />
            <main className="container mx-auto px-4 py-10">
                <h1 className="text-4xl font-bold text-center mb-8">Donate to Resurgence Foundation</h1>
                <div className="flex flex-col items-center">
                    <div className="bg-neutral-800 p-6 rounded-lg shadow-lg w-full max-w-2xl">
                        <h2 className="text-2xl font-semibold text-white mb-4">Our Wallet Address</h2>
                        <div className="flex items-center justify-between bg-neutral-200 p-4 rounded-md">
                            <span className="text-lg break-all">{walletAddress}</span>
                            <button
                                onClick={handleCopy}
                                className={`ml-4 px-4 py-2 rounded-md font-semibold ${
                                    copied
                                        ? "bg-red-600 text-white"
                                        : "bg-neutral-600 hover:bg-neutral-700 text-white"
                                }`}
                            >
                                {copied ? "Copied!" : "Copy"}
                            </button>
                        </div>
                        <p className="mt-4 text-neutral-200">
                            Your donation will help us to continue our mission. We appreciate your support.
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
}
