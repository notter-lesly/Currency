<script setup lang="ts">
import TheButton from "../components/TheButton.vue";
import LineChart from "../components/LineChart.vue";
import { useFetch } from "../composables/useFetch";
import { onMounted, ref, watch } from "vue";

//composable
const {
  apiFetch,
  convertValue,
  getGraphData,
  convertedValue,
  errorDiv,
  loading,
} = useFetch();

//reactive variables
const baseCurrency = ref<string>("");
const targetCurrency = ref<string>("");
const amount = ref<string>("");
const symbols = ref();
const graphData = ref<number[]>([]);
const showGraph = ref<boolean>(false);
const errorMessage = ref<boolean>();
const msg = ref<string>();

//methods
onMounted(() => {
  apiFetch("symbols").then((response) => (symbols.value = response.data));
});

//watchers
watch(convertedValue, async () => {
  showGraph.value = false;
  graphData.value = await getGraphData({
    baseCurrency: baseCurrency.value,
    targetCurrency: targetCurrency.value,
  });
  showGraph.value = true;
});

watch(errorDiv, async () => {
  errorMessage.value = true;
  errorDiv.value = false;
});
</script>

<template>
  <div class="layout">
    <div class="header">
      <h4>Convert anything</h4>
      <img class="map" src="../assets/images/map.jpg" alt="world map" />
    </div>
    <Transition name="error-slide">
      <div v-if="errorMessage" class="error-container">
        <div class="error-box">
          <h4>You did not provide a valid amount.</h4>
          <button class="close" @click="errorMessage = false">
            <svg
              height="12px"
              id="Layer_1"
              style="enable-background: new 0 0 512 512"
              version="1.1"
              viewBox="0 0 512 512"
              width="12px"
            >
              <path
                d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z"
              />
            </svg>
          </button>
        </div>
      </div>
    </Transition>
    <form class="content-wrapper">
      <div class="input-fields">
        <div class="base-currency">
          <select
            v-model="baseCurrency"
            class="currency-choice"
            ref="base"
            required
            title="choose your base currency"
            :disabled="!symbols"
            @change="errorMessage = false"
          >
            <option
              v-for="(item, index) in symbols"
              :key="index"
              :value="index"
              required
            >
              {{ item }}
            </option>
          </select>
        </div>
        <img src="../assets/images/arrow.svg" alt="arrow" class="arrow" />
        <div class="expected-currency">
          <select
            v-model="targetCurrency"
            class="currency-choice"
            ref="target"
            required
            title="choose your target currency"
            :disabled="!symbols"
            @change="errorMessage = false"
          >
            <option
              v-for="(item, index) in symbols"
              :key="index"
              :value="index"
              required
            >
              {{ item }}
            </option>
          </select>
        </div>
      </div>
      <div class="convert">
        <input
          v-model="amount"
          class="value"
          required
          type="number"
          placeholder="How Much?"
          title="convert"
          @click="errorMessage = false"
        />
        <span v-if="msg">{{ msg }}</span>
        <div class="transform">
          <TheButton
            type="submit"
            :disabled="loading"
            @click.prevent="
              convertValue({ baseCurrency, targetCurrency, amount })
            "
          />
        </div>
      </div>
      <div v-if="showGraph" class="result">
        {{ convertedValue }}
      </div>
    </form>
    <LineChart
      v-if="showGraph"
      :currencyValue="graphData"
      :width="300"
      :height="300"
    />
  </div>
</template>

<style scoped>
.layout {
  display: grid;
  grid-template-columns: 3rem auto 2rem;
  grid-template-rows: 1rem 2rem repeat(12, 6rem) auto;
  height: calc(100vh - 10px);
}

.header {
  display: grid;
  grid-template-columns: 2rem 7rem 5rem auto;
  grid-template-rows: 1rem 2rem auto;
  max-height: 50%;
}

.header h4 {
  font-size: 1.2rem;
  color: #d9be8f;
  grid-column: 2/5;
  grid-row: 2;
  font-family: "karla", "Work Sans", Arial, Helvetica, sans-serif;
}

.map {
  grid-column: 3/7;
  grid-row: 2/7;
  object-fit: cover;
  max-height: calc(100vh - 10px);
  z-index: -1;
}

.content-wrapper {
  grid-row: 4;
  grid-column: 2/4;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: start;
}

.convert {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  align-items: center;
}

.currency-choice {
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

.error-container {
  grid-column: 2;
  grid-row: 2;
}

.error-box {
  height: fit-content;
  border-radius: 20px;
  background-color: ghostwhite;
  color: red;
  display: flex;
  flex-direction: row;
  justify-content: spa;
  align-items: center;
  border: 2px solid red;
  font-size: 0.9rem;
  font-family: "karla", "Work Sans", Arial, Helvetica, sans-serif;
  padding: 0.5rem;
  z-index: 2;
}

.close {
  align-self: flex-start;
  margin: 0;
  border: none;
  background-color: ghostwhite;
}

.input-fields {
  text-align: center;
  font-family: "spectral", "Libre Caslon Display", serif, "Roboto Serif",
    Georgia, "Times New Roman", Times, serif;
  display: flex;
  gap: 1rem;
  flex-direction: column;
}

select:hover,
input:hover {
  background-color: #31423a;
}

.arrow {
  width: 2rem;
  align-self: center;
}

.transform,
.value {
  max-width: 5rem;
  min-width: 4rem;
  min-height: 2rem;
  border-radius: 10px;
  font-family: "spectral", "Libre Caslon Display", serif, "Roboto Serif",
    Georgia, "Times New Roman", Times, serif;
  display: flex;
  justify-content: center;
}

.result {
  display: flex;
  flex-direction: center;
  justify-content: center;
  align-items: center;
  background-color: #d9d9d9;
  font-family: "spectral", "Libre Caslon Display", serif, "Roboto Serif",
    Georgia, "Times New Roman", Times, serif;
  border-radius: 10px;
  padding: 1rem;
  min-height: 2rem;
  min-width: 4rem;
}

#chart {
  display: none;
}

.error-slide-enter-active {
  transition: all 0.3s ease-out;
}

.error-slide-leave-active {
  transition: all cubic-bezier(1, 0.5, 0.8, 1);
}

.error-slide-enter-from,
.serror-slide-leave-to {
  transform: translateX(-20rem);
  opacity: 0;
}

@media (min-width: 480px) {
  .layout {
    grid-template-columns: 2% 40% 60%;
    grid-template-rows: 3% 50% auto;
  }

  .header {
    grid-column: 3;
    grid-row: 1/-1;
  }

  .header h4 {
    grid-row: 2;
    text-align: center;
  }

  .map {
    grid-column: 1;
    grid-row: 3;
  }

  .content-wrapper {
    grid-row: 2;
    grid-column: 2;
    align-items: center;
    align-self: center;
  }

  .input-fields {
    flex-direction: row;
  }

  .error-container {
    grid-column: 2;
    grid-row: 2;
  }
}
@media (min-width: 900px) {
  .layout {
    grid-template-columns: 2% 48% 50%;
    grid-template-rows: 3% 60% 40% auto;
  }

  .header {
    grid-column: 3;
  }

  .header h4 {
    grid-row: 2;
    grid-column: 1/-1;
  }

  .map {
    grid-column: 1/-1;
    width: fit-content;
  }

  .content-wrapper {
    grid-column: 2;
    grid-row: 2;
  }

  .input-fields {
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

  input,
  .currency-choice,
  .result,
  .transform {
    width: 7rem;
    min-width: 2.5rem;
    border: 1px solid transparent;
  }

  #chart {
    display: block;
    grid-column: 2;
    grid-row: 3;
    margin: auto;
  }

  .error-container {
    grid-column: 2;
    grid-row: 2;
    width: 100%;
    display: flex;
    justify-content: center;
    align-self: flex-start;
  }
  .error-box {
    width: 220px;
    height: 70px;
  }
}
</style>
