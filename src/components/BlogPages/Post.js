import { Link, useLocation } from "react-router-dom";

export default function Post() {
    const { state } = useLocation();
    return (
        <div className="card mx-4 my-4">
            <div className="post col-auto mx-4 my-4">
                <div class="col-md-5 post-img">
                    <img src={state.places.image} class="img-fluid" alt={state.places.name} />
                </div>
                <span>
                    <h4 className="card-title">{state.places.name}</h4>
                    <p className="card-text">{state.places.description}</p>
                </span>
            </div>
        </div>
    );
}