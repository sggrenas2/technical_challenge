import { Route, Routes } from "react-router";

import { Protected } from "./Protected";
import { Home } from "./../Views/Home";
import { Login } from "./../Views/SignIn";

const Index = () => {
  return (
    <Routes>
      <Route path="/">
        <Route path="/" element={<Protected />}>
          <Route index element={<Home />} />
          <Route path="*" element={<Home />} />
        </Route>
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
};

export default Index;
