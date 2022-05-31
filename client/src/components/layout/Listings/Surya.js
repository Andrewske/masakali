import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { suryaImages } from '../Gallery/galleryImages';
import Template from './Template';
import { loadVillas } from '../../../actions/villas';
import getDaysBetweenDates from '../../../utils/getDaysBetweenDates';
import { getVillaRates } from '../../../actions/smoobu';
import useFormatCurrency from '../../../utils/useFormatCurrency';
import moment from 'moment';

const imageSelection = [10, 0, 1, 4, 5];

const Surya = ({ loadVillas, surya, getVillaRates, currency }) => {
  const [blockedDates, setBlockedDates] = useState(null);
  const [checkInDates, setCheckInDates] = useState(null);
  const [reducedPrice, setReducedPrice] = useState(100);

  useEffect(() => {
    if (surya?.datesReserved) {
      let dates = [];
      let startDates = surya.datesReserved.map((d) => d.startDate);
      let endDates = surya.datesReserved.map((d) => d.endDate);

      dates = endDates.filter((d) => startDates.includes(d));

      surya.datesReserved.forEach((d) => {
        dates = [...dates, ...getDaysBetweenDates(d)];
      });

      let checkInDates = new Set(surya.datesReserved.map((d) => d.startDate));
      setBlockedDates(new Set(dates));
      setCheckInDates(checkInDates);
    }
  }, [surya]);

  useEffect(() => {
    if (!surya?.rates) {
      getVillaRates();
    } else {
      let price =
        surya.rates[moment().utc().format('YYYY-MM-D')]?.price || null;
      if (price) {
        setReducedPrice(surya.rates[moment().utc().format('YYYY-MM-D')]?.price);
      }
    }
  }, [surya.rates]);

  const listing = {
    name: surya.name,
    title: surya.title,
    description: surya.description,
    images: suryaImages,
    price: reducedPrice,
    imageSelection,
    blockedDates,
    checkInDates,
    setReducedPrice
  };

  useEffect(() => {
    loadVillas('surya');
  }, [loadVillas]);

  return <Template listing={listing} />;
};

const mapStateToProps = (state) => ({
  surya: state.villas.surya,
  currency: state.country.currency,
});

export default connect(mapStateToProps, { loadVillas, getVillaRates })(Surya);
