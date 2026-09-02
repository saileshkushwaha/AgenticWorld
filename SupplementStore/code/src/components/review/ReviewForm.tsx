import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useUIStore } from '../../stores/ui'
import { useAuthStore } from '../../stores/auth'
import { RatingInput } from '../ui/Rating'
import { api } from '../../services/api'

const reviewSchema = z.object({
  rating: z.number().min(1, 'Rating is required').max(5),
  title: z.string().min(5, 'Title must be at least 5 characters'),
  comment: z.string().min(20, 'Review must be at least 20 characters'),
})

type ReviewFormData = z.infer<typeof reviewSchema>

interface ReviewFormProps {
  productId: string
  onSuccess: () => void
}

export function ReviewForm({ productId, onSuccess }: ReviewFormProps) {
  const addToast = useUIStore((state) => state.addToast)
  const setAuthModalOpen = useUIStore((state) => state.setAuthModalOpen)
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated)
  const user = useAuthStore((state) => state.user)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm<ReviewFormData>({
    resolver: zodResolver(reviewSchema),
    defaultValues: { rating: 0, title: '', comment: '' },
  })

  const rating = watch('rating')

  if (!isAuthenticated) {
    return (
      <div className="bg-primary/10 rounded-xl p-6 text-center">
        <p className="text-default mb-3">Please log in to write a review</p>
        <button onClick={() => setAuthModalOpen(true)} className="px-6 py-2 btn-primary">
          Sign In
        </button>
      </div>
    )
  }

  const onSubmit = async (data: ReviewFormData) => {
    setIsSubmitting(true)
    await api.reviews.create({
      userId: user?.id || 'anonymous',
      user: user || { id: 'anonymous', email: '', firstName: 'Anonymous', lastName: 'User', role: 'user', createdAt: new Date().toISOString() },
      productId,
      rating: data.rating,
      title: data.title,
      comment: data.comment,
      isVerified: false,
    })
    addToast('Review submitted successfully! Thank you for your feedback.', 'success')
    setIsSubmitting(false)
    onSuccess()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="card p-6">
      <h3 className="text-lg font-bold text-default mb-4">Write a Review</h3>
      <p className="text-sm text-secondary mb-4">Reviewing as {user?.firstName} {user?.lastName}</p>

      <div className="mb-4">
        <label className="block text-sm font-medium text-default mb-2">Your Rating</label>
        <RatingInput value={rating} onChange={(val) => setValue('rating', val)} size="lg" />
        {errors.rating && <p className="text-red-500 text-xs mt-1">{errors.rating.message}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-default mb-1">Review Title</label>
        <input {...register('title')} placeholder="Summarize your experience..." className="input-field" />
        {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title.message}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-default mb-1">Your Review</label>
        <textarea {...register('comment')} rows={4} placeholder="Tell others about this product..." className="input-field" />
        {errors.comment && <p className="text-red-500 text-xs mt-1">{errors.comment.message}</p>}
      </div>

      <button type="submit" disabled={isSubmitting} className="px-6 py-2.5 btn-primary">
        {isSubmitting ? 'Submitting...' : 'Submit Review'}
      </button>
    </form>
  )
}
