import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ShoppingBag, Star, Plus, Check } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Aura Pro Wireless Headphones",
    price: 299.99,
    category: "Audio",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
    rating: 4.8,
  },
  {
    id: 2,
    name: "Minimalist Smart Watch",
    price: 199.50,
    category: "Wearables",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
    rating: 4.6,
  },
  {
    id: 3,
    name: "ErgoMechanical Keyboard",
    price: 149.00,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=500&q=80",
    rating: 4.9,
  },
  {
    id: 4,
    name: "Lumina Desk Lamp",
    price: 89.99,
    category: "Home Office",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&q=80",
    rating: 4.5,
  }
];

export default function EcommerceDemo() {
  const [cart, setCart] = useState([]);
  const [addedId, setAddedId] = useState(null);

  const addToCart = (product) => {
    setCart([...cart, product]);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 2000);
  };

  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-900 font-body relative selection:bg-indigo-500 selection:text-white">
      
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="text-slate-500 hover:text-indigo-600 transition-colors bg-slate-100 p-2 rounded-full">
            <ArrowLeft size={16} />
          </Link>
          <span className="font-display font-black text-xl tracking-tight">NEXUS<span className="text-indigo-600">.</span></span>
        </div>
        
        <div className="flex items-center gap-6 text-sm font-medium">
          <button className="hidden md:block hover:text-indigo-600 transition-colors">Catálogo</button>
          <button className="hidden md:block hover:text-indigo-600 transition-colors">Colecciones</button>
          <button className="hidden md:block hover:text-indigo-600 transition-colors">Nosotros</button>
          
          <div className="relative cursor-pointer group">
            <div className="p-2 bg-slate-100 rounded-full group-hover:bg-indigo-100 group-hover:text-indigo-600 transition-colors">
              <ShoppingBag size={18} />
            </div>
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-indigo-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white animate-bounce">
                {cart.length}
              </span>
            )}
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        
        {/* Hero Section */}
        <div className="bg-indigo-950 rounded-3xl p-8 md:p-16 mb-16 flex flex-col-reverse md:flex-row items-center gap-10 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/30 blur-[100px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
          
          <div className="flex-1 relative z-10">
            <span className="inline-block py-1 px-3 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-bold uppercase tracking-wider mb-6">
              Nueva Colección
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
              Sonido inmersivo sin compromisos.
            </h1>
            <p className="text-indigo-200 mb-8 max-w-md">
              Descubre los nuevos auriculares Aura Pro con cancelación de ruido activa adaptativa y 40h de autonomía.
            </p>
            <button className="bg-white text-indigo-950 px-8 py-4 rounded-full font-bold hover:bg-indigo-50 hover:scale-105 transition-all shadow-[0_0_40px_rgba(255,255,255,0.3)]">
              Comprar Ahora — $299.99
            </button>
          </div>
          <div className="flex-1 relative z-10 flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80" 
              alt="Headphones" 
              className="w-full max-w-md rounded-2xl shadow-2xl rotate-[-5deg] hover:rotate-0 transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>

        {/* Product Grid */}
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-3xl font-display font-bold">Tendencias</h2>
          <button className="text-indigo-600 font-medium text-sm hover:underline">Ver todo</button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              {/* Product Image */}
              <div className="relative w-full aspect-square rounded-2xl bg-slate-100 mb-4 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Add to Cart Overlay */}
                <div className="absolute inset-0 bg-slate-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(product);
                    }}
                    className="bg-white text-slate-900 px-6 py-3 rounded-full font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-indigo-600 hover:text-white"
                  >
                    {addedId === product.id ? (
                      <><Check size={18} /> Añadido</>
                    ) : (
                      <><Plus size={18} /> Añadir</>
                    )}
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="flex flex-col">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">{product.category}</span>
                <h3 className="font-bold text-lg leading-tight mb-1 group-hover:text-indigo-600 transition-colors">{product.name}</h3>
                
                <div className="flex items-center justify-between mt-2">
                  <span className="font-display font-bold text-xl">${product.price.toFixed(2)}</span>
                  <div className="flex items-center gap-1 text-xs font-bold text-amber-500 bg-amber-50 px-2 py-1 rounded-md">
                    <Star size={12} fill="currentColor" /> {product.rating}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </main>
    </div>
  );
}
