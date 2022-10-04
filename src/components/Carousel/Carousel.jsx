import PropTypes from 'prop-types';
import { useState } from 'react';

import { CAROUSEL_WINDOW_WIDTH } from 'constants';

import {
  CarouselWrapper,
  CarouselWindow,
  CarouselContainer,
  ArrowWrapper,
  LeftArrow,
  RightArrow,
} from './Carousel.styled';

const Carousel = ({ children }) => {
  const [offset, setOffset] = useState(0);
  const maxOffset = -(CAROUSEL_WINDOW_WIDTH * (children.length - 1));

  const handleLeftArrowClick = () => {
    setOffset(currentOffset => {
      const newOffset = currentOffset + CAROUSEL_WINDOW_WIDTH;

      return Math.min(newOffset, 0);
    });
  };
  const handleRightArrowClick = () => {
    setOffset(currentOffset => {
      const newOffset = currentOffset - CAROUSEL_WINDOW_WIDTH;

      return Math.max(newOffset, maxOffset);
    });
  };

  return (
    <CarouselWrapper>
      {!(offset === 0) && (
        <ArrowWrapper left onClick={handleLeftArrowClick}>
          <LeftArrow size="24" />
        </ArrowWrapper>
      )}

      <CarouselWindow>
        <CarouselContainer offset={offset}>{children}</CarouselContainer>
      </CarouselWindow>
      {!(offset === maxOffset) && (
        <ArrowWrapper right onClick={handleRightArrowClick}>
          <RightArrow size="24" />
        </ArrowWrapper>
      )}
    </CarouselWrapper>
  );
};

Carousel.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Carousel;
