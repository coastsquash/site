import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Layout from "./components/Layout";
import {
  Home,
  Juniors,
  League,
  Lessons,
  Members,
  Misc,
  Recordings,
} from "./pages";

import "./App.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="league" element={<League />} />
      <Route path="members" element={<Members />} />
      <Route path="lessons" element={<Lessons />} />
      <Route path="juniors" element={<Juniors />} />
      <Route path="recordings" element={<Recordings />} />
      <Route path="misc" element={<Misc />} />
    </Route>,
  ),
);

const App = () => (
  <div className="w-full flex flex-col flex-wrap flex-grow min-h-screen">
    <RouterProvider router={router}/>
  </div>
);

export default App;
