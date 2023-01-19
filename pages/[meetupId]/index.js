// Allow return of multiple elements from a React component by allowing you to group a list of children without adding extra nodes to the DOM
import { Fragment } from "react";

export default function MeetupDetails(){
    return (
        <Fragment>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg" alt="This is a first meetup!"/>
            <h1>A First Meetup</h1>
            <address>Some Street 5, Some City</address>
            <p>The meetup description</p>
        </Fragment>
    )
}