// hook that allows to directly create a reference to the DOM element in the functional component
// can be used to store a mutable value that does not cause a re-render when updated
import { useRef } from "react";

import Card from "../ui/Card";
import styles from "./NewMeetupForm.module.css";

export default function NewMeetupForm(props){
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

    function handleSubmit(e){
        e.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        const meetupData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription,
        };

        props.onAddMeetup(meetupData);
    }

    return (
        <Card>
            <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.control}>
                <label htmlFor='title'>Meetup Title</label>
                <input 
                    type='text' 
                    required id='title' 
                    ref={titleInputRef} 
                />
            </div>
            <div className={styles.control}>
                <label htmlFor='image'>Meetup Image</label>
                <input 
                    type='url' 
                    required id='image' 
                    ref={imageInputRef} 
                />
            </div>
            <div className={styles.control}>
                <label htmlFor='address'>Address</label>
                <input 
                    type='text' 
                    required id='address' 
                    ref={addressInputRef} 
                />
            </div>
            <div className={styles.control}>
                <label htmlFor='description'>Description</label>
                <textarea
                    id='description'
                    required rows='5'
                    ref={descriptionInputRef}
                >
                </textarea>
            </div>
            <div className={styles.actions}>
                <button>Add Meetup</button>
            </div>
            </form>
        </Card>
    );
}