import './grid(niad).css'
import './cards.css'

const Cards = ({recipes,setRecipes}) => {
  console.log(recipes);
  
  
  return (
    <>
    <div className="container">
        <div className="row">
          {recipes.length && recipes.map((r)=>{
            return(
            <div className="col-3 col-md-6 col-sm-12" key={r.id}>
              <img src={r.image} alt="" />
              <h1>{r.name}</h1>
            </div>
            )
          })}
        </div>
    </div>
    </>
  )
}

export default Cards