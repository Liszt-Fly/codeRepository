<script setup>


</script>

<template>
	<Suspense>
		<template #default>
			<!-- <div>
				<router-view name="navigation" #default="{ Component }">
					<component :is="Component ?? Navigation"></component>
				</router-view>

				<hr />

				<div class="router-view">
					<router-view #default="{ route, Component }">
						<component :is="Component"></component>
					</router-view>
				</div>
			</div>-->
			<router-view></router-view>
		</template>
	</Suspense>
</template>
<style scoped>
</style>
