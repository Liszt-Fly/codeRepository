<script setup></script>

<template>
	<router-link :to="{ name: 'home' }">首页</router-link>

	<router-link :to="{ name: 'user' }">用户列表</router-link>
</template>

<style scoped lang="scss">
a {
	display: inline-block;

	background-color: #f1c40f;
	padding: 5px 10px;
	text-decoration: none;
	color: black;
	font-weight: bold;
}
</style>
