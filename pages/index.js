import MeetupList from "../components/meetups/MeetupLists";

const DUMMY_DATA = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Some address 5, 12345 Some City',
    description: 'This is a first meetup!'
  },
  {
    id: 'm2',
    title: 'A Second Meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Some address 10, 12345 Some City',
    description: 'This is a second meetup!'
  }
];


export default function HomePage(props){
  return (
    <div>
        <MeetupList meetups={props.meetups}/>
    </div>
  )
}

// How to move data fetching away from client to the server-side
// must be named getStaticProps
export async function getStaticProps(){
  // fetch data from an API
  return {
    props: {
      meetups: DUMMY_DATA
    },
    // if data changes frequently
    // revalidate takes a number (seconds) that Nextjs will wait until it  regenerates the page for an incoming request
    // Every 10 seconds if there are requests coming in for this page, these regenerated pages would replace the old pre-generated pages
    // Make sure data is never older than 10 seconds
    revalidate: 10
  }
}

//----OR-----
// User has access to fresh data every single time the page is updated
// Good for apps which the data changes really fast

// export async function getServerSideProps(context){
//   const req = context.req;
//   const res = context.res;
//   //fetch data from an API
//   return {
//     props: {
//       meetups: DUMMY_DATA
//     }
//   }
// }