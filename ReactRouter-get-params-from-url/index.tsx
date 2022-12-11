import { useParams } from "react-router-dom";

const User = () => {
  const { userId } = useParams();

  return <div>User Id: {userId}</div>;
};

export default User;
