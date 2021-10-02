<template>
  <base-container>
    <h2>Cocktails</h2>
    <ul>
        <cocktail-card
            v-for="cocktail in displayCocktails"
            :key="cocktail.id"
            :img="cocktail.img"
            :cocktail-name="cocktail.cocktailName"
            :short-description="cocktail.shortDescription"
            :id="cocktail.id"
        ></cocktail-card>
    </ul>
  </base-container>
</template>

<script>
import BaseContainer from '../UI/BaseContainer.vue';
import CocktailCard from '././CocktailCard.vue';

export default {
  props: ['cocktails'],
  components: {
    CocktailCard,
    BaseContainer
  },
  computed: {
    displayCocktails() {
        this.cocktails.sort((a, b) => {
            if (a.cocktailName < b.cocktailName) {
                return -1;
            } else if (a.cocktailName > b.cocktailName) {
                return 1;
            } else {
                return 0;
            }
        });
        console.log(this.cocktails);
        return this.cocktails
    }
  }  
}
</script>

<style scoped>
h2 {
    text-align: center;
}
ul {
  display: flex;
  list-style: none;
  flex-direction: row;
  justify-content: center;
  margin: 0;
  padding: 0;
  flex-wrap: wrap;
}
</style>