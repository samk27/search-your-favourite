<template>
  <li class="cocktail">
    <img :src="img" width="305" height="280">
    <div class="info">
        <h3>{{ cocktailName }}</h3>
        <h4>{{ shortDescription }}</h4>
        <button class="viewCocktail" @click="viewCocktail">Details</button>
    </div>
  </li>
</template>

<script>
export default {
    props: ['id', 'img', 'cocktailName', 'shortDescription'],
    methods: {
      viewCocktail() {
        const cocktailId = this.id;
        this.$router.push({ name: 'cocktail', params: { id: cocktailId } }) //path: `/cocktail/${cocktailId}`
      }
    }

}

</script>

<style scoped>
li.cocktail {
    background: #fff;
    margin: 20px;
    box-shadow: 2px 5px 3px 0 rgb(0 0 0 / 50%);
    transition: all .3s linear;
    display: grid;
    grid-template-rows: auto 1fr;
    border-radius: .25rem;
    text-align: left;
    padding-bottom: 15px;
    max-width: 26%;
}
div.info {
    padding: 20px;
    display: grid;
    align-content: space-between;
}
li h3 {
  margin: 0;
  font-size: 2rem;
}
li h4 {
  margin: 0;
  font-size: 1rem;
  font-weight: 300;
}
img {
    border-radius: .25rem;
}
.viewCocktail {
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
.viewCocktail:hover {
    background: #d4e6a5;
    border-color: #d4e6a5;
    color: #476a2e;
}
</style>