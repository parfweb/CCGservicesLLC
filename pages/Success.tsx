import React, { useEffect } from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Success: React.FC = () => {
    useEffect(() => {
        // Optional: Fire a conversion event to Google Analytics or similar
        if (typeof window !== 'undefined' && (window as any).gtag) {
            (window as any).gtag('event', 'purchase', {
                transaction_id: new Date().getTime(), // value generated for demo
                value: 1.00,
                currency: "USD"
            });
        }
    }, []);

    return (
        <div className="min-h-screen pt-32 pb-20 bg-brand-gray flex items-center justify-center px-6">
            <div className="bg-white p-8 md:p-12 rounded-3xl border border-zinc-200 shadow-xl max-w-lg text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
                    <CheckCircle className="w-10 h-10" />
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Payment Successful!</h1>
                <p className="text-zinc-500 text-lg mb-8">
                    Thank you for your purchase. We've sent a confirmation email to you. Our team will be in touch shortly to get started.
                </p>

                <div className="space-y-4">
                    <Link
                        to="/"
                        className="block w-full py-4 btn-primary font-bold rounded-xl shadow-lg flex items-center justify-center gap-2"
                    >
                        Return to Home <ArrowRight className="w-4 h-4" />
                    </Link>
                    <a
                        href="mailto:hello@ccgsitespark.com"
                        className="block text-zinc-500 text-sm hover:text-brand-black transition-colors"
                    >
                        Questions? Email us
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Success;
