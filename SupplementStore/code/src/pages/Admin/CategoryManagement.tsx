import { useState } from 'react'
import { categories as initialCategories } from '../../services/mockData'
import { Category } from '../../types'

export function CategoryManagement() {
  const [categoryList, setCategoryList] = useState<Category[]>(initialCategories)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingCategory, setEditingCategory] = useState<Category | null>(null)
  const [formData, setFormData] = useState<Partial<Category>>({})

  const openAddModal = () => {
    setEditingCategory(null)
    setFormData({ name: '', slug: '', description: '' })
    setIsModalOpen(true)
  }

  const openEditModal = (category: Category) => {
    setEditingCategory(category)
    setFormData({ ...category })
    setIsModalOpen(true)
  }

  const handleSave = () => {
    if (editingCategory) {
      setCategoryList(categoryList.map((c) => (c.id === editingCategory.id ? { ...c, ...formData } as Category : c)))
    } else {
      setCategoryList([...categoryList, { ...formData, id: crypto.randomUUID() } as Category])
    }
    setIsModalOpen(false)
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-default">Categories</h1>
        <button onClick={openAddModal} className="px-4 py-2 btn-primary">Add Category</button>
      </div>
      <div className="card p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categoryList.map((category) => (
            <div key={category.id} className="p-4 border border-default rounded-lg">
              <h3 className="font-medium text-default">{category.name}</h3>
              <p className="text-sm text-secondary mt-1">{category.description}</p>
              <div className="flex gap-2 mt-3">
                <button onClick={() => openEditModal(category)} className="text-sm text-primary">Edit</button>
                <button onClick={() => setCategoryList(categoryList.filter((c) => c.id !== category.id))} className="text-sm text-red-500">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsModalOpen(false)} />
          <div className="relative bg-surface rounded-2xl shadow-xl w-full max-w-md p-6">
            <h2 className="text-xl font-bold mb-4 text-default">{editingCategory ? 'Edit Category' : 'Add Category'}</h2>
            <div className="space-y-4">
              <div><label className="block text-sm text-secondary mb-1">Name</label><input value={formData.name || ''} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-3 py-2 border border-default rounded-lg bg-surface text-default" /></div>
              <div><label className="block text-sm text-secondary mb-1">Slug</label><input value={formData.slug || ''} onChange={(e) => setFormData({ ...formData, slug: e.target.value })} className="w-full px-3 py-2 border border-default rounded-lg bg-surface text-default" /></div>
              <div><label className="block text-sm text-secondary mb-1">Description</label><textarea value={formData.description || ''} onChange={(e) => setFormData({ ...formData, description: e.target.value })} rows={3} className="w-full px-3 py-2 border border-default rounded-lg bg-surface text-default" /></div>
            </div>
            <div className="flex justify-end gap-3 mt-6">
              <button onClick={() => setIsModalOpen(false)} className="px-4 py-2 btn-secondary">Cancel</button>
              <button onClick={handleSave} className="px-4 py-2 btn-primary">Save</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
