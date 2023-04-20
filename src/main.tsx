import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Root from "./routes/root.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<Root />} />)
);
const bl = "as";
//gh
createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);
