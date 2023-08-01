import Image from 'next/image'
import Header from './components/Header/Header'
import About from './components/About/About'
import MiniServices from './components/MiniServices/MiniServices'
import Info from './components/Info/Info'
import MiniReview from './components/MiniReview/MiniReview'
import Order from './components/Order/Order'

export default function Home() {
  return (
    <main>
      <Header />
      <About />
      <MiniServices />
      <Info />
      <MiniReview />
      <Order />
    </main>
  )
}
