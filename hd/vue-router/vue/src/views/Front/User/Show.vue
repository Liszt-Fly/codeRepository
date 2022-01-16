<script setup>
import api from "@/apis/User"
import { useRoute } from "vue-router"
const route = useRoute()
console.log(route.params.id)
const user = await api.find(route.params.id)
</script>

<template>
	<div class="show">
		<h2>{{ user.name }}</h2>
	</div>
</template>

<style scoped lang="scss">
.show {
	div {
		color: #666;
		font-size: 1rem;
		line-height: 2rem;
	}
}
</style>
