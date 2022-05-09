// import "./App.css";
import MyHeader from "./MyHeader";
import MyFooter from "./MyFooter";
import Counter from "./Counter";

function App() {
  let name = "홍길동";

  //   최상위 부모 엘리먼트 쓰기싫을때
  // <React.Fragment></React.Fragment> 로 감싼다 (import 필요)
  // 또는 <> </> 으로 감싼다 ( import 불필요 )

  // style={style.App}
  const style = {
    App: {
      background: "black",
    },
    h2: {
      color: "red",
    },
    bold_text: {
      color: "green",
    },
  };

  /**
   * JSX에서는 class 라는 키워드를 자바스크립트가 사용하므로
   * JSX는 className 이라는 키워드를 사용한다
   * id는 그대로 쓸수 있다
   */

  return (
    <div>
      <MyHeader />
      <Counter />
      <MyFooter />
    </div>
  );
}

export default App;
