import { useState } from "react";
import "./index.css";

const AppItem = (props) => {
  const [item, setItem] = useState(0);
  const { appItem, addTotalAmount,subTotalAmount } = props;
  const { name, imageUrl, rupees } = appItem;

  const amountAdded = (a) => {
    addTotalAmount(a);
  };

  const amountSubract = (a) => {
    subTotalAmount(a);
  };

  const add = (a) => {
    setItem(item + 1);
    addTotalAmount(a);
  };
  return (
    <li className="app-card">
      <div className="image-name-container">
        <img className="app-logo" alt={name} src={imageUrl} />
        <h1>{name}</h1>
      </div>
      <div className="name-rupees">
        <p>{rupees}</p>
      </div>
      <div>
        {item !== 0 ? (
          <>
            <button
              onClick={() => {
                
                item === 0 ? setItem(0) : setItem(item - 1);
                amountSubract(rupees);
              }}
            >
              -
            </button>
            <p>{item}</p>
            <button
              onClick={() => {
                setItem(item + 1);
                amountAdded(rupees);
              }}
            >
              +
            </button>
          </>
        ) : (
          <button onClick={()=>{add(rupees)}}>Add</button>
        )}
      </div>
    </li>
  );
};

export default AppItem;
