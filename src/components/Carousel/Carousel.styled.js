import styled from 'styled-components';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

import { CAROUSEL_WINDOW_WIDTH } from 'constants';

export const CarouselWrapper = styled.div`
  position: relative;
  width: ${CAROUSEL_WINDOW_WIDTH}px;
  height: 200px;
`;

export const CarouselWindow = styled.div`
  width: 100%;
  height: 100%;
  border-radius: ${({ theme }) => theme.borders.secondaryBorderRadius};
  overflow: hidden;
`;

export const CarouselContainer = styled.div`
  display: flex;
  height: 100%;
  transform: translateX(${props => props.offset}px);
  transition: ${({ theme }) => theme.transition.transitionFunction};
`;

export const ArrowWrapper = styled.div`
  position: absolute;
  ${props => (props.left ? 'left: 2%' : 'right: 2%')};
  top: 50%;
  transform: translateY(-50%);
  z-index: 999;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 36px;
  height: 36px;
  border-radius: ${({ theme }) => theme.borders.roundBorderRadius};
  background-color: ${({ theme }) => theme.colors.transparentAccent};
  cursor: pointer;
  :hover > svg {
    scale: 1.3;
  }
`;

export const LeftArrow = styled(BsChevronCompactLeft)`
  /* position: absolute;
  left: 3%;
  top: 50%;
  z-index: 999;
  transform: translateY(-50%); */
  color: ${({ theme }) => theme.colors.white};

  transition: ${({ theme }) => theme.transition.transitionFunction};
  /* :hover {
    color: orange;
  } */
`;

export const RightArrow = styled(BsChevronCompactRight)`
  /* position: absolute;
  right: 3%;
  top: 50%;
  z-index: 999;
  transform: translateY(-50%); */
  color: ${({ theme }) => theme.colors.white};
  transition: ${({ theme }) => theme.transition.transitionFunction};
  /* :hover {
    color: orange;
  } */
`;
