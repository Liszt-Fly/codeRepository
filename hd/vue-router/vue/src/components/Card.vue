

<template>
    <div class="card">
        <header>
            <slot name="header"></slot>
        </header>
        <main>
            <slot />
        </main>
    </div>
</template>

<style scoped lang="scss">
.card {
    header {
        background-color: #34495e;
        padding: 10px;
        color: #fff;
    }
}
</style>
