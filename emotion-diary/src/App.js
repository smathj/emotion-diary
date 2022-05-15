import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Diary from "./pages/Diary";
import React, { useReducer, useRef } from "react";

//? Reducer 함수 작성
const reducer = (state, action) => {
  let newState = [];
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      newState = [action.data, ...state];
      break;
    }
    case "REMOVE": {
      newState = state.filter((it) => it.id !== action.targetId);
      break;
    }
    case "EDIT": {
      newState = state.map((it) =>
        it.id === action.data.id ? { ...action.data } : it
      );
      break;
    }
    default:
      return state;
  }
  return newState;
};

//? Contetx
export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

// SPA vs MPA
// React 는 SPA
function App() {
  const [data, dispatch] = useReducer(reducer, []);

  const dataId = useRef(0);

  // * CREATE
  const onCreate = (date, content, emotion) => {
    dispatch({
      type: "CREATE",
      data: {
        id: dataId.current,
        date: new Date(date).getTime(),
        content,
        emotion,
      },
    });
    dataId.current += 1;
  };

  // * REMOVE
  const onRemove = (targetId) => {
    dispatch({ type: "REMOVE", targetId });
  };

  // * EDIT
  const onEdit = (targetId, date, content, emotion) => {
    dispatch({
      type: "EDIT",
      data: {
        id: targetId, // 아이디 그대로
        date: new Date(date).getTime(),
        content,
        emotion,
      },
    });
  };

  return (
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider value={{ onCreate, onRemove, onEdit }}>
        {/* 브라우저 라우터로 감싸줘야함 */}
        <BrowserRouter>
          <div className="App">
            {/* 바뀔부분 Routes */}
            <Routes>
              {/* Mapping Route */}
              <Route path="/" element={<Home />} />
              <Route path="/new" element={<New />} />
              <Route path="/edit" element={<Edit />} />
              <Route path="/diary/:id" element={<Diary />} />
            </Routes>
          </div>
        </BrowserRouter>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
}

export default App;
