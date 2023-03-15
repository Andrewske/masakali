import moment from 'moment';

import Header from '../Header';
import Banner from './Banner';
import Details from './Details';
import WhyChoose from './WhyChoose';
import Description from './Description';
import Facilitators from './Facilitators';
import TheSpace from './TheSpace';
import Packages from './Packages';

const RetreatTemplate = () => {
  const startDate = moment('2023-04-23').format('M/DD/YYYY');
  const endDate = moment('2023-04-27').format('M/DD/YYYY');

  return (
    <div className="retreats">
      <Header hide={false} />
      <Banner
        startDate={startDate}
        endDate={endDate}
      />
      <Details
        startDate={startDate}
        endDate={endDate}
      />
      <WhyChoose />
      <Description />
      <Facilitators />
      <TheSpace />
      <Packages />
    </div>
  );
};

export default RetreatTemplate;
