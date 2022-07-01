import { useState } from "react";

const App = () => {
  // useState can only be used in the top-level, ie can not be nested
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