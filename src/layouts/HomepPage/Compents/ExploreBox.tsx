import { Link } from "react-router-dom";

export const ExploreBox =()=>{
   return (
    <div className="p-5 mb-4 bg-dark header
      text-white d-flex justify-content-center align-items-center ">
        <div>
            <h1 className="display-5 fw-bold" > Find your next adventure</h1>
            <p className="col-md-8 fs-4" >vous vouler passer au next</p>
            <Link to="/search" type="button" className="btn main-color btn-lg text-white"> Explore top books</Link>
        </div>
         </div>
   ); 
}