<script setup lang="ts">
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';
import AppNav from './components/AppNav.vue';

</script>

<template>
   <AppHeader/>
   <AppNav/>
   <main class="container">
      <RouterView />
   </main>
   <AppFooter/>
</template>

<style scoped>

</style>
