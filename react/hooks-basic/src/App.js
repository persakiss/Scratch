import { useState } from "react";

const App = () => {
  const [myCounter, setMyCounter] = useState(0);
  // The above is an array destructure.
  // Below shows naming convention
  // const [name, setName] = useState('Irene');

  return (
    // Onclick, the function to perform
    <div onClick={() => setMyCounter(myCounter+1)}>
      Count: {myCounter}
    </div>
  )
}

export default App;