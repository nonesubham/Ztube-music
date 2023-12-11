<template>
    <div id="sidebar_nav">
        <div id="logo_dv"><img src="@/assets/logo.png" id="logo"></div>
        
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>

    </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped>
#sidebar_nav{
    width: 25%;
}
#logo{
    width:50%
}
</style>