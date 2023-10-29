
import './App.css'
import { Card } from "./components/card";

function App() {

  return (
      <div className='App'>
        <Card imgSrc="https://picsum.photos/300/200" 
        imgAlt="Card Image" title="Project 1" 
        description="Our house is always open. We have the fold out bed in the living room and we could put an inflatable mattress in maxs room if necessary." 
        buttonText="Learn More"
        link="cardPage"
        />

<Card imgSrc="https://picsum.photos/300/199" 
        imgAlt="Card Image" title="Project 2" 
        description="Flying to Portland isn’t that expensive though, so we could go up there if it would be more convenient for everyone." 
        buttonText="Learn More"
        link="cardPage"
        />

<Card imgSrc="https://picsum.photos/300/201" 
        imgAlt="Card Image" title="Project 3" 
        description="Long sentences to fill in the space. Blah blah blah. Cheeseburger Supreme." 
        buttonText="Learn More"
        link="cardPage"
        />

      </div>
  )
}

export default App
