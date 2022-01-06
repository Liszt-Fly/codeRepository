<script setup lang="ts">
const prop = defineProps({
    to: { type: String, required: true }
})
const push = () => {
    alert("abcdefg")
}
</script>

<template>
    <a href="#" @click.prevent="push">
        <slot />
    </a>
</template>

<style scoped>
</style>
