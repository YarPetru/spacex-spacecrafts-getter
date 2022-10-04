import { useGetAllDragonsQuery } from 'redux/dragons/dragonSlice';

import {
  PageTitle,
  List,
  Item,
  ImageWrapper,
  Image,
  Overlay,
  ItemName,
  StyledLink,
} from './DragonList.styled';

const DragonList = () => {
  const { data: dragons } = useGetAllDragonsQuery({ refetchOnFocus: true });

  return (
    <>
      <PageTitle>Here is a DragonList</PageTitle>
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
                width="200"
                height="300"
              />
              <Overlay>
                <ItemName>{item.name}</ItemName>
                <StyledLink to={`/dragons/${item.id}`}>Details</StyledLink>
              </Overlay>
            </ImageWrapper>
          </Item>
        ))}
      </List>
    </>
  );
};

export default DragonList;
