import { useState } from 'react'
import { products as initialProducts, categories } from '../../services/mockData'
import { Product } from '../../types'

export function ProductManagement() {
  const [productList, setProductList] = useState<Product[]>(initialProducts)
  const [search, setSearch] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingProduct, setEditingProduct] = useState<Product | null>(null)
  const [formData, setFormData] = useState<Partial<Product>>({})
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null)

  const filteredProducts = productList.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.brand.toLowerCase().includes(search.toLowerCase())
  )

  const openAddModal = () => {
    setEditingProduct(null)
    setFormData({
      name: '', slug: '', description: '', price: 0, brand: '', category: categories[0], stock: 0, rating: 0, reviewCount: 0, isActive: true,
      imageUrl: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=400',
    })
    setIsModalOpen(true)
  }

  const openEditModal = (product: Product) => {
    setEditingProduct(product)
    setFormData({ ...product })
    setIsModalOpen(true)
  }

  const handleSave = () => {
    if (editingProduct) {
      setProductList(productList.map((p) => (p.id === editingProduct.id ? { ...p, ...formData } as Product : p)))
    } else {
      setProductList([...productList, { ...formData, id: crypto.randomUUID(), createdAt: new Date().toISOString() } as Product])
    }
    setIsModalOpen(false)
  }

  const handleDelete = (id: string) => {
    setProductList(productList.filter((p) => p.id !== id))
    setDeleteConfirm(null)
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-default">Products</h1>
        <button onClick={openAddModal} className="px-4 py-2 btn-primary">Add Product</button>
      </div>
      <div className="card p-6">
        <input type="text" placeholder="Search products..." value={search} onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2 border border-default rounded-lg mb-4 bg-surface text-default" />
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead><tr className="border-b border-default">
              <th className="text-left py-3 text-sm font-medium text-secondary">Product</th>
              <th className="text-left py-3 text-sm font-medium text-secondary">Category</th>
              <th className="text-left py-3 text-sm font-medium text-secondary">Price</th>
              <th className="text-left py-3 text-sm font-medium text-secondary">Stock</th>
              <th className="text-right py-3 text-sm font-medium text-secondary">Actions</th>
            </tr></thead>
            <tbody>
              {filteredProducts.map((product) => (
                <tr key={product.id} className="border-b border-default">
                  <td className="py-3 text-sm text-default">{product.name}</td>
                  <td className="py-3 text-sm text-secondary">{product.category.name}</td>
                  <td className="py-3 text-sm font-medium text-default">${(product.salePrice ?? product.price).toFixed(2)}</td>
                  <td className="py-3 text-sm text-secondary">{product.stock}</td>
                  <td className="py-3 text-right">
                    <button onClick={() => openEditModal(product)} className="text-sm text-primary mr-3">Edit</button>
                    <button onClick={() => setDeleteConfirm(product.id)} className="text-sm text-red-500">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Delete Confirmation */}
      {deleteConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50" onClick={() => setDeleteConfirm(null)} />
          <div className="relative bg-surface rounded-2xl shadow-xl p-6 max-w-md">
            <h3 className="text-lg font-bold text-default mb-2">Confirm Delete</h3>
            <p className="text-secondary mb-6">Are you sure you want to delete this product? This action cannot be undone.</p>
            <div className="flex justify-end gap-3">
              <button onClick={() => setDeleteConfirm(null)} className="px-4 py-2 btn-secondary">Cancel</button>
              <button onClick={() => handleDelete(deleteConfirm)} className="px-4 py-2 btn-danger">Delete</button>
            </div>
          </div>
        </div>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsModalOpen(false)} />
          <div className="relative bg-surface rounded-2xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-auto p-6">
            <h2 className="text-xl font-bold mb-4 text-default">{editingProduct ? 'Edit Product' : 'Add Product'}</h2>
            <div className="grid grid-cols-2 gap-4">
              <div><label className="block text-sm text-secondary mb-1">Name</label><input value={formData.name || ''} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-3 py-2 border border-default rounded-lg bg-surface text-default" /></div>
              <div><label className="block text-sm text-secondary mb-1">Brand</label><input value={formData.brand || ''} onChange={(e) => setFormData({ ...formData, brand: e.target.value })} className="w-full px-3 py-2 border border-default rounded-lg bg-surface text-default" /></div>
              <div><label className="block text-sm text-secondary mb-1">Price</label><input type="number" value={formData.price || 0} onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) || 0 })} className="w-full px-3 py-2 border border-default rounded-lg bg-surface text-default" /></div>
              <div><label className="block text-sm text-secondary mb-1">Stock</label><input type="number" value={formData.stock || 0} onChange={(e) => setFormData({ ...formData, stock: parseInt(e.target.value) || 0 })} className="w-full px-3 py-2 border border-default rounded-lg bg-surface text-default" /></div>
              <div className="col-span-2"><label className="block text-sm text-secondary mb-1">Description</label><textarea value={formData.description || ''} onChange={(e) => setFormData({ ...formData, description: e.target.value })} rows={3} className="w-full px-3 py-2 border border-default rounded-lg bg-surface text-default" /></div>
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
