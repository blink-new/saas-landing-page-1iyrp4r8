
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { Pricing } from './components/Pricing'

function App() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <Features />
      <Pricing />
    </main>
  )
}

export default App