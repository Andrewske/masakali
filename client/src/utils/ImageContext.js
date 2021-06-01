import React from 'react';
import { IKContext } from 'imagekitio-react';

const ImageContext = (props) => {
  return (
    <IKContext
      publicKey='public_kcoa0jjJdnt4VHmcVkgq5RaUDR0='
      urlEndpoint='https://ik.imagekit.io/4kpopox69zp'
      transformationPosition='path'
    >
      {props.children}
    </IKContext>
  );
};

ImageContext.propTypes = {};

export default ImageContext;
