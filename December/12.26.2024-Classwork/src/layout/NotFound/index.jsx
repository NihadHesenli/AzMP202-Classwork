import { useNavigate } from "react-router-dom";


const Notfound = () => {
    const navigation = useNavigate()
  return (
    <div>
        <h1>Cant find the page you searched for</h1>
        <button onClick={()=>{navigation(-1)}}>Back</button>
      
    </div>
  );
}

export default Notfound;
