import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'

interface DemoModalContextValue {
  isOpen: boolean
  open: () => void
  close: () => void
}

const DemoModalContext = createContext<DemoModalContextValue | null>(null)

export function DemoModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <DemoModalContext.Provider
      value={{
        isOpen,
        open: () => setIsOpen(true),
        close: () => setIsOpen(false),
      }}
    >
      {children}
    </DemoModalContext.Provider>
  )
}

export function useDemoModal(): DemoModalContextValue {
  const ctx = useContext(DemoModalContext)
  if (!ctx) {
    throw new Error('useDemoModal must be used within a DemoModalProvider')
  }
  return ctx
}
