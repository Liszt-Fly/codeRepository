<script setup lang="ts">
import { computed } from 'vue'
import router from '../router'
const view = computed(() => {
    const path = window.location.pathname
    const route = router.routes.find(route => route.path == path)
    return route.component
})
</script>

<template>
    <component :is="view"></component>
</template>

<style scoped>
</style>
