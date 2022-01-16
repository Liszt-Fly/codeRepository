<script setup >
import { useRouter } from 'vue-router'
const links = [
    { name: "home", title: "首页" },
    { name: "member", title: "修改手机号" },
    { name: "email", title: "绑定邮箱" },
]
const router = useRouter()
const push = link => {
    router.push({ name: link.name })
}
</script>

<template>
    <div class="layout-member">
        <nav>
            <div v-for="link in links" @click="push(link)">{{ link.title }}</div>
        </nav>
        <main>
            <router-view></router-view>
        </main>
    </div>
</template>

<style scoped lang="scss">
.layout-member {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    background-color: #f3f3f3;
    padding: 20px;
    nav {
        grid-column: span 3;
        display: flex;
        flex-direction: column;
        background-color: #16a085;
        padding: 10px;
        div {
            cursor: pointer;
            margin-bottom: 20px;
            color: #f3f3f3;
        }
        a {
            margin-bottom: 20px;
            color: #f3f3f3;
        }
    }
    main {
        grid-column: span 9;
        padding: 20px;
    }
}
</style>
