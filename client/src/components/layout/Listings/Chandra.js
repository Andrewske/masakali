import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { chandraImages } from '../Gallery/galleryImages';
import Template from './Template';
import { loadVillas } from '../../../actions/villas';
import getDaysBetweenDates from '../../../utils/getDaysBetweenDates';
import { getVillaRates } from '../../../actions/smoobu';
import useFormatCurrency from '../../../utils/useFormatCurrency';
import moment from 'moment';

const imageSelection = [10, 0, 1, 4, 5];

const Chandra = ({ loadVillas, chandra, getVillaRates, currency }) => {
  const [blockedDates, setBlockedDates] = useState(null);
  const [checkInDates, setCheckInDates] = useState(null);
  const [reducedPrice, setReducedPrice] = useState(102);

  useEffect(() => {
    if (chandra?.datesReserved) {
      let dates = [];
      let startDates = chandra.datesReserved.map((d) => d.startDate);
      let endDates = chandra.datesReserved.map((d) => d.endDate);

      dates = endDates.filter((d) => startDates.includes(d));

      chandra.datesReserved.forEach((d) => {
        dates = [...dates, ...getDaysBetweenDates(d)];
      });

      let checkInDates = new Set(chandra.datesReserved.map((d) => d.startDate));
      setBlockedDates(new Set(dates));
      setCheckInDates(checkInDates);
    }
  }, [chandra]);

  useEffect(() => {
    if (!chandra?.rates) {
      getVillaRates();
    } else {
      let price =
        chandra.rates[moment().utc().format('YYYY-MM-DD')]?.price || null;
      if (price) {
        setReducedPrice(
          chandra.rates[moment().utc().format('YYYY-MM-DD')]?.price
        );
      }
    }
  }, [chandra.rates]);

  const listing = {
    name: chandra.name,
    title: chandra.title,
    description: chandra.description,
    images: chandraImages,
    price: reducedPrice,
    imageSelection,
    blockedDates,
    checkInDates,
    setReducedPrice,
  };

  useEffect(() => {
    loadVillas('chandra');
  }, [loadVillas]);

  return <Template listing={listing} />;
};

const mapStateToProps = (state) => ({
  chandra: state.villas.chandra,
  currency: state.country.currency,
});

export default connect(mapStateToProps, { loadVillas, getVillaRates })(Chandra);
