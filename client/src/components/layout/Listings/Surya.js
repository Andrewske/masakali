import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { suryaImages } from '../Gallery/galleryImages';
import Template from './Template';
import { loadVillas } from '../../../actions/villas';
import getDaysBetweenDates from '../../../utils/getDaysBetweenDates';
import moment from 'moment';

const imageSelection = [10, 0, 1, 4, 5];

const Surya = ({ loadVillas, surya }) => {
  const [blockedDates, setBlockedDates] = useState(null);
  const [checkInDates, setCheckInDates] = useState(null);

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

  const listing = {
    name: surya.name,
    title: surya.title,
    description: surya.description,
    images: suryaImages,
    price: surya.reducedPrice,
    imageSelection,
    blockedDates,
    checkInDates,
  };

  useEffect(() => {
    loadVillas('surya');
  }, [loadVillas]);

  return <Template listing={listing} />;
};

const mapStateToProps = (state) => ({
  surya: state.villas.surya,
});

export default connect(mapStateToProps, { loadVillas })(Surya);
