import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useUIStore } from '../../stores/ui'
import { useAuthStore } from '../../stores/auth'
import { XMarkIcon } from '@heroicons/react/24/outline'

const ADMIN_EMAILS = ['admin@supplementstore.com', 'admin@example.com', 'admin@test.com']

const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
})

const registerSchema = z.object({
  firstName: z.string().min(2, 'First name is required'),
  lastName: z.string().min(2, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
})

type LoginFormData = z.infer<typeof loginSchema>
type RegisterFormData = z.infer<typeof registerSchema>

export function AuthModal() {
  const { isAuthModalOpen, setAuthModalOpen, addToast } = useUIStore()
  const { login } = useAuthStore()
  const [mode, setMode] = useState<'login' | 'register'>('login')

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(mode === 'login' ? loginSchema : registerSchema),
    defaultValues: mode === 'login'
      ? { email: '', password: '' }
      : { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' },
  })

  if (!isAuthModalOpen) return null

  const onSubmit = async (data: LoginFormData | RegisterFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    if (mode === 'login') {
      const email = (data as LoginFormData).email
      const isAdmin = ADMIN_EMAILS.includes(email.toLowerCase())
      const user = {
        id: crypto.randomUUID(),
        email: email,
        firstName: isAdmin ? 'Admin' : 'Alex',
        lastName: isAdmin ? 'User' : 'Strong',
        role: isAdmin ? 'admin' as const : 'user' as const,
        createdAt: new Date().toISOString(),
      }
      login(user, 'mock-token-' + crypto.randomUUID())
      if (isAdmin) {
        addToast('Welcome back! You are logged in as Admin.', 'success')
      } else {
        addToast('Welcome back! You are now logged in.', 'success')
      }
    } else {
      const regData = data as RegisterFormData
      const user = {
        id: crypto.randomUUID(),
        email: regData.email,
        firstName: regData.firstName,
        lastName: regData.lastName,
        role: 'user' as const,
        createdAt: new Date().toISOString(),
      }
      login(user, 'mock-token-' + crypto.randomUUID())
      addToast('Account created successfully! Welcome!', 'success')
    }
    setAuthModalOpen(false)
    reset()
  }

  const switchMode = () => {
    setMode(mode === 'login' ? 'register' : 'login')
    reset()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50" onClick={() => setAuthModalOpen(false)} />
      <div data-testid="auth-modal" className="relative bg-surface rounded-2xl shadow-xl w-full max-w-md p-6">
        <button
          onClick={() => setAuthModalOpen(false)}
          className="absolute top-4 right-4 text-secondary hover:text-default"
        >
          <XMarkIcon className="w-6 h-6" />
        </button>

        <h2 className="text-2xl font-bold text-default mb-6">
          {mode === 'login' ? 'Welcome Back' : 'Create Account'}
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {mode === 'register' && (
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-default mb-1">First Name</label>
                <input {...register('firstName')} className="input-field" placeholder="John" />
                {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName.message as string}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-default mb-1">Last Name</label>
                <input {...register('lastName')} className="input-field" placeholder="Doe" />
                {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName.message as string}</p>}
              </div>
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-default mb-1">Email</label>
            <input {...register('email')} type="email" className="input-field" placeholder="you@example.com" />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message as string}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-default mb-1">Password</label>
            <input {...register('password')} type="password" className="input-field" placeholder="••••••••" />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message as string}</p>}
          </div>

          {mode === 'register' && (
            <div>
              <label className="block text-sm font-medium text-default mb-1">Confirm Password</label>
              <input {...register('confirmPassword')} type="password" className="input-field" placeholder="••••••••" />
              {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword.message as string}</p>}
            </div>
          )}

          <button type="submit" disabled={isSubmitting} className="w-full py-3 btn-primary">
            {isSubmitting ? 'Please wait...' : mode === 'login' ? 'Sign In' : 'Create Account'}
          </button>
        </form>

        <p className="text-center text-sm text-secondary mt-4">
          {mode === 'login' ? "Don't have an account? " : 'Already have an account? '}
          <button onClick={switchMode} className="text-primary font-medium hover:underline">
            {mode === 'login' ? 'Sign Up' : 'Sign In'}
          </button>
        </p>

        {mode === 'login' && (
          <div className="mt-4 pt-4 border-t border-default">
            <p className="text-xs text-secondary text-center mb-2">Admin? Use these credentials:</p>
            <div className="bg-surface rounded-lg p-3 text-xs text-default border border-default">
              <p><strong>Email:</strong> admin@supplementstore.com</p>
              <p><strong>Password:</strong> any password (6+ chars)</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
