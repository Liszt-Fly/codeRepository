<script setup></script>

<template>
	<router-link :to="{ name: 'home' }">首页</router-link>

	<router-link :to="{ name: 'article' }">列表页</router-link>
	<router-link :to="{ name: 'user' }">用户页面</router-link>
	<router-link :to="{ name: 'member' }">用户中心</router-link>
</template>

<style scoped lang="scss">
a {
	display: inline-block;
	background-color: #f3f3f3;
	padding: 5px 10px;
	text-decoration: none;
	color: black;
	font-weight: bold;
}
</style>
