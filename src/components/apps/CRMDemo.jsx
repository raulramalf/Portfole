import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Users, BarChart3, LayoutDashboard, Settings, Bell, Search, TrendingUp, MoreHorizontal, CheckCircle2, Clock } from "lucide-react";

const kpis = [
  { title: "Ingresos Totales", value: "$124,500", trend: "+14.5%", isPositive: true },
  { title: "Nuevos Leads", value: "842", trend: "+5.2%", isPositive: true },
  { title: "Tasa de Conversión", value: "18.4%", trend: "-1.1%", isPositive: false },
  { title: "Negocios Activos", value: "45", trend: "+12", isPositive: true },
];

const clients = [
  { id: 1, name: "TechNova Solutions", contact: "sarah@technova.com", status: "Cerrado", amount: "$45,000", date: "Hoy, 14:30" },
  { id: 2, name: "Global Logistics", contact: "m.rodriguez@globallog.com", status: "En Negociación", amount: "$120,000", date: "Ayer" },
  { id: 3, name: "Alpha Industries", contact: "ceo@alphaind.net", status: "Propuesta", amount: "$15,500", date: "12 Mar 2026" },
  { id: 4, name: "Nexus Systems", contact: "billing@nexus-sys.io", status: "Nuevo Lead", amount: "TBD", date: "10 Mar 2026" },
];

const funnelData = [
  { stage: "Leads Iniciales", count: 842, width: "100%", color: "bg-blue-500" },
  { stage: "Reunión Agendada", count: 415, width: "75%", color: "bg-indigo-500" },
  { stage: "Propuesta Enviada", count: 180, width: "50%", color: "bg-purple-500" },
  { stage: "Negocios Cerrados", count: 45, width: "25%", color: "bg-emerald-500" },
];

export default function CRMDemo() {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="min-h-screen bg-[#0A0D14] text-slate-300 font-body flex overflow-hidden">
      
      {/* Sidebar */}
      <aside className="w-64 bg-[#0F131D] border-r border-white/5 hidden md:flex flex-col">
        <div className="h-16 flex items-center px-6 border-b border-white/5">
          <Link to="/" className="text-garnet hover:text-garnet-light transition-colors flex items-center gap-2 text-sm font-medium">
            <ArrowLeft size={16} /> Volver al Portfolio
          </Link>
        </div>
        
        <div className="p-6">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-8 h-8 rounded bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl shadow-lg">V</div>
            <span className="font-display font-bold text-xl text-white tracking-tight">VeloxCRM</span>
          </div>

          <nav className="space-y-1">
            <button className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${activeTab === 'dashboard' ? 'bg-indigo-600/10 text-indigo-400' : 'hover:bg-white/5 text-slate-400 hover:text-slate-200'}`}>
              <LayoutDashboard size={18} /> Dashboard
            </button>
            <button className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${activeTab === 'clients' ? 'bg-indigo-600/10 text-indigo-400' : 'hover:bg-white/5 text-slate-400 hover:text-slate-200'}`}>
              <Users size={18} /> Clientes
            </button>
            <button className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${activeTab === 'analytics' ? 'bg-indigo-600/10 text-indigo-400' : 'hover:bg-white/5 text-slate-400 hover:text-slate-200'}`}>
              <BarChart3 size={18} /> Analíticas
            </button>
          </nav>
        </div>
        
        <div className="mt-auto p-6">
          <button className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-slate-400 hover:bg-white/5 hover:text-slate-200 transition-all">
            <Settings size={18} /> Configuración
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 h-screen overflow-y-auto">
        
        {/* Topbar */}
        <header className="h-16 bg-[#0F131D]/80 backdrop-blur-md border-b border-white/5 sticky top-0 z-10 px-4 md:px-8 flex items-center justify-between">
          <div className="flex md:hidden">
            <Link to="/" className="text-garnet hover:text-garnet-light transition-colors">
              <ArrowLeft size={20} />
            </Link>
          </div>
          
          <div className="max-w-md w-full relative hidden md:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
            <input 
              type="text" 
              placeholder="Buscar clientes, negocios, contactos..." 
              className="w-full bg-[#1A1F2E] border border-white/5 rounded-lg py-2 pl-10 pr-4 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all"
            />
          </div>

          <div className="flex items-center gap-4">
            <button className="relative p-2 text-slate-400 hover:text-white transition-colors">
              <Bell size={18} />
              <span className="absolute top-1.5 right-2 w-2 h-2 rounded-full bg-red-500 border-2 border-[#0F131D]"></span>
            </button>
            <div className="w-8 h-8 rounded-full bg-slate-700 border border-white/10 overflow-hidden">
              <img src="https://api.dicebear.com/7.x/notionists/svg?seed=Felix&backgroundColor=transparent" alt="User" className="w-full h-full object-cover" />
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-4 md:p-8">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-display font-bold text-white">Visión General</h1>
            <div className="flex items-center gap-2">
              <select className="bg-[#1A1F2E] border border-white/5 rounded-lg px-3 py-1.5 text-sm text-slate-300 focus:outline-none">
                <option>Últimos 30 días</option>
                <option>Este trimestre</option>
                <option>Este año</option>
              </select>
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-1.5 rounded-lg text-sm font-medium transition-colors shadow-lg shadow-indigo-600/20">
                Nuevo Reporte
              </button>
            </div>
          </div>

          {/* KPIs Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {kpis.map((kpi, i) => (
              <div key={i} className="bg-[#0F131D] border border-white/5 rounded-xl p-5 hover:border-white/10 transition-colors">
                <h3 className="text-sm font-medium text-slate-400 mb-1">{kpi.title}</h3>
                <div className="flex items-end justify-between">
                  <span className="text-2xl font-bold text-white font-display">{kpi.value}</span>
                  <div className={`flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-md ${kpi.isPositive ? 'text-emerald-400 bg-emerald-400/10' : 'text-rose-400 bg-rose-400/10'}`}>
                    <TrendingUp size={12} className={!kpi.isPositive ? 'rotate-180' : ''} />
                    {kpi.trend}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Sales Funnel */}
            <div className="lg:col-span-1 bg-[#0F131D] border border-white/5 rounded-xl p-6">
              <h2 className="text-lg font-bold text-white mb-6 font-display">Embudo de Ventas</h2>
              <div className="space-y-6">
                {funnelData.map((stage, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-slate-300 font-medium">{stage.stage}</span>
                      <span className="text-white font-bold">{stage.count}</span>
                    </div>
                    <div className="w-full bg-[#1A1F2E] rounded-full h-2 overflow-hidden">
                      <div className={`h-full ${stage.color} rounded-full`} style={{ width: stage.width }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Clients Table */}
            <div className="lg:col-span-2 bg-[#0F131D] border border-white/5 rounded-xl overflow-hidden flex flex-col">
              <div className="p-6 border-b border-white/5 flex items-center justify-between">
                <h2 className="text-lg font-bold text-white font-display">Actividad Reciente</h2>
                <button className="text-indigo-400 hover:text-indigo-300 text-sm font-medium transition-colors">Ver todos</button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/5 bg-[#1A1F2E]/30">
                      <th className="px-6 py-3 text-xs font-medium text-slate-400 uppercase tracking-wider">Cliente</th>
                      <th className="px-6 py-3 text-xs font-medium text-slate-400 uppercase tracking-wider">Estado</th>
                      <th className="px-6 py-3 text-xs font-medium text-slate-400 uppercase tracking-wider">Valor</th>
                      <th className="px-6 py-3 text-xs font-medium text-slate-400 uppercase tracking-wider">Fecha</th>
                      <th className="px-6 py-3 text-xs font-medium text-slate-400 uppercase tracking-wider text-right">Acciones</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {clients.map((client) => (
                      <tr key={client.id} className="hover:bg-white/[0.02] transition-colors group">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="font-medium text-white">{client.name}</div>
                          <div className="text-xs text-slate-500">{client.contact}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium border
                            ${client.status === 'Cerrado' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 
                              client.status === 'En Negociación' ? 'bg-amber-500/10 text-amber-400 border-amber-500/20' :
                              client.status === 'Propuesta' ? 'bg-purple-500/10 text-purple-400 border-purple-500/20' :
                              'bg-blue-500/10 text-blue-400 border-blue-500/20'
                            }
                          `}>
                            {client.status === 'Cerrado' ? <CheckCircle2 size={12} /> : <Clock size={12} />}
                            {client.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap font-mono text-sm text-slate-300">
                          {client.amount}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-400">
                          {client.date}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right">
                          <button className="p-1 text-slate-500 hover:text-white transition-colors opacity-0 group-hover:opacity-100">
                            <MoreHorizontal size={16} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </div>

      </main>
    </div>
  );
}
