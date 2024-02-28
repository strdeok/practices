import React, { useState, useEffect } from "react";
import "./App.css";
import logo from "./assets/Foodflix.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Carousel } from "react-bootstrap";
import { Routes, Route, useNavigate, Outlet } from "react-router-dom";
import Stores from "./products.json";
import MapNaverDefault from "./map.js";

function App() {
  let Navigate = useNavigate();
  let [nav_now, nav_change] = useState("");

  return (
    <div className="App ">
      {/* Nav bar */}
      <Nav defaultActiveKey="/home" as="ul">
        <Nav.Item as="li">
          <Nav.Link href="/">
            <img className="logo" src={logo} alt="logo" />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link href="/korean">한식</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link href="/western">양식</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link href="/chinese">중식</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link href="/japanese">일식</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/price">가격대별로 보기</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/random">랜덤</Nav.Link>
        </Nav.Item>
      </Nav>

      <Routes>
        {/* home화면 */}
        <Route
          path="/"
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
      </Routes>
      {/* bottom Nav */}
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
      <img src={props.Stores[props.i].img}></img>
      <p>{props.Stores[props.i].name}</p>
    </div>
  );
}

function Store_detail(props) {
  return (
    <div className="d-flex ">
      <img src={props.Stores[props.nav_now].img}></img>
      <div>
        <h1>{props.Stores[props.nav_now].name}</h1>
        <p></p>
        <MapNaverDefault
          Stores={props.Stores}
          nav_now={props.nav_now}
        ></MapNaverDefault>
      </div>
    </div>
  );
}

export default App;
