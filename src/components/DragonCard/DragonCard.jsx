import { Link } from 'react-router-dom';

const DragonCard = () => {
  return (
    <>
      <h2 className="header">Here is Details</h2>
      <Link to="/dragons">Back to list</Link>
    </>
  );
};

export default DragonCard;
