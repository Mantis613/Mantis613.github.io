import AnimatedGridBackground from './components/AnimatedGridBackground'
import Header from './components/Header'
import HeroPanel from './components/HeroPanel'
import GlobalMarketsPanel from './components/GlobalMarketsPanel'
import PortfolioChart from './components/PortfolioChart'
import MarketOverview from './components/MarketOverview'
import SystemStatus from './components/SystemStatus'
import TransactionsTable from './components/TransactionsTable'
import SystemLog from './components/SystemLog'
import ProjectsPanel from './components/ProjectsPanel'
import SkillsPanel from './components/SkillsPanel'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <AnimatedGridBackground />
      <Header />
      <main className="mx-auto max-w-[1600px] px-4 py-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-12 lg:gap-5">
          <section id="home" className="lg:col-span-4"><HeroPanel /></section>
          <section id="markets" className="lg:col-span-8"><GlobalMarketsPanel /></section>
          <div className="lg:col-span-6"><PortfolioChart /></div>
          <div className="lg:col-span-3"><MarketOverview /></div>
          <div className="lg:col-span-3"><SystemStatus /></div>
          <div className="lg:col-span-6"><TransactionsTable /></div>
          <div className="lg:col-span-6"><SystemLog /></div>
          <section id="projects" className="lg:col-span-7"><ProjectsPanel /></section>
          <section id="stack" className="lg:col-span-5"><SkillsPanel /></section>
        </div>
        <Footer />
      </main>
    </>
  )
}
