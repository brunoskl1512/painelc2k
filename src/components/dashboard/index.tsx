import { Users, DollarSign, Trophy, TrendingUp } from 'lucide-react'
import { StatCard } from './stat-card'

export function Dashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-zinc-100">Dashboard</h1>
        <p className="text-zinc-400">Bem-vindo ao <span className="text-accent font-medium">Poker Club Manager</span></p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Jogadores Ativos"
          value="128"
          icon={Users}
          description="Últimos 30 dias"
        />
        <StatCard
          title="Jackpot Atual"
          value="R$ 15.750"
          icon={DollarSign}
        />
        <StatCard
          title="Torneios Realizados"
          value="47"
          icon={Trophy}
          description="Este mês"
        />
        <StatCard
          title="Rake Total"
          value="R$ 8.925"
          icon={TrendingUp}
          description="Este mês"
        />
      </div>
    </div>
  )
}