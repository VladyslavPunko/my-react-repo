// const TestButton = () => {
//   const handleClick = (evt) => {
//     console.log(evt);
//   };

//   const x = 0;
//   console.log(x);

//   return (
//     <>
//       <button onClick={handleClick}>First button</button>
//       <button onClick={(evt) => console.log(evt)}>Second button</button>
//     </>
//   );
// };

import { useState, useEffect } from "react";

const TestButton = () => {
  const [clicks, setClicks] = useState(() => {
    // Зчитуємо значення за ключем
    const savedClicks = window.localStorage.getItem("saved-clicks");

    // Якщо там щось є, повертаємо це
    // значення як початкове значення стану
    if (savedClicks !== null) {
      return savedClicks;
    }
  });

  useEffect(() => {
    window.localStorage.setItem("saved-clicks", clicks);
  }, [clicks]);

  return (
    <div>
      <button onClick={() => setClicks(clicks + 1)}>
        You clicked {clicks} times
      </button>
      <button onClick={() => setClicks(0)}>Reset</button>
    </div>
  );
};

export default TestButton;
