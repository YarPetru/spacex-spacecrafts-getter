import { useGetAllDragonsQuery } from 'redux/dragons/dragonSlice';
import PulseLoader from 'react-spinners/PulseLoader';
import openNotification from 'utils/notification';

import {
  PageTitle,
  DescriptionParagraph,
  List,
  Item,
  ImageWrapper,
  Image,
  Overlay,
  ItemName,
  StyledLink,
} from './DragonList.styled';

const DragonList = () => {
  const {
    data: dragons,
    isError,
    isLoading,
    isSuccess,
  } = useGetAllDragonsQuery({ refetchOnFocus: true });

  return (
    <>
      {isError &&
        openNotification(
          'error',
          'Oops. Something went wrong. Please try again'
        )}

      {isLoading && <PulseLoader />}

      <PageTitle>Here are all the current Dragons</PageTitle>
      <DescriptionParagraph>
        Tap "Details" button on one of them to get more information 👆
      </DescriptionParagraph>

      {isSuccess && (
        <List>
          {dragons?.map(item => (
            <Item key={item.id}>
              <ImageWrapper>
                <Image
                  src={
                    item.flickr_images[
                      Math.floor(Math.random() * item.flickr_images.length)
                    ]
                  }
                  alt={item.name}
                />
                <Overlay>
                  <ItemName>{item.name}</ItemName>
                  <StyledLink to={`/dragons/${item.id}`}>Details</StyledLink>
                </Overlay>
              </ImageWrapper>
            </Item>
          ))}
        </List>
      )}
    </>
  );
};

export default DragonList;
