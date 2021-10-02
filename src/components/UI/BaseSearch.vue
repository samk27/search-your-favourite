<template>
    <form>
        <h3>Search For Your Favourite Cocktail</h3>
        <input type="search" @input="search" :value="searchTerm" />
    </form>
</template>

<script>
export default {
    props: ['searchTerm'],
    emit: ['search'],
    methods: {
        search(event) {
            this.$emit('search', event.target.value); 
        },
    },
};
</script>

<style>
form {
  margin: 60px 380px;
  background-color: #ffffff;
  box-shadow: 2px 5px 3px 0 rgb(0 0 0 / 50%);
  border-radius: 0.25rem;
  text-align: center;
  padding: 10px 40px 40px 40px;
}
input {
  font: inherit;
  display: block;
  width: 100%;
  padding: 2px;
  border: 2px solid #6868f2;
  border-radius: 5px;
  background-color: #e7fbfe;
}
input:focus {
  outline: none;
  border: 1px solid #4444d4;
  border-radius: 5px;
  background-color: #eeeeff;
}
</style>