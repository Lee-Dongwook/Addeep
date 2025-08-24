import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import axios from 'axios'

interface User {
  id: string
  email: string
  name: string
  role: string
  avatar?: string
}

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null)
  const token = ref<string | null>(localStorage.getItem('admin_token'))
  const isLoading = ref(false)

  const isAuthenticated = computed(() => !!token.value && !!user.value)

  // Set axios default headers
  if (token.value) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token.value}`
  }

  async function login(email: string, password: string) {
    try {
      isLoading.value = true
      const response = await axios.post('/api/admin/login', {
        email,
        password,
      })

      const { user: userData, token: authToken } = response.data

      user.value = userData
      token.value = authToken

      localStorage.setItem('admin_token', authToken)
      axios.defaults.headers.common['Authorization'] = `Bearer ${authToken}`

      return { success: true }
    } catch (error: any) {
      return {
        success: false,
        error: error.response?.data?.message || '로그인에 실패했습니다.',
      }
    } finally {
      isLoading.value = false
    }
  }

  async function logout() {
    try {
      await axios.post('/api/admin/logout')
    } catch (error) {
      console.error('Logout error:', error)
    } finally {
      user.value = null
      token.value = null
      localStorage.removeItem('admin_token')
      delete axios.defaults.headers.common['Authorization']
    }
  }

  async function checkAuth() {
    if (!token.value) return false

    try {
      const response = await axios.get('/api/admin/me')
      user.value = response.data
      return true
    } catch (error) {
      logout()
      return false
    }
  }

  return {
    user,
    token,
    isLoading,
    isAuthenticated,
    login,
    logout,
    checkAuth,
  }
})
