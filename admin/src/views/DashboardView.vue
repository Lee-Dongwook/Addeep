<template>
  <AdminLayout>
    <div class="space-y-6">
      <!-- Page header -->
      <div class="flex items-center justify-between">
        <div>
          <h1 class="text-3xl font-bold text-gray-900">대시보드</h1>
          <p class="mt-1 text-sm text-gray-500">
            {{ currentDate }}
          </p>
        </div>
      </div>

      <!-- Stats -->
      <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="stat in stats"
          :key="stat.name"
          class="bg-white overflow-hidden shadow rounded-lg"
        >
          <div class="p-5">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <component :is="stat.icon" class="h-6 w-6 text-gray-400" aria-hidden="true" />
              </div>
              <div class="ml-5 w-0 flex-1">
                <dl>
                  <dt class="text-sm font-medium text-gray-500 truncate">
                    {{ stat.name }}
                  </dt>
                  <dd class="text-lg font-medium text-gray-900">
                    {{ stat.value }}
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Recent activities and Quick actions -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div class="lg:col-span-2">
          <div class="bg-white shadow rounded-lg">
            <div class="px-4 py-5 sm:p-6">
              <h3 class="text-lg leading-6 font-medium text-gray-900 mb-4">최근 활동</h3>
              <div class="space-y-4">
                <div
                  v-for="activity in recentActivities"
                  :key="activity.id"
                  class="flex items-start space-x-3"
                >
                  <div class="flex-shrink-0">
                    <div
                      class="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center"
                    >
                      <component
                        :is="activity.icon"
                        class="h-4 w-4 text-indigo-600"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="text-sm font-medium text-gray-900">
                      {{ activity.title }}
                    </p>
                    <p class="text-sm text-gray-500">
                      {{ activity.description }}
                    </p>
                    <p class="text-xs text-gray-400 mt-1">
                      {{ activity.time }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div class="bg-white shadow rounded-lg">
            <div class="px-4 py-5 sm:p-6">
              <h3 class="text-lg leading-6 font-medium text-gray-900 mb-4">빠른 작업</h3>
              <div class="space-y-3">
                <button
                  v-for="action in quickActions"
                  :key="action.name"
                  @click="action.handler"
                  class="w-full flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <component
                    :is="action.icon"
                    class="h-4 w-4 mr-2 text-gray-400"
                    aria-hidden="true"
                  />
                  {{ action.name }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </AdminLayout>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import AdminLayout from '@/components/AdminLayout.vue'
import {
  UsersIcon,
  DocumentTextIcon,
  ChatBubbleLeftRightIcon,
  EyeIcon,
  PlusIcon,
  DocumentPlusIcon,
  ChatBubbleLeftIcon,
} from '@heroicons/vue/24/outline'

const router = useRouter()

const currentDate = computed(() => {
  return new Date().toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
})

const stats = ref([
  { name: '총 사용자', value: '1,234', icon: UsersIcon },
  { name: '공지사항', value: '56', icon: DocumentTextIcon },
  { name: '블로그 포스트', value: '89', icon: ChatBubbleLeftRightIcon },
  { name: '오늘 방문자', value: '234', icon: EyeIcon },
])

const recentActivities = ref([
  {
    id: 1,
    title: '새 사용자 가입',
    description: '김철수님이 가입했습니다.',
    time: '5분 전',
    icon: UsersIcon,
  },
  {
    id: 2,
    title: '공지사항 작성',
    description: '새로운 공지사항이 작성되었습니다.',
    time: '10분 전',
    icon: DocumentTextIcon,
  },
  {
    id: 3,
    title: '블로그 포스트 업데이트',
    description: '기존 블로그 포스트가 수정되었습니다.',
    time: '30분 전',
    icon: ChatBubbleLeftRightIcon,
  },
])

const quickActions = ref([
  {
    name: '사용자 추가',
    icon: PlusIcon,
    handler: () => router.push('/users'),
  },
  {
    name: '공지사항 작성',
    icon: DocumentPlusIcon,
    handler: () => router.push('/announcements'),
  },
  {
    name: '블로그 작성',
    icon: ChatBubbleLeftIcon,
    handler: () => router.push('/blog'),
  },
])
</script>
