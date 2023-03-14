import React from 'react';
import moment from 'moment';

const Details = ({ startDate, endDate }) => {
  return (
    <div className="details-container">
      <div className="left">
        <div className="when">
          <h3 className="title">WHEN</h3>
          <span className="date-row">
            <p className="day">
              {moment(startDate).format('D') +
                '-' +
                moment(endDate).format('D')}
            </p>
            <span>
              <p className="month">{moment(startDate).format('MMMM')}</p>
              <p className="year">{moment(startDate).format('YYYY')}</p>
            </span>
          </span>
        </div>
      </div>

      <div className="right">
        <div className="where">
          <h3 className="title">WHERE</h3>
          <h4 className="sub-title">Hotel Address</h4>
          <address>
            Masakali Retreat <br />
            Br. Ayah Kelusa Payangan <br />
            Gianyar Bali 80572 <br />
          </address>

          <h4 className="sub-title">Description</h4>
          <p>
            Masakali Retreat is located about 8km outside of Ubud. The land was
            specifically selected for its beauty, oneness with nature, and
            peacefulness. Overlooking the Balinese rice fields, with a beautiful
            volcano backdrop.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details;
