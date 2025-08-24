<template>
  <header class="bg-white shadow">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">
          <div class="flex-shrink-0 flex items-center">
            <h2 class="text-xl font-semibold text-gray-900">
              {{ pageTitle }}
            </h2>
          </div>
        </div>

        <div class="flex items-center">
          <div class="ml-3 relative">
            <div>
              <button
                @click="isOpen = !isOpen"
                class="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                id="user-menu-button"
                aria-expanded="false"
                aria-haspopup="true"
              >
                <span class="sr-only">사용자 메뉴 열기</span>
                <div class="h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center">
                  <span class="text-sm font-medium text-white">
                    {{ userInitials }}
                  </span>
                </div>
              </button>
            </div>

            <div
              v-if="isOpen"
              class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="user-menu-button"
              tabindex="-1"
            >
              <div class="px-4 py-2 text-sm text-gray-700 border-b">
                <div class="font-medium">{{ user?.name }}</div>
                <div class="text-gray-500">{{ user?.email }}</div>
              </div>
              <button
                @click="handleLogout"
                class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
                tabindex="-1"
              >
                로그아웃
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const route = useRoute()
const router = useRouter()
const authStore = useAuthStore()

const isOpen = ref(false)

const user = computed(() => authStore.user)

const userInitials = computed(() => {
  if (!user.value?.name) return 'U'
  return user.value.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
})

const pageTitle = computed(() => {
  const titles: Record<string, string> = {
    '/': '대시보드',
    '/users': '사용자 관리',
    '/announcements': '공지사항',
    '/blog': '블로그',
    '/settings': '설정',
  }
  return titles[route.path] || '대시보드'
})

async function handleLogout() {
  await authStore.logout()
  router.push('/login')
  isOpen.value = false
}

// Close dropdown when clicking outside
const closeDropdown = (event: Event) => {
  const target = event.target as HTMLElement
  if (!target.closest('#user-menu-button')) {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', closeDropdown)
})

onUnmounted(() => {
  document.removeEventListener('click', closeDropdown)
})
</script>
