<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <RouterView />
</template>

<style>
/*font face imports*/
/*spectral*/
@import url("https://fonts.googleapis.com/css2?family=Spectral:ital,wght@0,300;0,400;0,600;1,800&display=swap");

/*Libre Caslon*/

@import url("https://fonts.googleapis.com/css2?family=Libre+Caslon+Display&display=swap");

/*Karla*/
@import url("https://fonts.googleapis.com/css2?family=Karla:wght@700&display=swap");

/*Work-sans*/

@import url("https://fonts.googleapis.com/css2?family=Work+Sans&display=swap");

/*Roboto*/
@import url("https://fonts.googleapis.com/css2?family=Roboto+Serif:opsz,wght@8..144,300&display=swap");

/*reset*/
html {
  box-sizing: border-box;
  overflow-x: hidden;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}

body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
ol,
ul {
  margin: 0;
  padding: 0;
  font-weight: normal;
}

ol,
ul {
  list-style: none;
}

body {
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  background-color: rgb(11, 12, 16);
}

#app {
  overflow-x: hidden;
  width: 100vw;
  height: 100vh;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
