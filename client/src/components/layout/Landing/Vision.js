import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  min-height: 100vh;
  max-width: 100%;
  display: flex;
  flex-direction: column;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: auto;
  padding: 50px 0px 50px;
  text-align: center;
  max-width: 750px;
`;

const Heading = styled.h3`
  padding: 5px;
`;
const SubHeading = styled.h4`
  padding: 5px;
`;

const Text = styled.p`
  padding: 10px;
  text-align: left;
`;

const Vision = (props) => {
  return (
    <Container id='vision'>
      <div className='header' style={{ marginTop: '0px' }}>
        <h1>Vision</h1>
      </div>
      <TextBox>
        <Heading>- Masakali -</Heading>
        <SubHeading>
          Aspiring to fly high through peace and liberation
        </SubHeading>
        <Text>
          A romance of an extraordinary destination with nourishment of the
          mind, body and spirit, exemplary service and premium, yet ecologically
          conscious, accommodations. Join us on the Island of the Gods
        </Text>
        <Heading>- Bali -</Heading>
        <Text>
          With its serene landscape and rich culture. Whether you are looking
          for a refreshing holiday, a thrilling adventure or to immerse yourself
          spiritually, every aspect of Bali invites you to take a step on your
          journey towards happiness and fulfillment. The heart and soul of this
          island paradise is Bali’s center for art, culture and healing
        </Text>
        <Heading>- Ubud -</Heading>
        <Text>
          A mere twenty minutes north of Ubud nestled amidst lush green hues of
          rolling rice fields and surrounded by gardens of tropical jungle
          resting poetically in the center of a green zone, you will find us– a
          sanctuary for you to rest, rejuvenate, and reconnect with yourself and
          nature. We are dedicated to providing this safe haven to you all the
          while being conscious of using earth’s natural resources responsibly
          and conscious of the impact on the local community
        </Text>
      </TextBox>
    </Container>
  );
};

Vision.propTypes = {};

export default Vision;
