<script setup lang="ts">


</script>

<template>
  <router-link to="/about">about</router-link>
  <router-link to="/">home</router-link>
  <hr />
  <router-view></router-view>
</template>

<style scoped>
a {
  display: inline-block;
  margin-right: 10px;
}
</style>
