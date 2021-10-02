<template>
  <div>
    <nav-bar></nav-bar>
    <div class="about">
        <h1>About us</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae repudiandae architecto qui adipisci in officiis, aperiam sequi atque perferendis eos, autem maiores nisi saepe quisquam hic odio consectetur nobis veritatis quasi explicabo obcaecati doloremque? Placeat ratione hic aspernatur error blanditiis?</p>
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


