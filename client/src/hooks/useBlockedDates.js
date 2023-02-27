import {useQuery} from 'react-query';
import {useEffect} from 'react';

import axios from 'axios';
import { serverUrl } from '../config';

const useBlockedDates = () => {

    const {isLoading, isError, error, data} = useQuery('getBlockedDates', () => axios.get(serverUrl + '/smoobu/bookings/bookedDates').then(res => res.data))

    useEffect(() => {console.log({isLoading, isError, error, data})},[isLoading, isError, error, data])
    return data
}

export default useBlockedDates;