import { useRef, useEffect } from "react";

const App = () => {
  const btnRef = useRef();

  useEffect(() => {
    btnRef.current.focus();
  }, []);

  return <button ref={btnRef}>Button with forwarded ref</button>;
};

export default App;

