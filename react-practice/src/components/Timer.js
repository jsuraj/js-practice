import { useState, useEffect } from "react";

function App() {
  const [seconds, setSeconds] = useState(0);
  const [watchStatus, setWatchStatus] = useState(false);

  useEffect(() => {
    let watchInterval;
    if (watchStatus) {
      console.log("Interval Set");
      watchInterval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1 * 1000);
    }
    return () =>  {
      console.log("Interval cleared");
      clearInterval(watchInterval);
    }
  }, [watchStatus]);

  const getTimeSting = () => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secondsCount = Math.floor(seconds % 60)
    return `${hours.toString().padStart(2, '0')} : ${minutes.toString().padStart(2, '0')} : ${secondsCount.toString().padStart(2, '0')}`;
  }

  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "2rem" }}>
      <div style={{ marginRight: "2rem" }}>{getTimeSting()}</div>
      <button style={{ marginRight: "1rem" }} onClick={() => setWatchStatus((prev) => !prev)}>Start / Stop</button>
      <button onClick={() => setSeconds(0)}>Reset</button>
    </div>
  );
}

export default App;
