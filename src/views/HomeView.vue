<script setup lang="ts">
import TheButton from "../components/TheButton.vue";
import LineChart from "../components/LineChart.vue";

//import { ref } from "vue";
import { useFetch } from "../composables/useFetch";
import { onMounted, ref } from "vue";

//composable

const { apiFetch, convertValue } = useFetch();

//reactive variables
const baseCurrency = ref<string>();
const targetCurrency = ref<string>();
const amount = ref<string>();
const text = "Convert";
const symbols = ref();

//methods

onMounted(() => {
  apiFetch("symbols").then((response) => (symbols.value = response.data));
});
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
          <select v-model="baseCurrency" type="string">
            <option
              v-for="(item, index) in symbols"
              :key="index"
              :value="index"
            >
              {{ item }}
            </option>
          </select>
        </div>
        <img
          src="../assets/images/arrowsMobile.svg"
          alt="double arrows"
          class="arrows"
        />
        <div class="expected-currency">
          <select v-model="targetCurrency" type="string">
            <option
              v-for="(item, index) in symbols"
              :key="index"
              :value="index"
            >
              {{ item }}
            </option>
          </select>
        </div>
      </div>
      <div class="convert">
        <input
          class="value"
          v-model="amount"
          type="number"
          placeholder="How Much?"
        />
        <div class="transform">
          <TheButton
            type="submit"
            :text="text"
            @click="convertValue(baseCurrency, targetCurrency, amount)"
          />
        </div>
        <div class="result">
          <h6>{{ convertedValue }}</h6>
        </div>
      </div>
    </div>
    <LineChart />
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
.convert {
  grid-column: 2/4;
  grid-row: 5/7;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
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

select {
  max-width: 4.5rem;
  height: 2rem;
  border-radius: 10%;
  border: none;
  margin: 0;
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
}

.arrows {
  width: 1rem;
  height: 1rem;
  align-self: center;
}

.result {
  background-color: #d9d9d9;
}

.result,
.transform,
.value {
  max-width: 5rem;
  height: 2rem;
  border-radius: 10px;
  font-family: "spectral", "roboto";
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
  #app {
    display: flex;
  }
  .layout {
    display: flex;
    flex-direction: row-reverse;
    flex-grow: 1;
    flex-basis: 50%;
  }
  .header,
  .content-wrapper {
    display: flex;
    flex-direction: column;
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
  .content-wrapper,
  .convert {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    width: 100%;
  }
  .arrows {
    width: 2rem;
    height: 2rem;
  }
  input,
  select,
  .result,
  .transform {
    max-width: 4.5rem;
    min-width: 1.5rem;
  }
}
</style>
