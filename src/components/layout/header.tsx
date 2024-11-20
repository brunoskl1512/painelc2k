import { Avatar, AvatarFallback } from '../ui/avatar'
import { Button } from '../ui/button'
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '../ui/dropdown-menu'
import { LogOut, Menu } from 'lucide-react'

export function Header() {
  return (
    <header className="flex items-center justify-between border-b border-zinc-800/50 px-6 py-3 h-16 bg-zinc-950/50 backdrop-blur supports-[backdrop-filter]:bg-zinc-950/50">
      <Button variant="ghost" size="icon" className="lg:hidden text-zinc-400 hover:text-zinc-100">
        <Menu className="h-6 w-6" />
      </Button>

      <div className="flex items-center gap-4 ml-auto">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-10 w-10 rounded-full">
              <Avatar>
                <AvatarFallback className="bg-zinc-900 text-zinc-300">U</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end">
            <DropdownMenuLabel>
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium text-zinc-100">Usuário</p>
                <p className="text-xs text-zinc-500">usuario@email.com</p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-zinc-800" />
            <DropdownMenuItem className="text-zinc-400 hover:text-zinc-100 focus:text-zinc-100 cursor-pointer">
              <LogOut className="mr-2 h-4 w-4" />
              <span>Sair</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}