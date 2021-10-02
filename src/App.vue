<template>
    <main>
      <router-view></router-view>
    </main>
</template>

<script>
import Cocktails from './views/Cocktails.vue';

export default {
  props: ['cocktails'],
  components: {
    Cocktails
  }
}
</script>

<style>
html {
  font-family: 'Poppins', sans-serif;;
}

body {
  background-color: #f1f5f8;
  margin: 0;
}

main {
  justify-content: center;
}
</style>  