import { RouterProvider } from "react-router";

import router from "./Routes/routes";

import "./index.css";

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
