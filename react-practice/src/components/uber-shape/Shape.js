import { useEffect, useState, useRef } from "react";

function Shape (props) {
  const { data } = props;

  const [order, setOrder] = useState([]);
  const [clickableItemsCount, setClickableItemsCount] = useState(0);
  const [isIntervalRunning, setIsIntervalRunning] = useState(false);

  const intervalRef = useRef(null);

  useEffect(() => {
    let count = 0;
    for (let i=0; i<data.length; i++) {
      for (let j=0; j<data[i].length; j++) {
        if (data[i][j] === 1) {
          count += 1;
        }
      }
    }
    setClickableItemsCount(count);
  }, [data]);

  useEffect(() => {
    if (order.length === clickableItemsCount && !isIntervalRunning) {
      intervalRef.current = setInterval(() => {
        setOrder((prev) => prev.slice(1));
      }, 500);
      setIsIntervalRunning(true);
    }
    return () => {
      if (intervalRef.current && order.length === 0) {
        console.log('cleared interval');
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        setIsIntervalRunning(false);
      }
    }
  }, [order]);

  const handleBoxClick = (e, coords) => {
    setOrder(prev => [...prev, coords]);
  };

  const renderBoxes = () => {
    const boxes = [];
    for (let i=0; i<data.length; i++) {
      for (let j=0; j<data[i].length; j++) {
        const isEmpty = data[i][j] === 0 ? true : false;
        const isClicked = order.find((o) => o[0] === i && o[1] === j);
        boxes.push(
          <div
            key={`${i}${j}`}
            onClick={isEmpty || isIntervalRunning ? null : (e) => handleBoxClick(e, [i, j])}
            style={{
              width: '50px',
              height: '50px',
              border: isEmpty ? '' : '1px solid black',
              background: isClicked ? 'green' : 'white',
            }}
          />
        );
      }
    }
    return boxes;
  }

  return (
    <div style={{ display: 'flex', width: '180px', margin: '4rem', gap: '10px', flexWrap: 'wrap' }}>
      {renderBoxes()}
    </div>
  )
}

export default Shape;