//key: ahjMghjs5g28EtfSxQUnCcIXpNHGAM99

import axios from "axios";

const local= 'http://localhost:3000/'

export function useFetch() {

  async function apiFetch(path: string) {
    const data = await axios.get(`${local}${path}`,{
      headers: {
        Accept: "application/json",
      }
    })
    const symbols = data
    return symbols
  }

async function convertValue( baseCurrency, targetCurrency, amount){
    const data = await axios.get(`${local}convert`,{
      headers: {
        Accept: "application/json",
      }
    })
    const convertedValue = data
    function getValue(convertedValue)
  }


    return {
      apiFetch,
      convertValue,
    }
}
