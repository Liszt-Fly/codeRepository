<script setup>
import api from "@/apis/Article"
import { useRoute } from "vue-router"
import ListItem from '@/views/Front/Article/List.vue'
import Card from "@/components/Card.vue"
import { watch, ref } from 'vue'
const route = useRoute()
console.log(route.params.id)
const article = ref()
article.value = await api.find(route.params.id)
watch(route, async () => {
	article.value = await api.find(route.params.id)
})

</script>

<template>
	<div class="article-show">
		<div class="show">
			<h2>{{ article.title }}</h2>
			<div>{{ article.content }}</div>
		</div>
		<div class="list-article">
			<card>
				<template #header>文章列表</template>
				<list-item></list-item>
			</card>
		</div>
	</div>
</template>

<style scoped lang="scss">
.article-show {
	padding: 20px;
	display: grid;
	grid-template-columns: repeat(6, 1fr);

	.show {
		grid-column: span 4;

		background-color: #f3f3f3;
		div {
			color: #666;
			font-size: 1rem;
			line-height: 2rem;
		}
	}
	.list-article {
		grid-column: span 2;
	}
}
</style>
