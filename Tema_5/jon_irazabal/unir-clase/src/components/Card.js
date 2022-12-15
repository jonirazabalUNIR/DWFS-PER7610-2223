import "./../styles/Card.css";
import zalando from "./zalando.png";

export const Card = () => {
    return (
        <div className="row vh-80">
            <div className="col-lg-4 justify-content-center mx-auto vh-80 p-3">
                <div className=" row rounded border border-light bg-light  vh-80 p-1">
                    <div className="col-lg-12 text-center">
                        <img src={zalando} className="card-image" alt="logo" />
                    </div>
                    <div className="col-lg-2">
                        <span class="badge text-dark rounded border">Primavera</span>
                    </div>
                    <div className="col-lg-2">
                        <span class="badge text-dark rounded border">Verano</span>
                    </div>
                    <br></br>                    
                </div>
                <div><h2>Rebajas de invierno</h2>
                    <p>Hasta -50% en Designer</p>
                    <button className="card-button btn-dark">Descubrir</button>
                </div>
            </div>
        </div>
    );
}

export default Card;