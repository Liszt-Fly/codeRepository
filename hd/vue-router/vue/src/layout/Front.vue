<script setup >
import Navigation from '@/components/Navigation.vue'
</script>

<template>
    <navigation></navigation>
    <div class="front-layout">
        <router-view></router-view>
    </div>
</template>

<style scoped>
.front-layout {
    padding: 20px;
    background-color: #f3f3f3;
}
</style>
