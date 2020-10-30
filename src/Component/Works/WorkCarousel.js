import React from 'react';
import Carousel from 'react-elastic-carousel';
import styled from 'styled-components'
import slider1 from  '../../images/slider (1).png';
import slider2 from  '../../images/slider (2).png';
import slider3 from  '../../images/slider (3).png';
import slider4 from  '../../images/slider (4).png';
import slider5 from  '../../images/slider (5).png';
import slider6 from  '../../images/slider (6).png';
import slider7 from  '../../images/slider (7).png';

const WorkCarousel = () => {
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2 },
        { width: 1200, itemsToShow: 3 },
      
      ];
    return (
        <Carousel breakPoints={breakPoints}>
               <img src={slider1} alt="" style={{width: '90%',backgroundPosition:'center center', height: '430px', borderRadius:'10px', marginRight: '15px'}}  />
               <img src={slider2} alt="" style={{width: '90%',backgroundPosition:'center center', height: '430px', borderRadius:'10px', marginRight: '15px'}}  />
               <img src={slider3} alt="" style={{width: '90%',backgroundPosition:'center center', height: '430px', borderRadius:'10px', marginRight: '15px'}}  />
               <img src={slider4} alt="" style={{width: '90%',backgroundPosition:'center center', height: '430px', borderRadius:'10px', marginRight: '15px'}}  />
               <img src={slider5} alt="" style={{width: '90%',backgroundPosition:'center center', height: '430px', borderRadius:'10px', marginRight: '15px'}}  />
               <img src={slider6} alt="" style={{width: '90%',backgroundPosition:'center center', height: '430px', borderRadius:'10px', marginRight: '15px'}}  />
               <img src={slider7} alt="" style={{width: '90%',backgroundPosition:'center center', height: '430px', borderRadius:'10px', marginRight: '15px'}}  />
            </Carousel>
    );
};

export default WorkCarousel;