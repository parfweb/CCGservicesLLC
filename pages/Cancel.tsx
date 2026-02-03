import React from 'react';
import { XCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Cancel: React.FC = () => {
    return (
        <div className="min-h-screen pt-32 pb-20 bg-brand-gray flex items-center justify-center px-6">
            <div className="bg-white p-8 md:p-12 rounded-3xl border border-zinc-200 shadow-xl max-w-lg text-center">
                <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6 text-red-500">
                    <XCircle className="w-10 h-10" />
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Payment Cancelled</h1>
                <p className="text-zinc-500 text-lg mb-8">
                    No worries! You haven't been charged. If you had an issue or changed your mind, we're still here to help.
                </p>

                <div className="space-y-4">
                    <Link
                        to="/#pricing"
                        className="block w-full py-4 bg-zinc-100 text-brand-black font-bold rounded-xl hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2"
                    >
                        View Pricing Again
                    </Link>
                    <Link
                        to="/"
                        className="block text-zinc-500 text-sm hover:text-brand-black transition-colors"
                    >
                        Return Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Cancel;
