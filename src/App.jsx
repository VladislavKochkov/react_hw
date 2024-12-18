import React from 'react';
function App() {
    return <h1>Hello, Vova!</h1>;
}
export default App;


//----------------Props


/*import React from 'react';
import Greeting from './Greeting.jsx';

function App() {
    return <Greeting name="Vladyslav" />;
}

export default App;*/



//---------------useState


/*import React, { useState } from 'react';
import Greeting from './Greeting';

function App() {
  const [name, setName] = useState('Vladyslav');

  return (
    <div>
      <Greeting name={name} />
      <button onClick={() => setName('Vova')}>Change Name</button>
    </div>
  );
}

export default App;*/


//--------------List rendering


/*import React from 'react';

function App() {
    const items = ['Apple', 'Banana', 'Orange'];

    return (
        <ul>
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
}

export default App;*/
