import { useEffect, useState } from "react";
import { json, useParams } from "react-router-dom";
import { Nav, Toast } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { productPlus } from "../store.js";

function Detail(props) {
  let [tab, tab_change] = useState(0);
  let nav_now = props.nav_now;
  let dispatch = useDispatch();

  // 사이트 로딩 효과
  let [fade2, setFade2] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setFade2("end");
    }, 100);
    return () => {
      setFade2("");
    };
  }, [nav_now]);

  // 신발 파악
  let { id } = useParams();
  id = parseInt(id);

  function finding(thing) {
    if (thing.id === id) {
      return true;
    }
  }
  let shoes_find = props.shoes.find(finding);

  let 주소 = `https://codingapple1.github.io/shop/shoes${
    parseInt([shoes_find.id]) + 1
  }.jpg`;

  // 최근 본 상품에 추가
  useEffect(() => {
    let watching = localStorage.getItem("watched");
    watching = JSON.parse(watching);
    watching.unshift(shoes_find.id);
    let set = new Set(watching);
    let set_watched = [...set];
    localStorage.setItem("watched", JSON.stringify(set_watched));
  }, []);

  return (
    <div className={`container start ${fade2}`}>
      <div className="row">
        <div className="col-md-6">
          <img src={주소} width="100%" alt="" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{shoes_find.title}</h4>
          <p>{shoes_find.content}</p>
          <p>{shoes_find.price}원</p>
          <button
            className="btn btn-danger"
            onClick={() => {
              dispatch(productPlus(shoes_find));
            }}
          >
            주문하기
          </button>
        </div>
      </div>
      {/* 탭 */}
      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link
            eventKey="link0"
            onClick={() => {
              tab_change(0);
            }}
          >
            Product Name
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link1"
            onClick={() => {
              tab_change(1);
            }}
          >
            Product Price
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link2"
            onClick={() => {
              tab_change(2);
            }}
          >
            Product Content
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent tab={tab} shoes={shoes_find}></TabContent>
    </div>
  );
}

function TabContent({ tab, shoes }) {
  let [fade, setFade] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setFade("end");
    }, 100);
    return () => {
      setFade("");
    };
  }, [tab]);
  return (
    <div className={`start ${fade}`}>
      {
        [
          <div>{shoes.title}</div>,
          <div>{shoes.price}원</div>,
          <div>{shoes.content}</div>,
        ][tab]
      }
    </div>
  );
}

export default Detail;
