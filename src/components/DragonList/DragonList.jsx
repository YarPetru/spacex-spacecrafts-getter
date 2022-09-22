import { Link } from 'react-router-dom';

const DragonList = () => {
  return (
    <>
      <h2 className="header">Here is a DragonList</h2>
      <Link to="/dragons/12345">Go to Details</Link>
    </>
  );
};

export default DragonList;
