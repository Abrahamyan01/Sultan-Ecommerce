import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Routs } from "./Routs";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<Routs />);
