import { Header } from './components/layout/header'
import { Sidebar } from './components/layout/sidebar'
import { Dashboard } from './components/dashboard'

function App() {
  return (
    <div className="min-h-screen lg:ml-64 bg-zinc-950">
      <Sidebar />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 p-6">
          <Dashboard />
        </main>
      </div>
    </div>
  )
}

export default App