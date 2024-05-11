import React, { useEffect, useState } from "react";
import "./App.css";
import logo from "./assets/Foodflix.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Carousel, Card } from "react-bootstrap";
import {
  Routes,
  Route,
  useNavigate,
  useLocation,
  Link,
} from "react-router-dom";
import Stores from "./products.json";
import MapNaverDefault from "./map.js";

function App() {
  let Navigate = useNavigate();
  let [nav_now, nav_change] = useState("");
  let now_type = useLocation();

  return (
    <div className="App ">
      {/* Nav bar */}
      <Nav defaultActiveKey="/foodflix" as="ul">
        <Nav.Item as="li">
          <Nav.Link href="/foodflix">
            <img className="logo" src={logo} alt="logo" />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Link to="/korean" className="nav-link">
            한식
          </Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Link to="/western" className="nav-link">
            양식
          </Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Link to="/chinese" className="nav-link">
            중식
          </Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Link to="/japanese" className="nav-link">
            일식
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/random" className="nav-link">
            랜덤
          </Link>
        </Nav.Item>
      </Nav>

      <Routes>
        {/* home화면 */}
        <Route
          path="/foodflix"
          element={
            <>
              <div className="main">
                {/* banner carousel */}
                <div className="main-banner">
                  <Carousel>
                    <Carousel.Item
                      onClick={() => {
                        window.open(
                          "https://map.naver.com/p/entry/place/1579003040?c=15.00,0,0,0,dh"
                        );
                      }}
                    >
                      <img
                        className="slide-img"
                        src="https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20231023_32%2F1698056209384PQ6PB_JPEG%2FIMG_4959.jpeg"
                        alt="First slide"
                      />
                      <Carousel.Caption>
                        <h3>수육전골 (전주호리)</h3>
                        <p>전북 전주시 완산구 전라감영3길 13-12 1층</p>
                      </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item
                      onClick={() => {
                        window.open(
                          "https://map.naver.com/p/search/%EC%A3%BC%EB%B0%A9%EC%9D%BC%EA%B8%B0/place/1117344263?c=15.00,0,0,0,dh&isCorrectAnswer=true"
                        );
                      }}
                    >
                      <img
                        className="slide-img"
                        src="https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220807_208%2F1659855835274DfAsA_JPEG%2FScreenshot_20220804-181039_Instagram.jpg"
                        alt="Second slide"
                      />
                      <Carousel.Caption>
                        <h3>유린기 (주방일기)</h3>
                        <p>서울 마포구 양화로 178-8 2층 주방일기</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item
                      onClick={() => {
                        window.open(
                          "https://map.naver.com/p/search/%EC%9D%B4%EC%9E%90%EC%B9%B4%EC%95%BC%EC%9E%94/place/1881318434?placePath=?entry=pll&from=nx&fromNxList=true&searchType=place&c=15.00,0,0,0,dh"
                        );
                      }}
                    >
                      <img
                        className="slide-img"
                        src="https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyMzEyMTZfMTAx%2FMDAxNzAyNjg2NTA5NDAx.NLnpM5faaWQ9Fc0xJvziE7twjnWTUvxNeBQ2Va_Vqiwg.YFsCMelcpi3-FsnjTfMRIvzZ5pyOBbtvPzeQXPyK0tQg.JPEG%2F20231214_194833.jpg.jpg"
                        alt="Third slide"
                      />
                      <Carousel.Caption>
                        <h3>제철회 모듬 (이자카야잔)</h3>
                        <p>경기 고양시 일산서구 대산로212번길 8-55 1층</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                  </Carousel>
                </div>
                <div className="main-page">
                  <div className="row">
                    {Stores.map((a, i) => {
                      return (
                        <Store
                          Stores={Stores}
                          i={i}
                          key={i}
                          Navigate={Navigate}
                          nav_now={nav_now}
                          nav_change={nav_change}
                        ></Store>
                      );
                    })}
                  </div>
                </div>
              </div>
            </>
          }
        ></Route>
        <Route
          path="/stores/:id"
          element={
            <Store_detail
              Stores={Stores}
              nav_now={nav_now}
              nav_change={nav_change}
            ></Store_detail>
          }
        ></Route>
        {/* 음식 카테고리 */}
        <Route
          path="/korean"
          element={
            <div className="type">
              <div className="row">
                {Stores.map((a, i) => {
                  return (
                    <Type
                      Stores={Stores}
                      i={i}
                      key={i}
                      now_type={now_type}
                      width="col-6"
                    ></Type>
                  );
                })}
              </div>
            </div>
          }
        />
        <Route
          path="/western"
          element={
            <div className="type">
              <div className="row">
                {Stores.map((a, i) => {
                  return (
                    <Type
                      Stores={Stores}
                      i={i}
                      key={i}
                      now_type={now_type}
                      width="col-4"
                    ></Type>
                  );
                })}
              </div>
            </div>
          }
        />

        <Route
          path="/chinese"
          element={
            <div className="type">
              <div className="row">
                {Stores.map((a, i) => {
                  return (
                    <Type
                      Stores={Stores}
                      i={i}
                      key={i}
                      now_type={now_type}
                      width="col-4"
                    ></Type>
                  );
                })}
              </div>
            </div>
          }
        />

        <Route
          path="/japanese"
          element={
            <div className="type">
              <div className="row">
                {Stores.map((a, i) => {
                  return (
                    <Type
                      Stores={Stores}
                      i={i}
                      key={i}
                      now_type={now_type}
                      width="col-4"
                    ></Type>
                  );
                })}
              </div>
            </div>
          }
        />

        {/* 랜덤음식 */}
        <Route
          path="/random"
          element={
            <div className="random">
              <Random Stores={Stores}></Random>
            </div>
          }
        ></Route>
      </Routes>
    </div>
  );
}

function Store(props) {
  return (
    <div
      className="col-4 stores"
      onClick={() => {
        props.Navigate(`/stores/${props.Stores[props.i].name}`);
        props.nav_change(`${[props.i]}`);
      }}
    >
      <img src={props.Stores[props.i].img} alt=""></img>
      <p>{props.Stores[props.i].name}</p>
    </div>
  );
}

function Store_detail(props) {
  let recommend = props.Stores[props.nav_now].recommend;
  let recommend_img = props.Stores[props.nav_now].recommend_img;
  return (
    <div className="d-flex ">
      <img src={props.Stores[props.nav_now].img} alt=""></img>
      <div>
        <div className="top">
          <h1>{props.Stores[props.nav_now].name}</h1>
          <h5>&lt; 추천메뉴 &gt;</h5>
          <ul>
            {recommend.map((a, i) => {
              return <li key={i}>{a}</li>;
            })}
          </ul>
        </div>
        <div className="bottom">
          <Carousel className="detail-slide">
            <Carousel.Item>
              <img src={recommend_img[0]} alt="First slide" />
            </Carousel.Item>

            <Carousel.Item>
              <img src={recommend_img[1]} alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img src={recommend_img[2]} alt="Third slide" />
            </Carousel.Item>
          </Carousel>
          <MapNaverDefault
            Stores={props.Stores}
            nav_now={props.nav_now}
          ></MapNaverDefault>
        </div>
      </div>
    </div>
  );
}

function Type(props) {
  if (props.now_type.pathname === `/${props.Stores[props.i].type}`) {
    return (
      <div className={props.width}>
        <Card style={{ width: "100%" }}>
          <Card.Img variant="top" src={props.Stores[props.i].img} />
          <Card.Body>
            <Card.Title>{props.Stores[props.i].name}</Card.Title>
            <Card.Text>{props.Stores[props.i].info}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

function Random(props) {
  let random = Math.floor(Math.random() * (props.Stores.length - 1) + 1);
  let recommend = props.Stores[random].recommend;
  let recommend_img = props.Stores[random].recommend_img;

  return (
    <div className="d-flex random">
      <img src={props.Stores[random].img} alt=""></img>
      <div>
        <div className="top">
          <h1>{props.Stores[random].name}</h1>
          <h5>&lt; 추천메뉴 &gt;</h5>
          <ul>
            {recommend.map((a, i) => {
              return <li key={i}>{a}</li>;
            })}
          </ul>
        </div>
        <div className="bottom">
          <Carousel className="detail-slide">
            <Carousel.Item>
              <img src={recommend_img[0]} alt="First slide" />
            </Carousel.Item>

            <Carousel.Item>
              <img src={recommend_img[1]} alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img src={recommend_img[2]} alt="Third slide" />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default App;
