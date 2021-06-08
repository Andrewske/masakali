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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 15px;
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
`;

const members = [
  {
    key: 'suzanne',
    name: 'Suzanne DuBose',
    title: 'Founder, Developer and Managing Partner',
    description:
      'Suzanne is a practicing lawyer specializing in construction and business litigation, real estate and contract disputes.  She is and always has been passionate about traveling the world, learning about different countries and cultures and real estate development and design.  It was only in the last seven years that she found her love for yoga, meditation, breathwork and began to follow her own spiritual path and understand what life could really be like if one found peace and balance in their lives. After traveling to 123 countries, she became certain that Bali was the place to create the space for others to learn these same things.  With her strong business and legal background in construction and real estate development, it was time to follow her passion and build her dream – a dream she could share with others – and that is Masakali.',
    path: '/suzanne-team_13bjn71z3.jpg',
  },
  {
    key: 'doug',
    name: 'Douglas W. Turner',
    title: 'Co-Founder, Investor',
    description:
      'Doug is in public relations.  He represents NATO and other government organizations and works in additional industries including, without limitation, real estate, non-profits, energy, healthcare, technology, education and finance. He has extensive experience in marketing, business, real estate development and investment. He is a serial entrepreneur and the founder of various ventures including Agenda-Global, Rutherford Homes and Heritage Driven.',
    path: '/suzanne-team_13bjn71z3.jpg',
  },
  {
    key: 'kevin',
    name: 'Kevin Andrews',
    title: 'Co-Founder, Manager, Web Developer',
    description:
      'Doug is in public relations.  He represents NATO and other government organizations and works in additional industries including, without limitation, real estate, non-profits, energy, healthcare, technology, education and finance. He has extensive experience in marketing, business, real estate development and investment. He is a serial entrepreneur and the founder of various ventures including Agenda-Global, Rutherford Homes and Heritage Driven.',
    path: '/suzanne-team_13bjn71z3.jpg',
  },
  {
    key: 'ira',
    name: 'Ira Septira',
    title: 'Property Manager',
    description:
      'With 5 plus years in 5-star hotels and the spa industry, Ira has extensive experience in meeting the needs of guests both Indonesian and foreigner alike. The exemplary service she brings to Masakali will undeniably make Masakali one of the leaders in standard of care here in Bali.',
    path: '/suzanne-team_13bjn71z3.jpg',
  },
  {
    key: 'wayan',
    name: 'Wayan Ardana',
    title: 'Project Manager',
    description:
      'With 30 plus years in construction and project management, Ardana ensures that every step taken during the construction process meets industry standard and ensures the safety and comfort of our guests.',
    path: '/suzanne-team_13bjn71z3.jpg',
  },
  {
    key: 'gusti',
    name: 'Gusti Gunayusa',
    title: 'General Contractor/Architect',
    description:
      'With 30 plus years in construction, Gusti has extensive experience in constructing resorts and retreat centers here in Bali.  He is the general contractor for the famed Adiwana Dara Ayu here in Bali. The pool he constructed there has received accolades for being one of the most spectacular infinity pools in the world. ',
    path: '/suzanne-team_13bjn71z3.jpg',
  },
  {
    key: 'alexis',
    name: 'Alexis Coates',
    title: 'Marketing/Advertising/Graphic Designer',
    description:
      'With 30 plus years in construction and project management, Ardana ensures that every step taken during the construction process meets industry standard and ensures the safety and comfort of our guests.',
    path: '/suzanne-team_13bjn71z3.jpg',
  },
  {
    key: 'raluca',
    name: 'Raluca',
    title: 'Social Media Manager',
    description:
      'With 30 plus years in construction and project management, Ardana ensures that every step taken during the construction process meets industry standard and ensures the safety and comfort of our guests.',
    path: '/suzanne-team_13bjn71z3.jpg',
  },
];

const Team = () => {
  return (
    <Container>
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
                transformation={[{ width: 'auto', dpr: 'auto' }]}
                loading='lazy'
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center',
                  height: '150px',
                  width: '150px',
                  filter: 'grayscale(100%)',
                  borderRadius: '5px',
                }}
              />
            </ImageContext>
            <Name>{m.name}</Name>
            <Title>{m.title}</Title>
            <Text>{m.description}</Text>
          </Member>
        ))}
      </Box>
    </Container>
  );
};

export default Team;
