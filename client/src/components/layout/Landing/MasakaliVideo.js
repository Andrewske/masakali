import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import YoutubeEmbed from '../../../utils/YoutubeEmbed';

const MasakaliVideo = (props) => {
  const Container = styled.div`
    padding: 50px 0px 50px;
    display: flex;
  `;
  return (
    // <Container>
    //   <div className='header'>
    //     <p>MASAKALI</p>
    //     <h1>Video</h1>
    //     <div className='divider' />
    //   </div>
    //   <YoutubeEmbed
    //     embedId={'9EfalIZ2NuA'}
    //     title={'Masakali Tour Video'}
    //     preview={
    //       'https://ik.imagekit.io/4kpopox69zp/drone-default-masakali-video_ZmltYP6bJ.jpg'
    //     }
    //   />
    // </Container>
    <Container>
      <div className='header'>
        <p>MASAKALI</p>
        <h1>Video</h1>
        <div className='divider' />
      </div>
      <YoutubeEmbed
        embedId={'9EfalIZ2NuA'}
        title={'Masakali Tour Video'}
        preview={
          'https://ik.imagekit.io/4kpopox69zp/drone-default-masakali-video_ZmltYP6bJ.jpg'
        }
      />
    </Container>
  );
};

MasakaliVideo.propTypes = {};

export default MasakaliVideo;
