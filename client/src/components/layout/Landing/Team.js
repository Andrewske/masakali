import React from 'react';
import styled from 'styled-components';

import ImageContext from '../../../utils/ImageContext';
import { IKImage } from 'imagekitio-react';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 50px 0px 50px;
`;

const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: start;
  justify-content: space-evenly;
  width: 100%;
  padding: 25px;
`;

const Member = styled.div`
  width: 350px;
  display: flex;
  flex: 1 1 30%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5px;
  padding-bottom: 25px;
`;

const Name = styled.p`
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;

const Title = styled.p`
  font-size: 14px;
  font-weight: lighter;
  text-align: center;
`;

const Text = styled.p`
  font-size: 12px;
  text-align: justify;
  max-width: 300px;
`;

const members = [
  {
    key: 'suzanne',
    name: 'Suzanne DuBose',
    title: 'Founder, Developer and Managing Partner',
    description:
      'Suzanne has been practicing law for 17 years specializing in construction, real estate and business litigation.  She has traveled all over the world to find the perfect location to develop land and build a retreat center. With her strong business and legal background in construction and real estate development, it was time to follow her passion and build her dream – a dream she could share with others – and that is Masakali.',
    path: '/Team/Suzanne_DcVVCDtJl.jpg',
  },
  // {
  //   key: 'doug',
  //   name: 'Douglas W. Turner',
  //   title: 'Co-Founder, Investor',
  //   description:
  //     'Doug is in public relations and represents numerous clients in real estate, energy, healthcare, education, finance as well non-profits and government organizations including NATO. He has extensive experience in marketing, business, real estate development and investment. He is a serial entrepreneur and the founder of various ventures including Agenda-Global, LLC, Rutherford Homes and Heritage Driven.',
  //   path: '/Team/Doug_QUFbLswfq.jpg',
  // },
  {
    key: 'kevin',
    name: 'Kevin Andrews',
    title: 'Co-Founder, Manager, Web Developer',
    description:
      'Doug is in public relations and represents numerous clients in real estate, energy, healthcare, education, finance as well non-profits and government organizations including NATO. He has extensive experience in marketing, business, real estate development and investment. He is a serial entrepreneur and the founder of various ventures including Agenda-Global, LLC, Rutherford Homes and Heritage Driven.',
    path: '/Team/kevin_P-pAeg65N.jpg',
  },
  {
    key: 'ira',
    name: 'Ira Septira',
    title: 'Property Manager',
    description:
      'With 10 years in 5-star hotels and the spa industry, Ira has extensive experience in meeting the needs of guests and managing staff. The exemplary service she brings to Masakali will undeniably make Masakali one of the leaders in standard of care here in Bali.',
    path: '/Team/Ira_KtSgjluqZ.jpg',
  },
  {
    key: 'wayan',
    name: 'Wayan Ardana',
    title: 'Project Manager',
    description:
      'With 20 plus years in construction and project management, Ardana ensures that every step taken during the construction process meets industry standard and ensures the safety and comfort of our guests.  ',
    path: '/Team/Ardana_062KrfpWN.jpg',
  },
  {
    key: 'gde',
    name: 'GDE',
    title: 'Architect',
    description:
      'Gde is a well-established and renowned architect here in Bali with 15 years experience.  His skill in creating unique and structurally sound designs is outstanding.',
    path: '/Team/Gde_7UeJ02vQL.jpg',
  },
  {
    key: 'gusti',
    name: 'Gusti Gunayusa',
    title: 'General Contractor',
    description:
      'With 20 years in construction, Gusti has extensive experience in constructing resorts and retreat centers here in Bali.  He is the general contractor for the famed Adiwana Dara Ayu here in Bali. The pool he constructed there has received accolades for being one of the most spectacular infinity pools in the world.',
    path: '/Team/Gusti_c9kPBUzqp.jpg',
  },
  {
    key: 'alexis',
    name: 'Alexis Coates',
    title: 'Marketing/Advertising/Graphic Designer',
    //description:
    //  'With 30 plus years in construction and project management, Ardana ensures that every step taken during the construction process meets industry standard and ensures the safety and comfort of our guests.',
    path: '/Team/Alexis_Jl4Daw7T3.jpg',
  },
  {
    key: 'raluca',
    name: 'Raluca',
    title: 'Social Media Manager',
    //description:
    //  'With 30 plus years in construction and project management, Ardana ensures that every step taken during the construction process meets industry standard and ensures the safety and comfort of our guests.',
    path: '/Team/raluca_wKkrgOAMK.jpg',
  },
  {
    key: 'shervin',
    name: 'Shervin',
    title: 'Sound Healing Therapist',
    //description:
    //  'With 30 plus years in construction and project management, Ardana ensures that every step taken during the construction process meets industry standard and ensures the safety and comfort of our guests.',
    path: '/Team/shervin_6ujLpoYFh.jpg',
  },
];

const Team = () => {
  return (
    <Container id='team'>
      <div className='header'>
        <p>MASAKALI</p>
        <h1>Team</h1>
        <div className='divider' />
      </div>
      <Box>
        {members.map((m) => (
          <Member key={m.key}>
            <ImageContext>
              <IKImage
                path={m.path}
                transformation={[
                  { height: '200px', width: '200px', dpr: 'auto' },
                ]}
                loading='lazy'
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center',
                  height: '200px',
                  width: '200px',
                  filter: 'grayscale(100%)',
                  borderRadius: '5px',
                }}
              />
            </ImageContext>
            <Name>{m.name}</Name>
            <Title>{m.title}</Title>
            {m.description ? <Text>{m.description}</Text> : null}
          </Member>
        ))}
      </Box>
    </Container>
  );
};

export default Team;
