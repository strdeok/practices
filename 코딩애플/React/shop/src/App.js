import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Container, Nav, Navbar, Modal } from "react-bootstrap";
import data from "./data.js";
import { Routes, Route, useNavigate, Outlet } from "react-router-dom";
import Detail from "./pages/detail.js";
import axios from "axios";
import Cart from "./pages/cart.js";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

function App() {
  let [shoes, setState] = useState(data);
  let navigate = useNavigate();
  let [press, pressed] = useState(0);
  let [nav_now, nav_change] = useState("");

  useEffect(() => {
    if (localStorage.length < 1) {
      localStorage.setItem("watched", JSON.stringify([]));
    } else {
    }
  }, []);

  let result = useQuery("작명", () => {
    return axios
      .get("https://codingapple1.github.io/userdata.json")
      .then((a) => {
        return a.data;
      });
  });

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand
            href="#home"
            onClick={() => {
              navigate("/");
              nav_change("home");
            }}
          >
            ShoeMarket
          </Navbar.Brand>
          {/* home 페이지 버튼 */}
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              onClick={() => {
                navigate("/");
                nav_change("home");
              }}
            >
              Home
            </Nav.Link>
            {/* Event 페이지 버튼 */}
            <Nav.Link
              href="#features"
              onClick={() => {
                navigate("/event");
                nav_change("event");
              }}
            >
              Event
            </Nav.Link>

            <Nav.Link
              href="#cart"
              onClick={() => {
                navigate("/cart");
                nav_change("cart");
              }}
            >
              Cart
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto" style={{ color: "white" }}>
            {result.isLoading ? "로딩중" : result.data.name}
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="main-bg"></div>
              <button
                onClick={() => {
                  const sortedShoes = [...shoes].sort((a, b) => {
                    return a.title < b.title ? -1 : a.title > b.title ? 1 : 0;
                  });
                  setState(sortedShoes);
                }}
              >
                상품명 정렬
              </button>
              <div className="container">
                <div className="row">
                  {shoes.map((a, i) => {
                    return (
                      <Card
                        key={i}
                        shoes={shoes}
                        count={i}
                        navigate={navigate}
                        nav_change={nav_change}
                      ></Card>
                    );
                  })}

                  <button
                    className="more"
                    onClick={() => {
                      if (press === 0) {
                        axios
                          .get(
                            "https://codingapple1.github.io/shop/data2.json "
                          )
                          .then((result) => {
                            let copy = [...shoes];
                            copy.push(...result.data);
                            setState(copy);
                            pressed(1);
                            console.log(press);
                          });
                      } else if (press === 1) {
                        axios
                          .get(
                            "https://codingapple1.github.io/shop/data3.json "
                          )
                          .then((result) => {
                            let copy = [...shoes];
                            copy.push(...result.data);
                            setState(copy);
                            pressed(2);
                          });
                      } else {
                        alert("끝인데용");
                      }
                    }}
                  >
                    더보기
                  </button>
                </div>
              </div>
              <div
                className="modal show"
                style={{
                  display: "block",
                  position: "sticky",
                  bottom: "10px",
                  width: "200px",
                  left: "80vw",
                }}
              >
                <Recent_modal
                  navigate={navigate}
                  nav_change={nav_change}
                ></Recent_modal>
              </div>
            </>
          }
        />
        <Route
          path="/detail/:id"
          element={<Detail shoes={shoes} nav_now={nav_now}></Detail>}
        />

        <Route
          path="/event"
          element={<Event navigate={navigate} nav_change={nav_change}></Event>}
        >
          <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>} />
          <Route path="two" element={<div>생일기념 쿠폰받기</div>} />
        </Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
      </Routes>
    </div>
  );
}

function Card(props) {
  let 주소 = `https://codingapple1.github.io/shop/shoes${
    parseInt([props.shoes[props.count].id]) + 1
  }.jpg`;
  return (
    <>
      <div
        className="col-md-4 products"
        onClick={() => {
          props.navigate(`/detail/${props.shoes[props.count].id}`);
          props.nav_change("detail");
        }}
      >
        <img width="80%" alt="" src={주소}></img>
        <h4>{props.shoes[props.count].title}</h4>
        <p>{props.shoes[props.count].content}</p>
        <p>{props.shoes[props.count].price}원</p>
      </div>
    </>
  );
}

function Event(props) {
  return (
    <div>
      <h4>오늘의 이벤트</h4>

      <button
        href="#features"
        onClick={() => {
          props.navigate("/event/one");
          props.nav_change("event");
        }}
      >
        one
      </button>
      <button
        href="#features"
        onClick={() => {
          props.navigate("/event/two");
          props.nav_change("event");
        }}
      >
        two
      </button>
      <Outlet></Outlet>
    </div>
  );
}

function Recent_modal(props) {
  return (
    <Modal.Dialog>
      <Modal.Header>
        <Modal.Title>최근 본 상품</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <img
          src={`https://codingapple1.github.io/shop/shoes${
            (localStorage.getItem("watched") == null
              ? ""
              : JSON.parse(localStorage.getItem("watched"))[0]) + 1
          }.jpg`}
          width="100%"
          alt=""
          onClick={() => {
            props.navigate(
              `/detail/${JSON.parse(localStorage.getItem("watched"))[0]}`
            );
            props.nav_change("detail");
          }}
        ></img>
        <img
          src={`https://codingapple1.github.io/shop/shoes${
            (localStorage.getItem("watched") == null
              ? ""
              : JSON.parse(localStorage.getItem("watched"))[1]) + 1
          }.jpg`}
          width="100%"
          alt=""
          onClick={() => {
            props.navigate(
              `/detail/${JSON.parse(localStorage.getItem("watched"))[1]}`
            );
            props.nav_change("detail");
          }}
        ></img>
      </Modal.Body>
    </Modal.Dialog>
  );
}

export default App;
