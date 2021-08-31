import React, { useState } from 'react';
import { Link } from "react-router-dom";

export default function Gallery(props) {
    const [searchTerm, setSearchTerm] = React.useState("");
    const [searchResults, setSearchResults] = React.useState([]);

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    React.useEffect(() => {
        const results = props.places.filter(place =>
            place.name.toString().toLowerCase().includes(searchTerm)
        );
        setSearchResults(results);
    }, [searchTerm]);

    const POSTS = searchResults.map((place) => {
        return (
            <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 gallery-section">
                <div class="hovereffect">
                    <img height="97%" src={place.image} className="img-responsive w-100 shadow-1-strong rounded" />
                    <div class="overlay">
                        <h2>{place.name}</h2>
                        <Link className="info" to={{
                            pathname: `/post/${place.id}`,
                            state: { places: place }
                        }}>See Details</Link>
                    </div>
                </div>
            </div >
        );
    });

    return (
        <div class="mx-5">
            <div className="col-md-4 my-2">
                <input className="form-control" type="text" placeholder="Search for places" value={searchTerm} onChange={handleChange} />
            </div>
            <div className="row">{POSTS}</div>
        </div>
    );
}
