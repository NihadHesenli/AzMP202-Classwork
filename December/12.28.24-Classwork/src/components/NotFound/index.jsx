
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigation = useNavigate()
  return (
    <div>
      <h1>The Page You Search for doesnt exist</h1>
      <button onClick={()=>{navigation(-1)}}>Go Back</button>
    </div>
  );
}

export default NotFound;
