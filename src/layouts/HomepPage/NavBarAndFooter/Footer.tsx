import { Link } from "react-router-dom";

export const Footer=()=>{
    return (
        <div className="main-color">
            <footer className="container d-flex flex-wrap justify-content-between align-items py-5 main-color">
             <p className="col-md-4 mb-0 text-white" > Exemple d'une application bebliotheque </p>
             <ul  className="nav navbar-dark col-md-4 justify-content-end">
                <li className="nav-item">
                    <Link to="/" className="nav-link px-2 text-white">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/search" className="nav-link px-2 text-white">Search books</Link>
                </li>
             </ul>
            </footer>

        </div>
    );
}