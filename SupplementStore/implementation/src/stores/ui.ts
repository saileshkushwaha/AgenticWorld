import { create } from 'zustand'

interface Toast {
  id: string
  message: string
  type: 'success' | 'error' | 'info' | 'warning'
}

interface UIState {
  isMobileMenuOpen: boolean
  isSearchOpen: boolean
  isAuthModalOpen: boolean
  toasts: Toast[]
  setMobileMenuOpen: (open: boolean) => void
  setSearchOpen: (open: boolean) => void
  setAuthModalOpen: (open: boolean) => void
  addToast: (message: string, type?: Toast['type']) => void
  removeToast: (id: string) => void
}

export const useUIStore = create<UIState>((set) => ({
  isMobileMenuOpen: false,
  isSearchOpen: false,
  isAuthModalOpen: false,
  toasts: [],
  setMobileMenuOpen: (open) => set({ isMobileMenuOpen: open }),
  setSearchOpen: (open) => set({ isSearchOpen: open }),
  setAuthModalOpen: (open) => set({ isAuthModalOpen: open }),
  addToast: (message, type = 'info') => {
    const id = crypto.randomUUID()
    set((state) => ({
      toasts: [...state.toasts, { id, message, type }],
    }))
    setTimeout(() => {
      set((state) => ({
        toasts: state.toasts.filter((t) => t.id !== id),
      }))
    }, 3000)
  },
  removeToast: (id) => set((state) => ({
    toasts: state.toasts.filter((t) => t.id !== id),
  })),
}))
