import React from "react"
import locationLogo from "../location-svgrepo-com.svg"

function Travel(props){
    return(
        <div className="travel">
            <img
            src={props.imageUrl}
            alt="picture"
            className="travel--image"/>

            <div className="travel--details">
                <div className="travel--location">
                    <img
                    src={locationLogo}
                    alt="location logo"
                    className="travel--location-image"/>

                    <p className="travel--location-country">{props.location}</p>

                    <a href={props.googleMapsUrl} className="travel--location-maps">View on Google Maps</a>
                </div>
                <h2>{props.title}</h2>
                <p className="travel--date">{props.startDate} - {props.endDate}</p>
                <p className="travel--description">{props.description}</p>
            </div>
        </div>
    );
}

export default Travel;