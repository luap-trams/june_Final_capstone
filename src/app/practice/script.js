import React , { useState } from "react";
import React, { useState } from 'react';

function CounterApp() {
    // Step 1: Create the box (state)
    const [count, setCount] = useState(0);
  
    // Step 2: Function to update the value in the box
    const increaseCount = () => {
      setCount(count + 1); // Add 1 to the current number
    };
  
    // Step 3: Use it in your app
    return (
      <div>
        <h1>Count: {count}</h1> {/* Show the current number */}
        <button onClick={increaseCount}>Increase</button> {/* Change the number */}
      </div>
    );
  }
  
  export default CounterApp;