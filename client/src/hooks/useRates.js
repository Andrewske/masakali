import {useState, useEffect} from 'react'


// I think that I should be using React Query here, I believe if I use react query then I will not need to use redux state.
// Speaking of redux state. I am sure that I could get rid of a lot of that.
const useRates = () => {
  const [rates, setRates] = useState(null)

  useEffect(() => {
    if (!rates) {
        // go get the rates and setRates
        let data = 1 //fetch data
        return data
    }
  },[rates])
  
}

export default useRates