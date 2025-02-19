import { useSelector } from "react-redux";

const DisplayCounter = () => {
  /*const counterObj = useSelector((store) => store.counter);
  const counter = counterObj.counterVal;*/
  //above  is same as below line
  const { counterVal } = useSelector((store) => store.counter);
  return <p className="lead mb-4">Counter Current Value: {counterVal}</p>;
};
export default DisplayCounter;
