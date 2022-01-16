<script setup>
import api from "@/apis/user"

import { ref } from "vue"
const users = ref(await api.all())
defineProps({
	user: {
		type: Object,
	},
})
</script>

<template>
	<router-link
		:to="`/usershow/${user.id}`"
		class="list-item"
		v-for="user in users"
		:user="user"
	>{{ user.name }}</router-link>
</template>

<style scoped>
.list-item {
	background-color: #e67e22;
	color: #fff;
	padding: 5px 10px;
	margin-bottom: 10px;
	display: block;
}
</style>
