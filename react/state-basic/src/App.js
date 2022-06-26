import { useState } from 'react';


function App() {

  const [inputValue, updateInputValue] = useState('');

  return (
    <>
    <div className>My name is {inputValue}</div>
    <form>
      <input value={inputValue} onChange={e => updateInputValue(e.target.value)} />
    </form>
    </>
  );
}

export default App;
