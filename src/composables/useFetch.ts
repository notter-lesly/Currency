import axios from "axios";
import { ref } from "vue";
const local = 'http://localhost:3000/'

//reactive variables
const convertedValue = ref()
const errorDiv = ref(false)
const loading = ref(false)

export function useFetch() {
  //getting all the currency names
  async function apiFetch(path: string) {
    const data = await axios.get(`${local}${path}`, {
      headers: {
        Accept: "application/json",
      }
    })
    const symbols = data
    return symbols
  }
  //converting the values and setting the loading state 
  async function convertValue({ baseCurrency, targetCurrency, amount }: { baseCurrency: string, targetCurrency: string, amount: string }) {

    if (!baseCurrency || !targetCurrency || !amount) {
      errorDiv.value = true
    } else {
      loading.value = true
      const { data } = await axios.get(`${local}convert`, {
        headers: {
          Accept: "application/json",
        },
        params: { baseCurrency, targetCurrency, amount }
      })
      convertedValue.value = data.result

      loading.value = false
      return convertedValue
    }
  }
  //getting the data of the target currency to fill the graphic
  async function getGraphData({ baseCurrency, targetCurrency }: { baseCurrency: string, targetCurrency: string }) {
    const { data } = await axios.get(`${local}timeseries`, {
      headers: {
        Accept: "application/json",
      },
      params: { baseCurrency, targetCurrency }
    })
    return data.currencyValues
  }

  return {
    apiFetch,
    convertValue,
    convertedValue,
    getGraphData,
    errorDiv,
    loading
  }
}
