import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getBlockedDates } from '../actions/smoobu';
import getDatsBetweenDates from './getDaysBetweenDates';

const blockedDates = ({ name, villas, getBlockedDates }) => {
  const [blockedDates, setBlockedDates] = useState(null);
  const [checkInDates, setCheckInDates] = useState(null);

  useEffect(() => {
    getBlockedDates();
  }, [getBlockedDates]);

  useEffect(() => {
    if (villas[name]?.datesReserved) {
      let dates = [];
      villas[name].datesReserved.forEach((d) => {
        dates = [...dates, ...getDaysBetweenDates(d)];
      });

      let checkInDates = new Set(
        villas[name].datesReserved.map((d) => d.startDate)
      );
      setBlockedDates(new Set(dates));
      setCheckInDates(checkInDates);
    }
  });

  return { blockedDates, checkInDates };
};

const mapStateToProps = (state) => ({
  villas: state.villas,
});

export default connect(mapStateToProps, { getBlockedDates })(blockedDates);
