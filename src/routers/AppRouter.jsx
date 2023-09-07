import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Home,
  Error,
  ViewGameAll,
  ViewGameDetails,
  ViewStoreAll,
  ViewStoreDetails,
} from "../views/index";
import BaseLayout from "../layouts/BaseLayout";
import SignUpComponent from "../views/connect/signup/SignUpComponent";
import Tetris from "../views/Games/Tetris";
import SignInComponent from "../views/connect/signin/SignInComponent";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/error" element={<Error />} />
          <Route path="/populated-games" element={<ViewGameAll />} />
          <Route path="/games/:gameId" element={<ViewGameDetails />} />
          <Route path="/stores" element={<ViewStoreAll />} />
          <Route path="/stores/:storeId" element={<ViewStoreDetails />} />
          <Route path="/games/tetris" element={<Tetris />} />
          <Route path="/connect/signup" element={<SignUpComponent />} />
          <Route path="/connect/signin" element={<SignInComponent />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
