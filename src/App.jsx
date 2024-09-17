import './tailwind.css'
import bgImg from './assets/bg.png'
import Navbar from './modules/navbar'
import GridContent from './modules/grid-content'

function App() {

  return (
    <main className='flex flex-wrap justify-center w-screen min-h-screen bg-bg-color'>
      <Navbar/>
      <GridContent/>
      <img className='absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2' src={bgImg} alt="background image" />
    </main>
  )
}

export default App

