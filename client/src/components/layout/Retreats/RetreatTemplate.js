import moment from 'moment';
import { useRef } from 'react';
import Header from '../Header';
import Banner from './Banner';
import Details from './Details';
import WhyChoose from './WhyChoose';
import Description from './Description';
import Facilitators from './Facilitators';
import TheSpace from './TheSpace';
import Packages from './Packages';

import useRetreat from '../../../hooks/useRetreat';

const RetreatTemplate = ({ name }) => {
  const startDate = moment('2023-04-23').format('M/DD/YYYY');
  const endDate = moment('2023-04-27').format('M/DD/YYYY');
  const packageRef = useRef();

  let { retreatData, createBooking } = useRetreat(name);

  const scroll = () =>
    packageRef.current.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="retreats">
      <Header hide={false} />

      <Banner
        startDate={startDate}
        endDate={endDate}
        scroll={scroll}
      />
      <Details
        startDate={startDate}
        endDate={endDate}
      />
      <WhyChoose />
      <Description scroll={scroll} />
      <Facilitators />
      <TheSpace />
      <Packages
        packageRef={packageRef}
        retreatData={retreatData}
        createBooking={createBooking}
      />
    </div>
  );
};

export default RetreatTemplate;
