'use client'
import Navbar from '../components/nav'
import Footer from '../components/footer'

const Layout = ({ children }) => {
  return (
    <main className='bg-[#1a1e1c] flex flex-col fondo3D '>
      <section className='lg:pt-10 lg:pb-16'>
        <Navbar />
        {children}
        <Footer />
      </section>
    </main>
  )
}

export default Layout
