import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import { useGetDragonByIdQuery } from 'redux/dragons/dragonSlice';
import {
  CardWrapper,
  CardTitle,
  Picture,
  DescriptionWrapper,
  Description,
  WikiLink,
  ParametersList,
  ParametersItem,
} from './DragonCard.styled';

const DragonCard = () => {
  const { dragonId } = useParams();

  const { data: dragonDetails } = useGetDragonByIdQuery(dragonId);
  console.log(dragonDetails);
  return (
    <>
      {dragonDetails && (
        <CardWrapper>
          <Picture
            src={dragonDetails.flickr_images[0]}
            alt="dragon illustration"
          />
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
        </CardWrapper>
      )}
      <Link to="/dragons">Back to list</Link>
    </>
  );
};

export default DragonCard;
