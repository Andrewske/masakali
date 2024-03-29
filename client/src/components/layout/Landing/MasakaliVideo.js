import React from 'react';
import styled from 'styled-components';

import YoutubeEmbed from '../../../utils/YoutubeEmbed';

const Container = styled.div`
  padding: 50px 0px 50px;
  display: flex;
`;
const MasakaliVideo = (props) => {
  return (
    <Container>
      <div className='header'>
        <p>MASAKALI</p>
        <h1>Video</h1>
        <div className='divider' />
      </div>
      <YoutubeEmbed
        embedId={'in8GqtSGIJ0'}
        title={'Masakali Tour Video'}
        preview={
          'https://ik.imagekit.io/4kpopox69zp/masakali-tour-video-thumbnail_UOIa12ChI.png'
        }
      />
    </Container>
  );
};

export default MasakaliVideo;
