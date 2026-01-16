import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const MobileCallBar: React.FC = () => {
    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-brand-black border-t border-zinc-800 shadow-2xl safe-bottom">
            <div className="flex">
                {/* Call Button */}
                <a
                    href="tel:9177688896"
                    className="flex-1 flex items-center justify-center gap-2 py-4 text-white font-bold hover:bg-zinc-800 transition-colors"
                >
                    <Phone className="w-5 h-5" />
                    <span>Call Now</span>
                </a>

                {/* Divider */}
                <div className="w-px bg-zinc-700"></div>

                {/* Message/Quote Button */}
                <a
                    href="#contact"
                    onClick={(e) => {
                        e.preventDefault();
                        const element = document.querySelector('#contact');
                        if (element) {
                            const headerOffset = 100;
                            const elementPosition = element.getBoundingClientRect().top;
                            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                            window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                        }
                    }}
                    className="flex-1 flex items-center justify-center gap-2 py-4 bg-brand-lime text-black font-bold hover:bg-brand-limeDark transition-colors"
                >
                    <MessageCircle className="w-5 h-5" />
                    <span>Free Quote</span>
                </a>
            </div>
        </div>
    );
};

export default MobileCallBar;
