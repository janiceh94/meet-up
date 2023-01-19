// domain.com/new-meetup
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

export default function NewMeetupPage(){

    function handleMeetup(enteredMeetupData){
        console.log(enteredMeetupData);
    }

    return (
        <NewMeetupForm onAddMeetup={handleMeetup}/>
    )
}