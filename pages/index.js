import React from "react";

const MinusButton = (props) => {
  return <button onClick={props.onClick}>-</button>;
};

const PlusButton = (props) => {
  return <button onClick={props.onClick}>+</button>;
};

const Viewer = (props) => {
  debugger;
  return <span>{props.children}</span>;
};

const Counter = () => {
  const [value, setState] = React.useState(0);
  const minus = () => setState(value - 1);
  const plus = () => setState(value + 1);

  return (
    <>
      <MinusButton onClick={minus} />
      <Viewer>{value}</Viewer>
      <PlusButton onClick={plus} />
    </>
  );
};

const Home = () => {
  return <Counter />;
};

export default Home;
