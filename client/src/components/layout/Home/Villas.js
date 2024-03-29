import React, { useMemo } from 'react';
import ImageContext from '../../../utils/ImageContext';
import { IKImage } from 'imagekitio-react';
import useHover from '../../../utils/useHover';
import { useNavigate } from 'react-router-dom';

const Villas = () => {
  const [suryaRef, isSuryaHovered] = useHover();
  const [chandraRef, isChandraHovered] = useHover();
  const [jalaRef, isJalaHovered] = useHover();
  const [akashaRef, isAkashaHovered] = useHover();
  const navigate = useNavigate();

  const villaDetails = useMemo(
    () => [
      {
        name: 'surya',
        ref: suryaRef,
        path: '/Main/Surya/surya-front-main_yynphR5d1s.webp',
        isHovered: isSuryaHovered,
        details: `Our largest villa is a warm and elegant choice with ample space to rest and recharge. It has an ensuite breakfast table and features a hand-carved outdoor dining table that can seat larger groups on the private patio. Inside you’ll find a luxury king-sized mattress with high-quality bedding as well as a couch that can serve as an additional bed for an additional guest.`,
      },
      {
        name: 'chandra',
        ref: chandraRef,
        path: '/Main/Chandra/chandra-front-main_ohrGHDvTvf.webp',
        isHovered: isChandraHovered,
        details: `One of our more popular villas for romantic getaways and honeymooners offers an enchanting sentiment. In addition to the luxury outdoor shower, this villa features a spacious and comfortable bath. A favorite place to relax is the outdoor hammock that hangs over the rice fields, with a perfect view of the stars at night. This villa also offers a work area with a beautiful antique desk for those who need it.`,
      },
      {
        name: 'jala',
        ref: jalaRef,
        path: '/Main/Jala/jala-front-main_yJaEapAckn.webp',
        isHovered: isJalaHovered,
        details: `This traditional Joglo villa is the perfect fit for a cozy stay. With personal charm and attention to detail, this alluring villa has an irresistible appeal. Jala offers a workstation with a large desk, comfy outdoor lounging areas, and a full private ensuite bathroom. The luxury bedding and linens offer a comfortable and restful sleep while the beautiful, handcrafted furniture and amenities will leave you in awe of the craftsmanship and detail.`,
      },
      {
        name: 'akasha',
        ref: akashaRef,
        path: '/Main/Akasha/akasha-front_knBEIm9Huj.webp',
        isHovered: isAkashaHovered,
        details:
          'Luxury meets comfort in our newest villa, Akasha. With 3 bedrooms and 3.5 baths, this spacious home is great for families or couples traveling. This villa features a beautiful waterfall pool, large deck, full kitchen and bar, entertainment room, outdoor living room, large dining area, and breathtaking views. This space is also great for hosting celebrations such as weddings and birthday parties.',
      },
    ],
    [
      suryaRef,
      isSuryaHovered,
      chandraRef,
      isChandraHovered,
      jalaRef,
      isJalaHovered,
      akashaRef,
      isAkashaHovered,
    ]
  );

  return (
    <div
      id="villas"
      className="villas-container"
    >
      <h2>Villas</h2>
      <span className="villas-text">
        All the villas have their own private infinity pools overlooking the
        Balinese rice fields, fully equipped kitchenettes, luxurious outdoor
        showers, high-quality mattresses and bedding to make sure you have a
        restful sleep. On the patios you will find lounge chairs inviting you to
        sit back and relax outside as well as tables and chairs for eating a
        delicious meal on your deck or inside your villa. And some of the villas
        have bathtubs.
      </span>
      <span className="villas-images">
        {villaDetails.map((villa) => (
          <span
            className="villas-img"
            ref={villa.ref}
            key={villa.name}
          >
            <ImageContext>
              <IKImage
                path={villa.path}
                transformation={[
                  { height: '400px', width: '400px', dpr: 'auto' },
                ]}
                lqip={{ active: true }}
                loading="lazy"
              />
            </ImageContext>
            <span
              className={
                villa.isHovered ? 'hover-details active' : 'hover-details'
              }
            >
              <h2>{villa.name}</h2>
              <p>{villa.details}</p>
              <button
                className="button purple"
                id={`home_${villa.name}_view_details`}
                onClick={() => navigate(`/villas?villa=${villa.name}`)}
              >
                View Details
              </button>
            </span>
          </span>
        ))}
      </span>
    </div>
  );
};

export default Villas;
