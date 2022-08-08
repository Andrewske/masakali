import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { jalaImages } from '../Gallery/galleryImages';
import Template from './Template';
import { loadVillas } from '../../../actions/villas';
import getDaysBetweenDates from '../../../utils/getDaysBetweenDates';
import { getVillaRates } from '../../../actions/smoobu';
import useFormatCurrency from '../../../utils/useFormatCurrency';
import moment from 'moment';

const imageSelection = [1, 10, 0, 4, 5];

const Jala = ({ loadVillas, jala, getVillaRates, currency }) => {
  const [blockedDates, setBlockedDates] = useState(null);
  const [checkInDates, setCheckInDates] = useState(null);
  const [reducedPrice, setReducedPrice] = useState(140);

  useEffect(() => {
    if (jala?.datesReserved) {
      let dates = [];
      let startDates = jala.datesReserved.map((d) => d.startDate);
      let endDates = jala.datesReserved.map((d) => d.endDate);

      dates = endDates.filter((d) => startDates.includes(d));

      jala.datesReserved.forEach((d) => {
        dates = [...dates, ...getDaysBetweenDates(d)];
      });

      let checkInDates = new Set(jala.datesReserved.map((d) => d.startDate));
      setBlockedDates(new Set(dates));
      setCheckInDates(checkInDates);
    }
  }, [jala]);

  useEffect(() => {
    if (!jala?.rates) {
      getVillaRates();
    } else {
      let price =
        jala.rates[moment().utc().format('YYYY-MM-DD')]?.price || null;
      if (price) {
        setReducedPrice(jala.rates[moment().utc().format('YYYY-MM-DD')]?.price);
      }
    }
  }, [jala.rates, getVillaRates]);

  const listing = {
    name: jala.name,
    title: jala.title,
    description: jala.description,
    images: jalaImages,
    price: reducedPrice,
    imageSelection,
    blockedDates,
    checkInDates,
    setReducedPrice,
  };

  useEffect(() => {
    loadVillas('jala');
  }, [loadVillas]);

  return <Template listing={listing} />;
};

const mapStateToProps = (state) => ({
  jala: state.villas.jala,
  currency: state.country.currency,
});

export default connect(mapStateToProps, { loadVillas, getVillaRates })(Jala);
