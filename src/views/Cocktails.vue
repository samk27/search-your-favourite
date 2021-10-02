<template>
 <div>
    <nav-bar></nav-bar>
    <base-search @search="updateSearch"></base-search>
    <cocktail-list :cocktails="searchedCocktails"></cocktail-list>
 </div>
</template>

<script>
import COCKTAIL_DATA from '../dummy-data';
import NavBar from '../components/NavBar.vue';
import BaseSearch from '../components/UI/BaseSearch.vue';
import CocktailList from '../components/cocktails/CocktailList.vue';

export default {
    components: {
      NavBar,
      BaseSearch,
      CocktailList
  },
    data() {
      return {
        cocktailData: COCKTAIL_DATA, 
        enteredSearchTerm: ''
      }
  },
  computed: {
    searchedCocktails() {
      if (this.enteredSearchTerm === '') {
        return this.cocktailData
      }
      return this.cocktailData.filter((item) => {
        return (
          item.cocktailName
          .toLowerCase()
          .indexOf(this.enteredSearchTerm.toLowerCase()) != -1
        )
      })
    }
  },
  methods: {
    updateSearch(val) {
      this.enteredSearchTerm = val
    }
  }
}
</script>