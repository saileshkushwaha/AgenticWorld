import { useState } from 'react'

interface AdminUser {
  id: string
  name: string
  email: string
  role: 'admin' | 'customer'
  status: 'active' | 'inactive'
  joinedAt: string
}

export function UserManagement() {
  const [users, setUsers] = useState<AdminUser[]>([
    { id: '1', name: 'Alex Strong', email: 'alex@example.com', role: 'customer', status: 'active', joinedAt: '2026-01-01' },
    { id: '2', name: 'John Doe', email: 'john@example.com', role: 'customer', status: 'active', joinedAt: '2026-02-15' },
    { id: '3', name: 'Admin User', email: 'admin@supplementstore.com', role: 'admin', status: 'active', joinedAt: '2026-01-01' },
  ])
  const [filterRole, setFilterRole] = useState<string>('all')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingUser, setEditingUser] = useState<AdminUser | null>(null)
  const [formData, setFormData] = useState<Partial<AdminUser>>({})

  const filteredUsers = filterRole === 'all' ? users : users.filter((u) => u.role === filterRole)

  const openEditModal = (user: AdminUser) => {
    setEditingUser(user)
    setFormData({ ...user })
    setIsModalOpen(true)
  }

  const handleSave = () => {
    if (editingUser) {
      setUsers(users.map((u) => (u.id === editingUser.id ? { ...u, ...formData } as AdminUser : u)))
    }
    setIsModalOpen(false)
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-default">Users</h1>
        <select value={filterRole} onChange={(e) => setFilterRole(e.target.value)} className="px-4 py-2 border border-default rounded-lg bg-surface text-default">
          <option value="all">All Roles</option>
          <option value="admin">Admin</option>
          <option value="customer">Customer</option>
        </select>
      </div>
      <div className="card p-6">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead><tr className="border-b border-default">
              <th className="text-left py-3 text-sm font-medium text-secondary">User</th>
              <th className="text-left py-3 text-sm font-medium text-secondary">Email</th>
              <th className="text-left py-3 text-sm font-medium text-secondary">Role</th>
              <th className="text-left py-3 text-sm font-medium text-secondary">Status</th>
              <th className="text-right py-3 text-sm font-medium text-secondary">Actions</th>
            </tr></thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.id} className="border-b border-default">
                  <td className="py-3 text-sm font-medium text-default">{user.name}</td>
                  <td className="py-3 text-sm text-secondary">{user.email}</td>
                  <td className="py-3"><span className={`px-2 py-1 rounded-full text-xs font-medium ${user.role === 'admin' ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'}`}>{user.role}</span></td>
                  <td className="py-3"><span className={`px-2 py-1 rounded-full text-xs font-medium ${user.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>{user.status}</span></td>
                  <td className="py-3 text-right">
                    <button onClick={() => openEditModal(user)} className="text-sm text-primary mr-3">Edit</button>
                    <button onClick={() => setUsers(users.filter((u) => u.id !== user.id))} className="text-sm text-red-500">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsModalOpen(false)} />
          <div className="relative bg-surface rounded-2xl shadow-xl w-full max-w-md p-6">
            <h2 className="text-xl font-bold mb-4 text-default">Edit User</h2>
            <div className="space-y-4">
              <div><label className="block text-sm text-secondary mb-1">Name</label><input value={formData.name || ''} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-3 py-2 border border-default rounded-lg bg-surface text-default" /></div>
              <div><label className="block text-sm text-secondary mb-1">Email</label><input value={formData.email || ''} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-3 py-2 border border-default rounded-lg bg-surface text-default" /></div>
              <div><label className="block text-sm text-secondary mb-1">Role</label><select value={formData.role || 'customer'} onChange={(e) => setFormData({ ...formData, role: e.target.value as 'admin' | 'customer' })} className="w-full px-3 py-2 border border-default rounded-lg bg-surface text-default"><option value="customer">Customer</option><option value="admin">Admin</option></select></div>
              <div><label className="block text-sm text-secondary mb-1">Status</label><select value={formData.status || 'active'} onChange={(e) => setFormData({ ...formData, status: e.target.value as 'active' | 'inactive' })} className="w-full px-3 py-2 border border-default rounded-lg bg-surface text-default"><option value="active">Active</option><option value="inactive">Inactive</option></select></div>
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
