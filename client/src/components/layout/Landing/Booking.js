import React from 'react';
import styled from 'styled-components';
import { HashLink as Link } from 'react-router-hash-link';

import ImageContext from '../../../utils/ImageContext';
import { IKImage } from 'imagekitio-react';
import { url } from 'gravatar';

const suryaImage =
  'https://ik.imagekit.io/4kpopox69zp/tr:w-auto,h-500px,dpr-auto/Gallery/Completed/17_SQWp4aL7p.jpg?ik-sdk-version=react-1.0.9';
const chandraImage =
  'https://ik.imagekit.io/4kpopox69zp/tr:w-auto,h-500px,dpr-auto/Gallery/Completed/Chandra/chandra_bathroom_1_QhGUo7tBsnd.jpg?ik-sdk-version=react-1.0.9';
const jalaImage =
  'https://ik.imagekit.io/4kpopox69zp/tr:w-auto,h-500px,dpr-auto/Gallery/Completed/Jala/jala_front_angle_HtBbZj5NqF.jpg?ik-sdk-version=react-1.0.9';

const Container = styled.section`
    display: flex;
    flex-direction: column;
    flex-wrap;
    padding: 50px 0 50px 0;

`;

const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-evenly;
  margin-right: 20px;
`;

const Card = styled.div`
  height: 500px;
  width: 400px;
  background: white;
  border-radius: 5px;
  box-shadow: 2px 3px 5px 0px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  position: relative;
  transition: all 0.3s ease-in-out;
  margin: 10px;

  &:hover {
    transform: scale(1.05);
    z-index: 4;
  }
`;

const Image = styled.span`
  display: grid;
  place-items: center;
  height: 500px;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  margin: 0 !important;
`;

const TextBox = styled.div`
  position: absolute;
  bottom: 50px;
  left: 0;
  color: #372137;
  background: rgba(255, 255, 255, 0.5);
  margin: 5px;
  border-radius: 3px;
  padding: 5px;
  width: 75%;

  h3 {
    font-size: 2rem;
  }
`;

const Prices = styled.span`
  display: flex;
  font-size: 1.5rem;
`;

const Price = styled.p`
  position: relative;
  margin-right: 10px;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    right: 0;
    border-top: 2px solid red;
    -webkit-transform: rotate(-25deg);
    -moz-transform: rotate(-25deg);
    -ms-transform: rotate(-25deg);
    -o-transform: rotate(-25deg);
    transform: rotate(-25deg);
  }
`;

const Links = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  display: flex;
  justify-content: space-evenly;
`;

// const Link = styled.span`
//   height: 50px;
//   width: 50%;
//   display: grid;
//   place-items: center;
//   color: white;
//   cursor: pointer;
// `;

const SubText = styled.p`
  padding-sop: 25px;
`;

const Booking = () => {
  return (
    <section id='booking' className='container background-gray'>
      <div className='header'>
        <p>MASAKALI</p>
        <h1>Booking</h1>
        <div className='divider' />
      </div>
      <Box>
        <Card>
          <Image
            style={{
              backgroundImage: `url(${suryaImage})`,
            }}
          />
          <TextBox>
            <h3>SURYA</h3>
            <ul>
              <li>Private Infinity Pool</li>
              <li>Kitchenette</li>
              <li>Outdoor Shower</li>
              <li>Spa services and meals available</li>
            </ul>
            <Prices>
              <Price>$100</Price>
              <p>$85/night</p>
            </Prices>
          </TextBox>
          <Links>
            <Link
              className='booking-com booking-page-link'
              onClick={() =>
                window.open(
                  'https://www.booking.com/hotel/id/masakali-retreat-gianyar.html',
                  '_blank'
                )
              }
            >
              Booking.com
            </Link>
            <Link className='email booking-page-link' to={`/#contact`}>
              Email Us
            </Link>
            <Link
              className='airbnb booking-page-link'
              onClick={() =>
                window.open('https://www.airbnb.com/rooms/53234674', '_blank')
              }
            >
              AirBnb
            </Link>
          </Links>
        </Card>
        <Card>
          <Image
            style={{
              backgroundImage: `url(${chandraImage})`,
            }}
          />
          <TextBox>
            <h3>CHANDRA</h3>
            <ul>
              <li>Private Infinity Pool</li>
              <li>Kitchenette</li>
              <li>Outdoor Shower</li>
              <li>Spa services and meals available</li>
            </ul>
            <Prices>
              <Price>$85</Price>
              <p>$72/night</p>
            </Prices>
          </TextBox>
          <Links>
            <Link
              className='booking-com booking-page-link'
              onClick={() =>
                window.open(
                  'https://www.booking.com/hotel/id/masakali-retreat-gianyar.html',
                  '_blank'
                )
              }
            >
              Booking.com
            </Link>
            <Link className='email booking-page-link' to={`/#contact`}>
              Email Us
            </Link>
            <Link
              className='airbnb booking-page-link'
              onClick={() =>
                window.open('https://www.airbnb.com/rooms/53609606', '_blank')
              }
            >
              AirBnb
            </Link>
          </Links>
        </Card>
        <Card>
          <Image
            style={{
              backgroundImage: `url(${jalaImage})`,
            }}
          />
          <TextBox>
            <h3>JALA</h3>
            <ul>
              <li>Private Infinity Pool</li>
              <li>Kitchenette</li>
              <li>Outdoor Shower</li>
              <li>Spa services and meals available</li>
            </ul>
            <Prices>
              <Price>$70</Price>
              <p>$60/night</p>
            </Prices>
          </TextBox>
          <Links>
            <Link
              className='booking-com booking-page-link'
              onClick={() =>
                window.open(
                  'https://www.booking.com/hotel/id/masakali-retreat-gianyar.html',
                  '_blank'
                )
              }
            >
              Booking.com
            </Link>
            <Link className='email booking-page-link' to={`/#contact`}>
              Email Us
            </Link>
            <Link
              className='airbnb booking-page-link'
              onClick={() =>
                window.open('https://www.airbnb.com/rooms/53395669', '_blank')
              }
            >
              AirBnb
            </Link>
          </Links>
        </Card>
        <SubText>
          Save 15% by booking with us directly.{' '}
          <Link to={'/#contact'}>Click here to send us an email</Link>.
        </SubText>
      </Box>
    </section>
  );
};

export default Booking;