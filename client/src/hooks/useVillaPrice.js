import {useQuery} from 'react-query'
import { serverUrl } from '../config';
import axios from 'axios'
import moment from'moment'
import useConversionRate from './useConversionRate'

// I think that I should be using React Query here, I believe if I use react query then I will not need to use redux state.
// Speaking of redux state. I am sure that I could get rid of a lot of that.

const getDaysBetweenDates = (startDate, endDate) => {
  let dates = [];
  let now = moment(startDate);
  while (now.isSameOrBefore(moment(endDate).subtract(1, 'days'))) {
    dates.push(now.format('YYYY-MM-DD'));
    now.add(1, 'days');
  }
  return dates;
};



const useVillaPrice = (startDate=null, endDate=null, villa) => {
  const conversionRate = useConversionRate('IDR')
  
  const {isLoading, isError, error, data} = useQuery('rates', () => axios.get(serverUrl + '/smoobu/rates_new').then(res => res.data))

  if (isLoading) return null

  if(data && startDate && endDate) {
    let dates = getDaysBetweenDates(startDate,endDate)

    
    let rates = Object.keys(data[villa]).filter(key => dates.includes(key)).reduce((obj, key) => {
      obj[key] = data[villa][key];
      return obj
    },{})

    let maxRate = Math.max(...Object.values(rates).map(r => r.price))



    return maxRate / conversionRate.value
  }

}

export default useVillaPrice