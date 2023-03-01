import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getVillaRates, getBlockedDates } from '../actions/smoobu';
import moment from 'moment';

const getDaysBetweenDates = (startDate, endDate) => {
  let dates = [];
  let now = moment(startDate);
  while (now.isSameOrBefore(moment(endDate).subtract(1, 'days'))) {
    dates.push(now.format('YYYY-MM-DD'));
    now.add(1, 'days');
  }
  return dates;
};

const useVillaPricing = ({ checkIn, checkOut }) => {
  const dispatch = useDispatch();
  const villas = useSelector((state) => state.villas);

  useEffect(() => {
    if (
      !villas?.rates ??
      villas.rates.filter((date) => moment(date) < moment())
    ) {
      dispatch(getVillaRates());
    }
  }, []);

  useEffect(() => {
    if (
      !villas?.surya.blockedDates ??
      villas.surya.blockedDates.filter((date) => moment(date) < moment())
    ) {
      dispatch(getBlockedDates());
    }
  }, []);

  let dates = getDaysBetweenDates(checkIn, checkOut);

  const isAvailable = (villa) => {
    if (!villas[villa]?.blockedDates) return false;
    let blockedDates = [
      ...villas[villa].blockedDates,
      ...villas[villa].checkOutDates,
    ];

    return dates.filter((d) => !blockedDates.includes(d)).length ===
      dates.length
      ? true
      : false;
  };

  const getPrice = (villa) => {
    if (!villas[villa]?.rates) return '$150';
    return villas[villa]?.rates[moment(checkIn).format('YYYY-MM-DD')]?.price;
  };

  return {
    surya: {
      isAvailable: isAvailable('surya'),
      pricePerNight: getPrice('surya'),
    },
    chandra: {
      isAvailable: isAvailable('chandra'),
      pricePerNight: getPrice('chandra'),
    },
    jala: {
      isAvailable: isAvailable('jala'),
      pricePerNight: getPrice('jala'),
    },
  };
};

export default useVillaPricing;
