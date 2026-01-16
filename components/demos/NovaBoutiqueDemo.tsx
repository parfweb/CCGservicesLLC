import React, { useState, useEffect } from 'react';
import { X, ShoppingBag, Search, Menu, ArrowRight, Heart, ChevronLeft, ChevronRight, Plus, Minus, Instagram, Twitter, Facebook } from 'lucide-react';

interface Props {
    onClose: () => void;
}

interface Product {
    id: number;
    name: string;
    price: number;
    category: string;
    image: string;
    hoverImage: string;
    isNew?: boolean;
}

const products: Product[] = [
    {
        id: 1,
        name: "The Oversized Trench",
        price: 295,
        category: "Outerwear",
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=800",
        hoverImage: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800",
        isNew: true
    },
    {
        id: 2,
        name: "Silk Charmeuse Slip",
        price: 180,
        category: "Dresses",
        image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&q=80&w=800",
        hoverImage: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 3,
        name: "Classic Wool Coat",
        price: 350,
        category: "Tailoring",
        image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?auto=format&fit=crop&q=80&w=800",
        hoverImage: "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 4,
        name: "Essential Knit",
        price: 220,
        category: "Knitwear",
        image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80&w=800",
        hoverImage: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80&w=800",
        isNew: true
    }
];

const NovaBoutiqueDemo: React.FC<Props> = ({ onClose }) => {
    const [activeModal, setActiveModal] = useState<'cart' | 'menu' | 'product' | 'search' | null>(null);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [cart, setCart] = useState<Product[]>([]);
    const [notification, setNotification] = useState<string | null>(null);
    const [isScrolled, setIsScrolled] = useState(false);

    // Auto-hide notification
    useEffect(() => {
        if (notification) {
            const timer = setTimeout(() => setNotification(null), 3000);
            return () => clearTimeout(timer);
        }
    }, [notification]);

    // Scroll listener
    useEffect(() => {
        const handleScroll = () => {
            const container = document.getElementById('nova-demo-container');
            if (container && container.scrollTop > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        const container = document.getElementById('nova-demo-container');
        if (container) container.addEventListener('scroll', handleScroll);
        return () => {
            if (container) container.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const addToCart = (product: Product) => {
        setCart([...cart, product]);
        setNotification(`Added ${product.name} to bag`);
        setActiveModal('cart');
    };

    const removeFromCart = (index: number) => {
        const newCart = [...cart];
        newCart.splice(index, 1);
        setCart(newCart);
    };

    const cartTotal = cart.reduce((acc, item) => acc + item.price, 0);

    // Use 'any' type for event to handle both HTMLElement and SVGElement clicks
    const handleLink = (e: React.MouseEvent<any>, target: string, modalToClose = true) => {
        e.preventDefault();
        if (modalToClose) setActiveModal(null);

        // Check if it's a "toast" action (starts with 'toast:')
        if (target.startsWith('toast:')) {
            setNotification(target.replace('toast:', ''));
            return;
        }

        const element = document.getElementById(target);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div id="nova-demo-container" className="fixed inset-0 z-[100] bg-white overflow-y-auto animate-in slide-in-from-bottom duration-500 font-sans text-neutral-900 selection:bg-neutral-900 selection:text-white">

            {/* Demo Controls Overlay */}
            <div className="fixed bottom-6 right-6 z-[110] flex flex-col items-end gap-4">
                {notification && (
                    <div className="bg-neutral-900 text-white px-6 py-3 shadow-xl animate-in slide-in-from-right fade-in flex items-center gap-3">
                        <ShoppingBag className="w-4 h-4" />
                        <span className="text-sm font-medium tracking-wide">{notification}</span>
                    </div>
                )}
                <div className="bg-white/80 backdrop-blur-md text-neutral-900 px-6 py-3 rounded-full shadow-2xl flex items-center gap-4 border border-neutral-200">
                    <span className="text-xs font-bold uppercase tracking-widest border-r border-neutral-300 pr-4 text-neutral-500">CCG SiteSpark Case Study</span>
                    <button
                        onClick={onClose}
                        className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-neutral-900 hover:text-neutral-600 transition-colors"
                    >
                        Close Preview <X className="w-4 h-4" />
                    </button>
                </div>
            </div>

            {/* --- NOVA MOCKUP START --- */}
            <div className="min-h-screen font-sans">

                {/* Navbar */}
                <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white py-4 border-b border-neutral-100' : 'bg-transparent py-8'}`}>
                    <div className="max-w-[1800px] mx-auto px-6 md:px-12 flex items-center justify-between">

                        <div className="flex items-center gap-6">
                            <button onClick={() => setActiveModal('menu')} className="group flex items-center gap-2">
                                <Menu className={`w-5 h-5 transition-colors ${isScrolled ? 'text-neutral-900' : 'text-neutral-900'}`} />
                                <span className={`hidden md:block text-xs font-bold uppercase tracking-widest transition-colors ${isScrolled ? 'text-neutral-900' : 'text-neutral-900'}`}>Menu</span>
                            </button>
                            <button onClick={() => setActiveModal('search')} className="hidden md:block">
                                <Search className={`w-5 h-5 transition-colors ${isScrolled ? 'text-neutral-900' : 'text-neutral-900'}`} />
                            </button>
                        </div>

                        <div className="absolute left-1/2 -translate-x-1/2">
                            <h1 className={`font-serif text-3xl font-bold tracking-widest transition-colors cursor-pointer ${isScrolled ? 'text-neutral-900' : 'text-neutral-900'}`} onClick={(e) => handleLink(e, 'hero')}>NOVA</h1>
                        </div>

                        <div className="flex items-center gap-6">
                            <span className={`hidden md:block text-xs font-bold uppercase tracking-widest transition-colors ${isScrolled ? 'text-neutral-900' : 'text-neutral-900'}`}>US / USD</span>
                            <button className="relative" onClick={() => setActiveModal('cart')}>
                                <ShoppingBag className={`w-5 h-5 transition-colors ${isScrolled ? 'text-neutral-900' : 'text-neutral-900'}`} />
                                {cart.length > 0 && (
                                    <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-600 rounded-full text-[8px] text-white flex items-center justify-center font-bold">{cart.length}</span>
                                )}
                            </button>
                        </div>
                    </div>
                </nav>

                {/* Hero Section */}
                <section id="hero" className="relative h-screen min-h-[700px] flex items-center justify-center bg-[#F3F3F3]">
                    <div className="absolute inset-0 flex">
                        <div className="w-1/2 h-full bg-[#EBEBEB] hidden md:block"></div>
                        <div className="w-full md:w-1/2 h-full bg-[#F3F3F3]"></div>
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-[85%] h-[80%] relative overflow-hidden group">
                            <img
                                src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80&w=2000"
                                className="w-full h-full object-cover object-top animate-in fade-in zoom-in duration-[1.5s]"
                                alt="Hero"
                            />
                            {/* Darker overlay for better text contrast */}
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-700"></div>

                            {/* Text moved inside the container for proper layering */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-6">
                                <p className="text-xs md:text-sm font-bold uppercase tracking-[0.3em] mb-6 animate-in slide-in-from-bottom-4 duration-1000 delay-300 drop-shadow-md">Fall Winter 2024</p>
                                <h2 className="text-5xl md:text-8xl font-serif mb-10 animate-in slide-in-from-bottom-8 duration-1000 delay-500 drop-shadow-lg">MODERNIST</h2>
                                <button
                                    onClick={(e) => handleLink(e, 'collection')}
                                    className="border-b-2 border-white pb-1 text-xs md:text-sm font-bold uppercase tracking-widest hover:text-neutral-200 hover:border-neutral-200 transition-colors animate-in slide-in-from-bottom-8 duration-1000 delay-700 drop-shadow-md"
                                >
                                    Explore Collection
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Category Grid */}
                <section className="py-24 px-6 md:px-12 bg-white">
                    <div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="relative aspect-[4/5] md:aspect-auto md:h-[800px] group overflow-hidden cursor-pointer" onClick={(e) => handleLink(e, 'collection')}>
                            <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Women" />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
                            <div className="absolute bottom-12 left-12 text-white">
                                <h3 className="text-4xl font-serif mb-2">Womenswear</h3>
                                <span className="text-xs font-bold uppercase tracking-widest border-b border-white pb-1">Shop Now</span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="relative h-1/2 group overflow-hidden cursor-pointer" onClick={(e) => handleLink(e, 'collection')}>
                                <img src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Accessories" />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
                                <div className="absolute bottom-8 left-8 text-white">
                                    <h3 className="text-3xl font-serif mb-2">Accessories</h3>
                                    <span className="text-xs font-bold uppercase tracking-widest border-b border-white pb-1">Shop Now</span>
                                </div>
                            </div>
                            <div className="relative h-1/2 group overflow-hidden cursor-pointer" onClick={(e) => handleLink(e, 'collection')}>
                                <img src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="New Arrivals" />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
                                <div className="absolute bottom-8 left-8 text-white">
                                    <h3 className="text-3xl font-serif mb-2">New Arrivals</h3>
                                    <span className="text-xs font-bold uppercase tracking-widest border-b border-white pb-1">Shop Now</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Product Carousel / Collection */}
                <section id="collection" className="py-24 bg-[#FAFAFA]">
                    <div className="max-w-[1800px] mx-auto px-6 md:px-12">
                        <div className="flex justify-between items-end mb-12">
                            <div>
                                <span className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-2 block">Curated Selection</span>
                                <h2 className="text-4xl font-serif">Trending Now</h2>
                            </div>
                            <div className="flex gap-4">
                                <button className="w-10 h-10 border border-neutral-200 flex items-center justify-center hover:bg-neutral-900 hover:text-white transition-colors"><ChevronLeft className="w-4 h-4" /></button>
                                <button className="w-10 h-10 border border-neutral-200 flex items-center justify-center hover:bg-neutral-900 hover:text-white transition-colors"><ChevronRight className="w-4 h-4" /></button>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                            {products.map((product) => (
                                <div key={product.id} className="group cursor-pointer" onClick={() => { setSelectedProduct(product); setActiveModal('product'); }}>
                                    <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100 mb-4">
                                        <img src={product.image} alt={product.name} className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-100 group-hover:opacity-0" />
                                        <img src={product.hoverImage} alt={product.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 scale-105 group-hover:scale-100 opacity-0 group-hover:opacity-100" />

                                        {product.isNew && (
                                            <span className="absolute top-2 left-2 bg-white px-2 py-1 text-[10px] font-bold uppercase tracking-widest">New</span>
                                        )}

                                        <button className="absolute bottom-0 left-0 w-full bg-white text-neutral-900 py-3 text-xs font-bold uppercase tracking-widest translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-center gap-2 hover:bg-neutral-900 hover:text-white">
                                            Quick View
                                        </button>
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-bold text-neutral-900 mb-1">{product.name}</h3>
                                        <div className="flex justify-between items-center">
                                            <span className="text-xs text-neutral-500 uppercase tracking-wide">{product.category}</span>
                                            <span className="text-sm font-medium">${product.price}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Editorial Section */}
                <section id="editorial" className="py-32 px-6 md:px-12 bg-neutral-900 text-white overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-[500px] h-full bg-[url('https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=800')] bg-cover opacity-20 blur-sm"></div>

                    <div className="max-w-[1800px] mx-auto relative z-10 flex flex-col md:flex-row items-center gap-16">
                        <div className="w-full md:w-1/2">
                            <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4 block">Editorial</span>
                            <h2 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">Art of <br />Simplicity.</h2>
                            <p className="text-neutral-300 text-lg leading-relaxed max-w-md mb-10">
                                Our latest campaign explores the intersection of brutalist architecture and soft tailoring.
                                Discover pieces designed to stand the test of time, crafted from the world's finest sustainable materials.
                            </p>
                            <button onClick={(e) => handleLink(e, 'collection')} className="border border-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-neutral-900 transition-colors">Read The Story</button>
                        </div>
                        <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
                            <img src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=600" className="w-full aspect-[3/4] object-cover translate-y-8" alt="Editorial 1" />
                            <img src="https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?auto=format&fit=crop&q=80&w=600" className="w-full aspect-[3/4] object-cover -translate-y-8" alt="Editorial 2" />
                        </div>
                    </div>
                </section>

                {/* Newsletter */}
                <section className="py-24 bg-white border-t border-neutral-100">
                    <div className="max-w-2xl mx-auto px-6 text-center">
                        <h3 className="text-2xl font-serif mb-4">Join Our World</h3>
                        <p className="text-neutral-500 mb-8 text-sm">Sign up for early access to new drops and exclusive events.</p>
                        <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => { e.preventDefault(); setNotification("Subscribed successfully"); }}>
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="flex-1 bg-neutral-50 border-b border-neutral-200 px-4 py-3 outline-none focus:border-neutral-900 transition-colors text-sm"
                                required
                            />
                            <button type="submit" className="bg-neutral-900 text-white px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-neutral-700 transition-colors">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </section>

                {/* Footer */}
                <footer className="bg-white pt-16 pb-8 border-t border-neutral-100">
                    <div className="max-w-[1800px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                        <div>
                            <h4 className="font-serif text-2xl font-bold mb-6">NOVA</h4>
                            <div className="flex gap-4 text-neutral-400">
                                <Instagram className="w-5 h-5 hover:text-neutral-900 cursor-pointer transition-colors" onClick={(e) => handleLink(e, 'toast:Opening Instagram...', false)} />
                                <Twitter className="w-5 h-5 hover:text-neutral-900 cursor-pointer transition-colors" onClick={(e) => handleLink(e, 'toast:Opening Twitter...', false)} />
                                <Facebook className="w-5 h-5 hover:text-neutral-900 cursor-pointer transition-colors" onClick={(e) => handleLink(e, 'toast:Opening Facebook...', false)} />
                            </div>
                        </div>
                        <div>
                            <h5 className="text-xs font-bold uppercase tracking-widest mb-6">Shop</h5>
                            <ul className="space-y-3 text-sm text-neutral-500">
                                <li><a href="#" onClick={(e) => handleLink(e, 'collection')} className="hover:text-neutral-900 transition-colors">New Arrivals</a></li>
                                <li><a href="#" onClick={(e) => handleLink(e, 'collection')} className="hover:text-neutral-900 transition-colors">Womenswear</a></li>
                                <li><a href="#" onClick={(e) => handleLink(e, 'collection')} className="hover:text-neutral-900 transition-colors">Menswear</a></li>
                                <li><a href="#" onClick={(e) => handleLink(e, 'collection')} className="hover:text-neutral-900 transition-colors">Accessories</a></li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="text-xs font-bold uppercase tracking-widest mb-6">About</h5>
                            <ul className="space-y-3 text-sm text-neutral-500">
                                <li><a href="#" onClick={(e) => handleLink(e, 'editorial')} className="hover:text-neutral-900 transition-colors">Our Story</a></li>
                                <li><a href="#" onClick={(e) => handleLink(e, 'toast:Sustainability report...')} className="hover:text-neutral-900 transition-colors">Sustainability</a></li>
                                <li><a href="#" onClick={(e) => handleLink(e, 'toast:Opening careers page...')} className="hover:text-neutral-900 transition-colors">Careers</a></li>
                                <li><a href="#" onClick={(e) => handleLink(e, 'toast:Opening press kit...')} className="hover:text-neutral-900 transition-colors">Press</a></li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="text-xs font-bold uppercase tracking-widest mb-6">Client Services</h5>
                            <ul className="space-y-3 text-sm text-neutral-500">
                                <li><a href="#" onClick={(e) => handleLink(e, 'toast:Opening Contact Form...')} className="hover:text-neutral-900 transition-colors">Contact Us</a></li>
                                <li><a href="#" onClick={(e) => handleLink(e, 'toast:Viewing Shipping Policy...')} className="hover:text-neutral-900 transition-colors">Shipping & Returns</a></li>
                                <li><a href="#" onClick={(e) => handleLink(e, 'toast:Opening Size Guide...')} className="hover:text-neutral-900 transition-colors">Size Guide</a></li>
                                <li><a href="#" onClick={(e) => handleLink(e, 'toast:Opening FAQ...')} className="hover:text-neutral-900 transition-colors">FAQ</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="max-w-[1800px] mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center text-[10px] text-neutral-400 uppercase tracking-widest border-t border-neutral-100 pt-8">
                        <p>Â© 2024 Nova Boutique. All rights reserved.</p>
                        <div className="flex gap-6 mt-4 md:mt-0">
                            <a href="#" onClick={(e) => handleLink(e, 'toast:Opening Privacy Policy...', false)} className="hover:text-neutral-900">Privacy Policy</a>
                            <a href="#" onClick={(e) => handleLink(e, 'toast:Opening Terms of Use...', false)} className="hover:text-neutral-900">Terms of Use</a>
                        </div>
                    </div>
                </footer>

                {/* --- OVERLAYS --- */}

                {/* Cart Drawer */}
                {activeModal === 'cart' && (
                    <>
                        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[120]" onClick={() => setActiveModal(null)}></div>
                        <div className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-[130] animate-in slide-in-from-right duration-300 flex flex-col">
                            <div className="p-6 border-b border-neutral-100 flex justify-between items-center">
                                <h3 className="font-serif text-2xl">Shopping Bag ({cart.length})</h3>
                                <button onClick={() => setActiveModal(null)}><X className="w-6 h-6 text-neutral-500 hover:text-neutral-900" /></button>
                            </div>

                            <div className="flex-1 overflow-y-auto p-6 space-y-6">
                                {cart.length === 0 ? (
                                    <div className="h-full flex flex-col items-center justify-center text-center text-neutral-500">
                                        <ShoppingBag className="w-12 h-12 mb-4 opacity-20" />
                                        <p>Your bag is empty.</p>
                                        <button onClick={() => setActiveModal(null)} className="mt-6 border-b border-neutral-900 pb-1 text-neutral-900 text-xs font-bold uppercase tracking-widest">Continue Shopping</button>
                                    </div>
                                ) : (
                                    cart.map((item, idx) => (
                                        <div key={idx} className="flex gap-4">
                                            <img src={item.image} alt={item.name} className="w-20 h-28 object-cover bg-neutral-100" />
                                            <div className="flex-1 flex flex-col justify-between py-1">
                                                <div>
                                                    <div className="flex justify-between items-start">
                                                        <h4 className="font-medium text-sm text-neutral-900">{item.name}</h4>
                                                        <button onClick={() => removeFromCart(idx)}><X className="w-4 h-4 text-neutral-400 hover:text-neutral-900" /></button>
                                                    </div>
                                                    <p className="text-xs text-neutral-500 mt-1">{item.category}</p>
                                                    <p className="text-xs text-neutral-500 mt-1">Size: M</p>
                                                </div>
                                                <div className="text-sm font-medium">${item.price}</div>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>

                            <div className="p-6 border-t border-neutral-100 bg-neutral-50">
                                <div className="flex justify-between items-center mb-4 text-sm">
                                    <span className="text-neutral-500">Subtotal</span>
                                    <span className="font-bold">${cartTotal}</span>
                                </div>
                                <p className="text-[10px] text-neutral-400 mb-6 text-center">Shipping & taxes calculated at checkout.</p>
                                <button className="w-full bg-neutral-900 text-white py-4 text-xs font-bold uppercase tracking-widest hover:bg-neutral-800 transition-colors">
                                    Checkout
                                </button>
                            </div>
                        </div>
                    </>
                )}

                {/* Product Modal */}
                {activeModal === 'product' && selectedProduct && (
                    <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
                        <div className="absolute inset-0 bg-white/90 backdrop-blur-md" onClick={() => setActiveModal(null)}></div>
                        <div className="relative bg-white w-full max-w-5xl h-[80vh] shadow-2xl flex flex-col md:flex-row animate-in fade-in zoom-in duration-300">
                            <button onClick={() => setActiveModal(null)} className="absolute top-4 right-4 z-10 p-2 bg-white/50 rounded-full hover:bg-white"><X className="w-6 h-6" /></button>

                            <div className="w-full md:w-1/2 h-1/2 md:h-full bg-neutral-100 relative">
                                <img src={selectedProduct.image} className="w-full h-full object-cover" alt={selectedProduct.name} />
                            </div>

                            <div className="w-full md:w-1/2 h-1/2 md:h-full p-8 md:p-12 overflow-y-auto flex flex-col">
                                <div className="mb-auto">
                                    <span className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-2 block">{selectedProduct.category}</span>
                                    <h2 className="text-3xl md:text-4xl font-serif mb-4">{selectedProduct.name}</h2>
                                    <p className="text-xl font-medium mb-8">${selectedProduct.price}</p>

                                    <p className="text-neutral-600 text-sm leading-relaxed mb-8">
                                        Expertly crafted with attention to detail. This piece combines timeless elegance with modern versatility.
                                        Made from premium sustainable fabrics that feel as good as they look.
                                    </p>

                                    <div className="space-y-6">
                                        <div>
                                            <label className="text-xs font-bold uppercase tracking-widest text-neutral-900 mb-3 block">Size</label>
                                            <div className="flex gap-2">
                                                {['XS', 'S', 'M', 'L', 'XL'].map(size => (
                                                    <button key={size} className="w-10 h-10 border border-neutral-200 flex items-center justify-center text-xs hover:border-neutral-900 hover:bg-neutral-900 hover:text-white transition-all">
                                                        {size}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 space-y-3">
                                    <button onClick={() => { addToCart(selectedProduct); setActiveModal(null); }} className="w-full bg-neutral-900 text-white py-4 text-xs font-bold uppercase tracking-widest hover:bg-neutral-800 transition-colors">
                                        Add to Bag â€” ${selectedProduct.price}
                                    </button>
                                    <button className="w-full border border-neutral-200 py-4 text-xs font-bold uppercase tracking-widest hover:border-neutral-900 transition-colors flex items-center justify-center gap-2">
                                        <Heart className="w-4 h-4" /> Save to Wishlist
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Search Modal */}
                {activeModal === 'search' && (
                    <div className="fixed inset-0 bg-white z-[120] animate-in fade-in duration-200">
                        <div className="max-w-4xl mx-auto px-6 py-8">
                            <div className="flex justify-end mb-8">
                                <button onClick={() => setActiveModal(null)}><X className="w-8 h-8 text-neutral-900" /></button>
                            </div>
                            <div className="border-b-2 border-neutral-900 flex items-center py-4">
                                <Search className="w-8 h-8 text-neutral-400 mr-4" />
                                <input type="text" placeholder="Search products, collections, editorials..." className="w-full text-2xl md:text-4xl font-serif outline-none placeholder:text-neutral-300" autoFocus />
                            </div>
                            <div className="mt-12">
                                <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-6">Popular Searches</h4>
                                <div className="flex flex-wrap gap-4">
                                    {['Cashmere', 'Trench Coats', 'Silk', 'New Arrivals', 'Gifts'].map(term => (
                                        <button key={term} className="px-6 py-3 bg-neutral-50 hover:bg-neutral-900 hover:text-white transition-colors text-sm rounded-full">
                                            {term}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Menu Modal */}
                {activeModal === 'menu' && (
                    <div className="fixed inset-0 bg-neutral-900 text-white z-[120] animate-in slide-in-from-left duration-300 flex">
                        <div className="w-full md:w-1/2 p-12 flex flex-col">
                            <div className="flex justify-between items-center mb-12">
                                <span className="font-serif text-2xl">NOVA</span>
                                <button onClick={() => setActiveModal(null)}><X className="w-8 h-8" /></button>
                            </div>
                            <nav className="flex-1 flex flex-col gap-6">
                                <a href="#" onClick={(e) => handleLink(e, 'collection')} className="text-4xl md:text-6xl font-serif hover:text-neutral-400 transition-colors">New Arrivals</a>
                                <a href="#" onClick={(e) => handleLink(e, 'collection')} className="text-4xl md:text-6xl font-serif hover:text-neutral-400 transition-colors">Shop All</a>
                                <a href="#" onClick={(e) => handleLink(e, 'hero')} className="text-4xl md:text-6xl font-serif hover:text-neutral-400 transition-colors">Collections</a>
                                <a href="#" onClick={(e) => handleLink(e, 'editorial')} className="text-4xl md:text-6xl font-serif hover:text-neutral-400 transition-colors">Editorial</a>
                                <a href="#" onClick={(e) => handleLink(e, 'toast:Store Locator coming soon...')} className="text-4xl md:text-6xl font-serif hover:text-neutral-400 transition-colors">Stores</a>
                            </nav>
                            <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-neutral-500">
                                <a href="#" onClick={(e) => handleLink(e, 'toast:Opening Account...', false)} className="hover:text-white">Account</a>
                                <a href="#" onClick={(e) => handleLink(e, 'toast:Opening Help...', false)} className="hover:text-white">Help</a>
                                <a href="#" className="hover:text-white">Region: US</a>
                            </div>
                        </div>
                        <div className="hidden md:block w-1/2 bg-[url('https://images.unsplash.com/photo-1549529272-36c1e138c205?auto=format&fit=crop&q=80&w=1200')] bg-cover opacity-50"></div>
                    </div>
                )}

            </div>
            {/* --- NOVA MOCKUP END --- */}

        </div>
    );
};

export default NovaBoutiqueDemo;
