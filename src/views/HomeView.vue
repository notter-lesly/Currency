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
    <div class="header">
      <h4>Convert anything</h4>
      <img class="map" src="../assets/images/map.jpg" alt="world map" />
    </div>
    <div class="content-wrapper">
      <div class="inputFields">
        <div class="base-currency">
          <input v-model="baseCurrency" type="number" />
          <select>
            <option v-for="item in list" :key="item.key">
              {{ item.symbol }}
            </option>
          </select>
        </div>
        <img
          src="../assets/images/arrowsMobile.svg"
          alt="double arrows"
          class="arrows"
        />
        <div class="expected-currency">
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
  </div>
</template>

<style>
.layout,
.header,
.content-wrapper {
  display: grid;
  grid-template-columns: 2rem repeat(10, 4rem) auto 2rem;
  grid-template-rows: 1rem 2rem repeat(8, 6rem) auto 1rem;
}

.header h4 {
  font-size: 1.2rem;
  color: #d9be8f;
  grid-column: 2/5;
  grid-row: 2;
  font-family: "karla", "spectral", "roboto";
}

.map {
  grid-column: 4;
  object-fit: cover;
  height: 120vh;
  z-index: -1;
}

input {
  width: 3rem;
  height: 2rem;
  border-radius: 10%;
  border: none;
  margin: 0;
  align-self: center;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-right-color: #181818;
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
  grid-row: 4;
  text-align: center;
  font-family: "spectral", "roboto";
  display: flex;
  gap: 1rem;
  flex-direction: row;
  align-items: center;
}

.base-currency,
.expected-currency {
  display: flex;
  flex-direction: row;
  width: 73.35px;
  height: 43px;
  align-items: center;
}

.arrows {
  width: 1rem;
  height: 1rem;
  align-self: center;
}

.transform {
  grid-column: 2/4;
  grid-row: 5;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
}

.transform button {
  margin: 1rem;
}

.result {
  grid-column: 2/4;
  grid-row: 6;
  height: 36.35px;
  border-radius: 10px;
  font-family: "spectral", "roboto";
  background-color: #d9d9d9;
  display: flex;
  justify-content: center;
}

.result h6 {
  align-self: center;
}

@media (min-width: 600px) {
  .map {
    grid-column: 6;
  }
}

@media (min-width: 900px) {
  .layout {
    display: flex;
    flex-direction: row-reverse;
  }
  .map {
    grid-column: 8;
    grid-row: 3;
  }
  .header {
    flex-direction: column;
    display: flex;
  }
  .header h4 {
    text-align: center;
  }
  .inputFields {
    align-self: center;
  }
  .transform {
    align-self: center;
  }
  .result {
    align-self: center;
  }
  .content-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
  }
}
</style>
