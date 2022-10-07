import { useParams } from 'react-router-dom';
import PulseLoader from 'react-spinners/PulseLoader';
import openNotification from 'utils/notification';

import { useGetDragonByIdQuery } from 'redux/dragons/dragonSlice';
import Carousel from 'components/Carousel';

import {
  CardWrapper,
  CardTitle,
  Picture,
  DescriptionWrapper,
  Description,
  WikiLink,
  ParametersList,
  ParametersItem,
  StyledLink,
} from './DragonCard.styled';

const DragonCard = () => {
  const { dragonId } = useParams();

  const {
    data: dragonDetails,
    isSuccess,
    isError,
    isLoading,
  } = useGetDragonByIdQuery(dragonId, {
    refetchOnFocus: true,
  });

  const images = dragonDetails?.flickr_images;

  return (
    <>
      {isError &&
        openNotification(
          'error',
          'Oops. Something went wrong. Please try again'
        )}

      {isLoading && <PulseLoader />}

      {isSuccess && (
        <CardWrapper>
          <Carousel>
            {images?.map(img => (
              <Picture key={img} src={img} alt="dragon illustration" />
            ))}
          </Carousel>
          <DescriptionWrapper>
            <CardTitle>{dragonDetails.name}</CardTitle>
            <br />
            <ParametersList>
              <ParametersItem>
                Height: {dragonDetails.height_w_trunk.meters}
              </ParametersItem>
              <ParametersItem>
                Dry mass: {dragonDetails.dry_mass_kg}
              </ParametersItem>
              <ParametersItem>
                Year of the first flight:{' '}
                {dragonDetails.first_flight.split('-')[0]}
              </ParametersItem>
            </ParametersList>
            <br />
            <WikiLink href={dragonDetails.wikipedia} target="_blank">
              Wiki about {dragonDetails.name} (more details on Wiki)
            </WikiLink>
          </DescriptionWrapper>
          <Description>{dragonDetails.description}</Description>
          <StyledLink to="/dragons">Back to list</StyledLink>
        </CardWrapper>
      )}
    </>
  );
};

export default DragonCard;
