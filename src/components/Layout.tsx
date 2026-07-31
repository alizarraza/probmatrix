import type { ReactNode } from 'react'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import ChatWidget from './ChatWidget'
import Modal from './Modal'
import Toast from './Toast'
import DemoRequestForm from './forms/DemoRequestForm'
import { DemoModalProvider, useDemoModal } from '../context/DemoModalContext'

function GlobalDemoModal() {
  const { isOpen, close } = useDemoModal()
  const [toastOpen, setToastOpen] = useState(false)

  return (
    <>
      <Modal open={isOpen} onClose={close} title="Request a Demo">
        <DemoRequestForm
          onSuccess={() => {
            close()
            setToastOpen(true)
          }}
        />
      </Modal>
      <Toast message="Demo request submitted!" show={toastOpen} onDone={() => setToastOpen(false)} />
    </>
  )
}

export default function Layout({ children }: { children: ReactNode }) {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      // Wait a tick for the target page to render before measuring/scrolling.
      const id = location.hash.slice(1)
      requestAnimationFrame(() => {
        const el = document.getElementById(id)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
          return
        }
        window.scrollTo(0, 0)
      })
    } else {
      window.scrollTo(0, 0)
    }
  }, [location.pathname, location.hash])

  return (
    <DemoModalProvider>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
        {/* <ChatWidget /> */}
        <GlobalDemoModal />
      </div>
    </DemoModalProvider>
  )
}