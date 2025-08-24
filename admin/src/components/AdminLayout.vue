<template>
  <div class="flex h-screen bg-gray-50">
    <!-- Sidebar -->
    <AdminSidebar />
    
    <!-- Main content -->
    <div class="flex-1 flex flex-col overflow-hidden">
      <AdminHeader />
      <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-6">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import AdminSidebar from './AdminSidebar.vue'
import AdminHeader from './AdminHeader.vue'
</script>
