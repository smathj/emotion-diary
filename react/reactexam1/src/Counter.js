import React, { useState } from "react";

// re render 한다 ( 재호출로 계속 그부분 다시그림 )
const Counter = () => {
  /* **[ count 상태 ] ** */
  // 0 에서 출발
  // 1씩 증가
  // 1씩 감소

  // useState라는 함수로 이 컴포넌트가 가질 값을 설정한다
  // 화면을 그리고나서도 살아있음 마치 클로저 처럼
  const [count, setCount] = useState(0);

  const onIncrease = () => setCount(count + 1);
  const onDecrease = () => setCount(count - 1);

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
    </div>
  );
};

export default Counter;
