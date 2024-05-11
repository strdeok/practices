import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./routes/home";
import Profile from "./routes/profile";
import Login from "./routes/login";
import CreateAccount from "./routes/create-account";
import { createGlobalStyle, styled } from "styled-components";
import reset from "styled-reset";
import { useEffect, useState } from "react";
import LoadingScreen from "./components/loaing-screen";
import ProtectedRoute from "./components/protected-route";
import { auth } from "./firebase";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Layout></Layout>
      </ProtectedRoute>
    ),
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "profile",
        element: <Profile></Profile>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  { path: "create-account", element: <CreateAccount></CreateAccount> },
]);

const GlobalStyles = createGlobalStyle`
  ${reset};
  * {
    box-sizing: border-box;
  }
  
  body {
    background-color: black;
    color:white;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`;


function App() {
  const [isLoding, setLoading] = useState(true);
  const init = async () => {

      await auth.authStateReady();
      setLoading(false);

  };
  useEffect(() => {
    init();
  }, []);
  return (
    <>
      <Wrapper>
        <GlobalStyles></GlobalStyles>
        {isLoding ? <LoadingScreen /> : <RouterProvider router={router} />}
      </Wrapper>
    </>
  );
}

export default App;
