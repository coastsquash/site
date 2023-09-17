import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Header from "./components/Header";
import About from "./pages/About";
import Home from "./pages/Home";
import League from "./pages/League";
import Members from "./pages/Members";
import Photos from "./pages/Photos";

import "./App.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Header />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="league" element={<League />} />
      <Route path="members" element={<Members />} />
      <Route path="photos" element={<Photos />} />
    </Route>,
  ),
);

const App = () => (
  <div className="w-full flex flex-col flex-wrap flex-grow min-h-screen">
    <RouterProvider router={router}/>
  </div>
);

export default App;
