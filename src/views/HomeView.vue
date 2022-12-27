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
const result = ref();
const chartValue = ref();

//methods

onMounted(() => {
  apiFetch("symbols").then((response) => (symbols.value = response.data));
});

function getValue(response: number) {
  result.value = response;
  return result;
}
</script>

<template>
  <div class="layout">
    <div class="header">
      <h4>Convert anything</h4>
      <img class="map" src="../assets/images/map.jpg" alt="world map" />
    </div>
    <form class="content-wrapper">
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
      </div>
      <div class="result">
        <h6>{{ result }}</h6>
      </div>
    </form>
    <LineChart :chartValue="chartValue" />
  </div>
</template>

<style scoped>
.layout {
  display: grid;
  grid-template-columns: 2rem repeat(10, 4rem) auto 2rem;
  grid-template-rows: 1rem 2rem repeat(12, 6rem) auto;
}

.content-wrapper {
  grid-row: 4;
  grid-column: 2/4;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.header {
  display: grid;
  grid-template-columns: 2rem 7rem 5rem auto;
  grid-template-rows: 1rem 2rem auto;
}

.header h4 {
  font-size: 1.2rem;
  color: #d9be8f;
  grid-column: 2/5;
  grid-row: 2;
  font-family: "karla", "spectral", "roboto";
}

.map {
  grid-column: 3/7;
  grid-row: 2/7;
  object-fit: cover;
  max-height: 50%;
  z-index: -1;
}

.convert {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  align-items: center;
}

select {
  max-width: 4.5rem;
  min-width: 2.5rem;
  height: 2rem;
  border-radius: 10%;
  border: none;
  margin: 0;
  align-self: center;
  color: #616f2a;
  background-color: #d9d9d9;
}

.inputFields {
  text-align: center;
  font-family: "spectral", "roboto";
  display: flex;
  gap: 1rem;
}

.arrows {
  width: 1rem;
  height: 1rem;
  align-self: center;
}

.result,
.transform,
.value {
  max-width: 5rem;
  min-width: 2.5rem;
  min-height: 2rem;
  border-radius: 10px;
  font-family: "spectral", "roboto";
  display: flex;
  justify-content: center;
}

.result {
  content: "";
  background-color: #d9d9d9;
  align-self: center;
}

#chart {
  grid-column: 1/7;
  grid-row: 7;
  padding: 1rem;
}

@media (min-width: 600px) {
  .map {
    max-height: 80%;
  }
  #chart {
    grid-column: 2/14;
    grid-row: 10;
    margin-right: 1rem;
  }
}

@media (min-width: 900px) {
  .layout {
    display: grid;
    flex-direction: row-reverse;
    grid-template-columns: 2% 48% 50%;
    grid-template-rows: 10% 40% auto;
  }
  .header {
    grid-column: 3;
  }
  .content-wrapper {
    grid-column: 2;
    grid-row: 2;
    display: flex;
    flex-direction: column;
  }
  .map {
    grid-column: 1/-1;
    grid-row: 3;
    width: 100%;
  }
  .header h4 {
    grid-row: 2;
    grid-column: 1/-1;
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
    justify-content: center;
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
    min-width: 2.5rem;
  }

  #chart {
    grid-column: 2/-1;
    grid-row: 3;
    margin: 0;
  }
}

/* For general iPad layouts */
</style>
