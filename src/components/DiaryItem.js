import MyButton from "./MyButton";
import { useNavigate } from "react-router-dom";
import React from "react";

const DiaryItem = ({ id, emotion, content, date }) => {
  // 네비게이트
  const navigate = useNavigate();

  const env = process.env;
  env.PUBLIC_URL = env.PUBLIC_URL || "";

  const strDate = new Date(parseInt(date)).toLocaleDateString();

  // 상세페이지 이동 함수
  const getDetail = () => {
    navigate(`/diary/${id}`);
  };

  // 수정페이지 이동 함수
  const goEdit = () => {
    navigate(`/edit/${id}`);
  };

  return (
    <div className={"DiaryItem"}>
      <div
        onClick={getDetail}
        className={[
          "emotion_img_wrapper",
          `emotion_img_wrapper_${emotion}`,
        ].join(" ")}
      >
        <img src={process.env.PUBLIC_URL + `assets/emotion${emotion}.png`} />
      </div>

      <div onClick={getDetail} className={"info_wrapper"}>
        <div className={"diary_date"}>{strDate}</div>
        <div className={"diary_content_preview"}>{content.slice(0, 25)}</div>
      </div>

      <div onClick={goEdit} className={"btn_wrapper"}>
        <MyButton text={"수정하기"} />
      </div>
    </div>
  );
};

export default React.memo(DiaryItem);
