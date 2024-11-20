import { LucideIcon } from 'lucide-react'

interface StatCardProps {
  title: string
  value: string | number
  icon: LucideIcon
  description?: string
}

export function StatCard({ title, value, icon: Icon, description }: StatCardProps) {
  return (
    <div className="p-6 bg-zinc-950 rounded-lg border border-zinc-800/50 hover:border-accent/20 transition-colors group">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-zinc-400">{title}</h3>
        <Icon className="w-5 h-5 text-zinc-500 group-hover:text-accent transition-colors" />
      </div>
      <div className="mt-2">
        <p className="text-2xl font-semibold text-accent">{value}</p>
        {description && (
          <p className="mt-1 text-sm text-zinc-500">{description}</p>
        )}
      </div>
    </div>
  )
}