// Allow return of multiple elements from a React component by allowing you to group a list of children without adding extra nodes to the DOM
import { Fragment } from "react";
import styles from "./MeetupDetail.modules.css";

export default function MeetupDetail(props){
    return (
        <Fragment>
            <img 
                src={props.image}
                alt={props.title}
            />
            <h1>{props.title}</h1>
            <address>{props.address}</address>
            <p>{props.description}</p>
        </Fragment>
    )
}