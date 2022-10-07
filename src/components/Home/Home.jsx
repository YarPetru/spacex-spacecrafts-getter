import { useSelector } from 'react-redux';
import { getIsLoggedIn, getUserName } from 'redux/auth';

import {
  StyledLink,
  GreetingWrapper,
  Title,
  InfoParagraph,
  AuthButtonsWrapper,
  AuthButton,
} from './Home.styled';

const Home = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const currentUserName = useSelector(getUserName);

  return (
    <>
      <GreetingWrapper>
        <Title>
          Greetings{isLoggedIn && `, ${currentUserName}`}! Wellcome to Dragons
          Searcher App
        </Title>
        <InfoParagraph>
          Here you can get information about dragons by Space X
        </InfoParagraph>

        {!isLoggedIn && (
          <>
            <InfoParagraph isNearAuthLinks>
              To stay in touch and get more opportunities
            </InfoParagraph>
            <AuthButtonsWrapper>
              <AuthButton to="signup">Register</AuthButton>
              <AuthButton to="login">Login</AuthButton>
            </AuthButtonsWrapper>
          </>
        )}
        {isLoggedIn && <StyledLink to="/dragons">Go to DragonList</StyledLink>}
      </GreetingWrapper>
    </>
  );
};

export default Home;
