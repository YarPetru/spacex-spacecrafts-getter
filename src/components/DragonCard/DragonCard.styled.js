import styled from 'styled-components';
import theme from 'styles/theme';

export const CardWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;

  border-radius: 20px;
  padding: 20px;
  background-color: ${theme.colors.mainBackground};

  box-shadow: ${theme.shadows.card};

  /* min-width: 300px; */
  max-width: 720px;
  /* height: 400px; */
`;

export const CardTitle = styled.h2`
  text-decoration: underline;
  font-size: 20px;
  color: ${theme.colors.primaryFont};
`;

export const Picture = styled.img`
  width: 300px;
  height: 200px;
  object-fit: cover;
  border-radius: ${theme.borders.secondaryBorderRadius};
`;

export const DescriptionWrapper = styled.div`
  width: 300px;
`;

export const Description = styled.p``;

export const WikiLink = styled.a``;

export const ParametersList = styled.ul``;

export const ParametersItem = styled.li``;
