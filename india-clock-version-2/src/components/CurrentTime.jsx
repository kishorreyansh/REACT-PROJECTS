import { useEffect, useState } from "react";

function CurrentTime() {
  //let time = new Date();
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    console.log("Interval has been setup");
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalId);
      console.log("Cancelled the Interval");
    };
  }, []);
  return (
    <p className="lead">
      This is current Time: {time.toLocaleDateString()} -{" "}
      {time.toLocaleTimeString()}
    </p>
  );
}

export default CurrentTime;
