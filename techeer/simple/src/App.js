import "./App.css";
import { useState } from "react";
import $ from "jquery";
import { Routes, Route, Link } from "react-router-dom";
import { Row, Col, Card, Button, Container } from "react-bootstrap";

function App() {
  let [제품이름, 이름변경] = useState(["시디즈", "허먼밀러", "듀오백"]);
  let [개수, 개수변경] = useState([1, 1, 1]);

  return (
    <div className="App">
      <main>
        <div className="nav-bar">
          <nobr>room</nobr>
          <span className="modal">
            <Link to="/">Home</Link> <Link to="/shop">Shop</Link>{" "}
            <Link to="/about">About</Link> <Link to="/contact">Contact</Link>
          </span>
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="top_article">
                  {/*  main part 1  */}
                  <div className="container header1">
                    <img
                      className="product-img-desktop"
                      src="/assets/desktop-image-hero-1.jpg"
                    />

                    <div className="container header-text">
                      <h1>Discover innovative ways to decorate</h1>

                      <p className="main_text">
                        We provide unmatched quality, comfort, and style for
                        property owners across the country. Our experts combine
                        form and function in bringing your vision to life.
                        Create a room in your own style with our collection and
                        make your property a reflection of you and what you
                        love.
                      </p>

                      <Link className="shopping" to="/shop" onClick={() => {}}>
                        Shop now
                        <svg
                          width="40"
                          height="12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z"
                            fill-rule="nonzero"
                          />
                        </svg>
                      </Link>
                      <div className="control">
                        <button className="prev">
                          <img src="/assets/icon-angle-left.svg" />
                        </button>
                        <button className="next">
                          <img src="/assets/icon-angle-right.svg" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* bottom part */}

                <div className="container foot_article">
                  <img src="/assets/image-about-dark.jpg" />
                  <div
                    className="container"
                    style={{ justifyContent: "center" }}
                  >
                    <p className="bottom-title">About our furniture</p>
                    Our multifunctional collection blends design and function to
                    suit your individual taste. Make each room unique, or pick a
                    cohesive theme that best express your interests and what
                    inspires you. Find the furniture pieces you need, from
                    traditional to contemporary styles or anything in between.
                    Product specialists are available to help you create your
                    dream space.
                  </div>
                  <img src="/assets/image-about-light.jpg" />
                </div>
              </>
            }
          ></Route>
          <Route
            path="/shop"
            element={
              <Container className="Shop">
                <div className="banner">
                  <img
                    className="product-img-desktop"
                    src="https://cdn.pixabay.com/photo/2022/05/17/17/02/room-7203256_1280.jpg"
                  />
                </div>
                <Row>
                  {제품이름.map(function (a, i) {
                    return (
                      <Col key={i}>
                        <Card>
                          <Card.Img
                            variant="top"
                            src="https://img.danawa.com/prod_img/500000/826/128/img/14128826_1.jpg?_v=20230811125733"
                          />
                          <Card.Body>
                            <Card.Title>{a}</Card.Title>
                            <Card.Text>
                              당신의 사이즈에 앉으세요! 정교한 맞춤 데이터로
                              제작되는 맞춤의자!
                            </Card.Text>
                            <h3>{i + 1}00,000원</h3>
                            <div className="count_box">
                              <button
                                onClick={() => {
                                  개수변경((Pre) => {
                                    const newPre = [...Pre];
                                    console.log();
                                    if (newPre[i] == 0) {
                                      newPre[i] = 0;
                                      return newPre;
                                    } else {
                                      newPre[i] -= 1;
                                      return newPre;
                                    }
                                  });
                                }}
                              >
                                -
                              </button>
                              <input type="text" value={개수[i]} ></input>
                              <button
                                onClick={() => {
                                  개수변경((Pre) => {
                                    const newPre = [...Pre];
                                    newPre[i] += 1;
                                    return newPre;
                                  });
                                }}
                              >
                                +
                              </button>
                            </div>
                            <button
                              onClick={() => {
                                alert(`${제품이름[i]}: ${개수[i]}개
총: ${(i + 1) * 100000 * 개수[i]}원`);
                              }}
                            >
                              구매하기
                            </button>
                          </Card.Body>
                        </Card>
                      </Col>
                    );
                  })}
                </Row>
              </Container>
            }
          ></Route>
          <Route path="/about" element={<div></div>}></Route>
          <Route path="/contact" element={<div></div>}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
