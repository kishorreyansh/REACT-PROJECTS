function CurrentTime() {
  let time = new Date();
  return (
    <p className="lead">
      This is current Time: {time.toLocaleDateString()} -{" "}
      {time.toLocaleTimeString()}
    </p>
  );
}

export default CurrentTime;
