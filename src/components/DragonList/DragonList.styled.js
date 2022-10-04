import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PageTitle = styled.h2`
  color: ${({ theme }) => theme.colors.secondaryFont};
  font-size: 20px;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const Item = styled.li``;

export const ImageWrapper = styled.div`
  position: relative;
  width: 200px;
  height: 200px;

  border-radius: 20px;
  overflow: hidden;

  box-shadow: ${({ theme }) => theme.shadows.item};

  :hover > img {
    opacity: 0.3;
  }
  :hover p {
    opacity: 1;
  }
  :hover a {
    opacity: 1;
  }
`;

export const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  transition: ${({ theme }) => theme.transition.transitionFunction};
`;

export const Overlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  align-items: center;
  /* width: 50%; */
  height: 50%;
`;

export const ItemName = styled.p`
  opacity: 0;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 400;
  font-size: 16px;
  transition: ${({ theme }) => theme.transition.transitionFunction};
`;

export const StyledLink = styled(Link)`
  opacity: 0;
  font-weight: 400;
  padding: 12px 16px;
  color: ${({ theme }) => theme.colors.primaryFont};
  border-radius: ${({ theme }) => theme.borders.buttonsBorderRadius};
  background-color: ${({ theme }) => theme.colors.transparentAccent};
  box-shadow: ${({ theme }) => theme.shadows.card};
  transition: ${({ theme }) => theme.transition.transitionFunction};

  :hover {
    /* color: ${({ theme }) => theme.colors.white}; */
    box-shadow: ${({ theme }) => theme.shadows.button};
    background-color: ${({ theme }) => theme.colors.accent};
  }
`;
