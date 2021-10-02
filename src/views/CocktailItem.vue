<template>
  <nav-bar></nav-bar>
    <section class="cocktail-section" v-if="cocktail">
      <button class="redirect" href="" @click="$router.push({name: 'cocktails'})">back home</button>
      <h1 class="title">{{ cocktail.cocktailName }}</h1>
      <div class="drink">
          <img :src="cocktail.img" width="416" height="416">
          <div class="drink-info">
              <p><span class="drink-data">name :</span> {{ cocktail.cocktailName }}</p>
              <p><span class="drink-data">category :</span> {{ cocktail.category }}</p>
              <p><span class="drink-data">glass :</span> {{ cocktail.glass }}</p>
              <p><span class="drink-data">instructons :</span> {{ cocktail.instructions }}</p>
              <p><span class="drink-data">ingredients :</span><span> {{ cocktail.ingredient1 }}</span><span> {{ cocktail.ingredient2 }}</span><span> {{ cocktail.ingredient3 }}</span><span> {{ cocktail.ingredient4 }}</span></p>
          </div>
      </div>
    </section>
</template>

<script>
import COCKTAIL_DATA from '../dummy-data';
import NavBar from '../components/NavBar.vue';

export default {
    components: {
        NavBar
    },
    data() {
      return {
         cocktailData: COCKTAIL_DATA,
         cocktail: null,
      }
  },
  created() {
      this.cocktail = COCKTAIL_DATA.find((item) => {
          return item.id === this.$route.params.id
      })
  }
}
</script>

<style>
.cocktail-section {
    padding: 80px;
    margin: 0;
    text-align: center;
}
.drink {
    display: grid;
    grid-template-columns: 2fr 3fr;
    grid-gap: 3rem;
    gap: 3rem;
    align-items: center;
    text-align: left;
}
.drink img {
    border-radius: .25rem;
}
img {
    display: block;
    width: 100%;
}
.drink p {
    font-weight: 700;
    text-transform: capitalize;
    line-height: 1.8;
}
h1 {
  margin-bottom: 50px;
}
.redirect {
    text-transform: uppercase;
    letter-spacing: .3rem;
    color: #ffffff;
    background-color: #476a2e;
    border: 2px solid #476a2e;
    padding: .45rem .8rem;
    transition: all .3s linear;
    cursor: pointer;
    font-size: .8rem;
    border-radius: .25rem;
    display: inline-block;
    max-width: 50%
}
.redirect:hover {
    background: #d4e6a5;
    border-color: #d4e6a5;
    color: #476a2e;
}
.drink span {
    margin-right: .5rem;
}
.drink-data {
    background: #d4e6a5;
    padding: .25rem .5rem;
    border-radius: .25rem;
    color: #476a2e;
}
</style>