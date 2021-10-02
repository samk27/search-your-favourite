<template>
    <nav class="topnav">
      <div class="left">
        <router-link class="active" to="/">TheCocktailDB</router-link>
      </div>
      <div class="right">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
      </div>
    </nav>
</template>

<style>
.topnav {
  background-color: #ffffff;
  overflow: hidden;
  box-shadow: 2px 4px 2px #908e8e;
  padding: 26px 40px;
}
.topnav .left {
  float: left;
  margin-left: 80px;
}
.topnav .right {
  float: right;  
  margin-right: 200px;
}
.topnav a {
  color: #000000;
  text-decoration: none;
  text-align: center;
  font-size: 17px;
  padding: 14px 16px;
}
.topnav a:hover {
  color: #ff6b6d;
}
</style>