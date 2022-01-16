<script setup>
import api from "@/apis/Article"

import { ref } from "vue"
const articles = ref(await api.all())
defineProps({
	article: {
		type: Object,
	},
})
</script>

<template>
	<router-link
		:to="article.id + '.html'"
		class="list-item"
		v-for="article in articles"
		:article="article"
	>{{ article.title }}</router-link>
</template>

<style scoped>
.list-item {
	background-color: #16a085;
	color: #fff;

	margin-bottom: 10px;
	display: block;
}
</style>
