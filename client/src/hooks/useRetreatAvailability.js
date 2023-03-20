import { useQuery } from 'react-query';

import axios from 'axios';
import { serverUrl } from '../config';

const useRetreatAvailability = (retreatName) =>
  useQuery('getRetreat', () =>
    axios.get(serverUrl + `/reservations/retreats?name=${retreatName}`)
  );

export default useRetreatAvailability;
