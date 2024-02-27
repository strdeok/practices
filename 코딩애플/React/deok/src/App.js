// (npm start) to open
import "./App.css";
import { useState } from "react";

function App() {
  let post = "Deok's Blog";
  let [글제목, 글제목변경] = useState([
    "남자 코트 추천",
    "남자 바지 추천",
    "남자 아우터 추천",
  ]);
  let [공감수, 공감업] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [모달제목, 모달변경] = useState(0, 1, 2);
  let [입력값, 입력값변경] = useState("");
  let today = new Date()

  return (
    <div className="App">
      {/* 상단바 */}
      <div className="black-nav">
        <h4>
          {post}{" "}
          <span
            onClick={function 글수정() {
              let copy = [...글제목];
              copy[0] = "여자 코트 추천";
              글제목변경(copy);
              // 우신사(
              //   (글제목 = [
              //     "여자 코트 추천",
              //     "여자 바지 추천",
              //     "여자 아우터 추천",
              //   ])
              // );
            }}
          >
            👩
          </span>
        </h4>
      </div>
      {/* 글정렬버튼 */}
      <button
        onClick={() => {
          let 정리 = [...글제목];
          정리.sort();
          글제목변경(정리);
        }}
      >
        가나다순정렬
      </button>
      {/* 본문 */}
      {글제목.map(function (a, i) {
        return (
          <div className="list" key={i}>
            <h4
              onClick={() => {
                setModal(!modal);
                모달변경(i);
              }}
            >
              {" "}
              {a}{" "}
            </h4>
            <span
              onClick={() => {
                let copy = [...공감수];
                copy[i] = copy[i] + 1;
                공감업(copy);
              }}
            >
              👍
            </span>
            {공감수[i]} {/* <h4>{글제목[i]</h4> */}
            <p>{today.toLocaleDateString()}</p>
            <button
              onClick={() => {
                let copy = [...글제목];
                copy.splice(i, 1);
                글제목변경(copy);
              }}
            >
              삭제
            </button>
          </div>
        );
      })}
      {/* 새로운 글 추가 */}
      <input
        type="text"
        onChange={(e) => {
          입력값변경(e.target.value);
        }}
      ></input>{" "}
      <button
        onClick={() => {
          if (입력값 == "") {
            alert("빈칸에 입력하세요");
          } else {
            let copy = [...글제목];
            copy.unshift(입력값);
            let copy2 = [...공감수];
            copy2.push(0);
            공감업(copy2);
            글제목변경(copy);
          }
        }}
      >
        발행
      </button>
      {/* 상품 modal */}
      {modal == true ? (
        <Modal
          color={"yellow"}
          글제목={글제목}
          글제목변경={글제목변경}
          모달제목={모달제목}
        />
      ) : (
        ""
      )}
      {/* 광고배너 */}
      <Ad></Ad>
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal" style={{ background: props.color }}>
      <h4>{props.글제목[props.모달제목]}</h4>
      <p>날씨</p>
      <p>상세내용</p>
      <button
        onClick={() => {
          let copy = [...props.글제목];
          copy[0] = "여자 코트 추천";
          props.글제목변경(copy);
        }}
      >
        글수정
      </button>
    </div>
  );
} // Component

const Ad = () => {
  return (
    <div className="ad">
      <p>광고들어갈자리</p>
    </div>
  );
};

export default App;
