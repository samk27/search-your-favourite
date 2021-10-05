<template>
  <div>
    <nav-bar></nav-bar>
    <div class="about">
        <h1>About us</h1>
        <p>This cocktail guide is intended to give you and overview of cocktails, cocktail mixing and bartending. While there are many books and internet sites on cocktails, it can be daunting to navigate your way through them to get the information you are looking for. Cocktail Mixing Master makes this easy by summarising the most important things you need to know, right here.</p>
    </div>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue';
export default {
    components: {
        NavBar
    }
}
</script>

<style scoped>
.about {
    padding: 80px;
    margin: 0 auto;
    max-width: 640px;
    justify-content: center;
}
h1 {
    text-align: center;
    margin-bottom: 50px;
}
p {
    line-height: 32px;
    letter-spacing: 2px;
}
</style>


