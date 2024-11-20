import { HomeIcon, Users, Trophy, DollarSign, MessageSquare } from 'lucide-react'

const menuItems = [
  { href: '/', label: 'Home', icon: HomeIcon },
  { href: '/usuarios', label: 'Usuários', icon: Users },
  { href: '/jackpot', label: 'Jackpot', icon: DollarSign },
  { href: '/quadra-do-dia', label: 'Quadra do dia', icon: Trophy },
  { href: '/cash-game', label: 'Cash game', icon: DollarSign },
  { href: '/campeao-do-dia', label: 'Campeão do dia', icon: Trophy },
  { href: '/feedbacks', label: 'Feedbacks', icon: MessageSquare },
]

export function Sidebar() {
  return (
    <aside className="hidden lg:flex h-screen w-64 flex-col fixed left-0 top-0 bottom-0 bg-zinc-900 border-r border-zinc-800">
      <div className="flex items-center gap-2 px-6 py-8">
        <span className="text-xl font-semibold text-accent">Poker Club</span>
      </div>
      
      <nav className="space-y-1 px-3">
        {menuItems.map((item) => {
          const Icon = item.icon
          return (
            <a
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 px-3 py-2 text-zinc-300 hover:text-accent hover:bg-accent/5 rounded-md transition-colors"
            >
              <Icon className="w-5 h-5" />
              <span>{item.label}</span>
            </a>
          )
        })}
      </nav>
    </aside>
  )
}