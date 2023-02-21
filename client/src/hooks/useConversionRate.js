import {useQuery} from 'react-query'
import { serverUrl } from '../config'
import axios from 'axios'

const useConversionRate = (currency) => {
  
  const {data, isLoading, isError} = useQuery('conversionRate', () => axios.get(serverUrl + '/currency').then(res => res.data?.data)
  )
  
  if (data) return data[currency]

  return 0
  
}

export default useConversionRate