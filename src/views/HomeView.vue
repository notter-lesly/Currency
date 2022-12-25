<script setup lang="ts">
import TheButton from "../components/TheButton.vue";
import { ref } from "vue";

const list = [
  { currency: "euro", symbol: "§", key: 0 },
  { currency: "dolar", symbol: "$", key: 1 },
];
const baseCurrency = ref<number>();
const expectedCurrency = ref<number>();
const text = "Convert";
</script>

<template>
  <div class="layout">
    <h4 class="header">Convert anything</h4>
    <img class="map" src="../assets/images/map.jpg " />
    <div class="inputFields">
      <div class="baseCurrency">
        <input v-model="baseCurrency" type="number" />
        <select>
          <option v-for="item in list" :key="item.key">
            {{ item.symbol }}
          </option>
        </select>
      </div>
      <img src="../assets/images/arrowsMobile.svg" class="arrows" />
      <div class="expectedCurrency">
        <input v-model="expectedCurrency" type="number" />
        <select>
          <option v-for="item in list" :key="item.key">
            {{ item.symbol }}
          </option>
        </select>
      </div>
    </div>
    <div class="transform">
      <TheButton :text="text" />
    </div>
    <div class="result">
      <h6>532853259 §</h6>
    </div>
  </div>
</template>

<style>
.header {
  font-size: 20px;
  color: #d9be8f;
  grid-column: 2/5;
  grid-row: 2;
  font-family: "karla";
}
.layout {
  display: grid;
  grid-template-columns: 2rem repeat(10, 4rem) auto 2rem;
  grid-template-rows: 1rem 2rem repeat(8, 6rem) auto 1rem;
}
.map {
  grid-column: 4;
  position: relative;
  object-fit: cover;
  z-index: -1;
}

input {
  width: 3rem;
  height: 2rem;
  border-radius: 10%;
  border: none;
  margin: 0;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-right-color: #181818;
  align-self: center;
  background-color: #d9d9d9;
}

select {
  width: 3rem;
  height: 2rem;
  border-radius: 10%;
  border: none;
  margin: 0;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  align-self: center;
  color: #616f2a;
  background-color: #d9d9d9;
}

.inputFields {
  grid-column: 2/6;
  grid-row: 4;
  text-align: center;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  font-family: "spectral";
}

.baseCurrency {
  display: flex;
  flex-direction: row;
  width: 73.35px;
  height: 43px;
  align-items: center;
}

.expectedCurrency {
  display: flex;
  flex-direction: row;
  width: 73.35px;
  height: 43px;
}
.arrows {
  width: 1rem;
  height: 1rem;
  align-self: center;
}

.transform {
  grid-column: 3/5;
  grid-row: 5;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
}

.transform button {
  margin: 1rem;
}

.result {
  grid-column: 3/5;
  grid-row: 6;
  height: 36.35px;
  font-family: "spectral";
  background-color: #d9d9d9;
  border-radius: 10px;
  display: flex;
  justify-content: center;
}

.result h6 {
  align-self: center;
}

@media (max-width: 599px) {
}

@media (min-width: 600px) {
}

@media (min-width: 900px) {
  .map {
    grid-column: 8;
    grid-row: 3;
  }
  .header {
    grid-column: 13/16;
  }
}

@media (min-width: 1200px) {
  .map {
    grid-column: 8/10;
  }
}

@media (min-width: 1800px) {
}
</style>
