import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Root from "./routes/root/Root.tsx";
import Home from "./routes/Home.tsx";
import WebApps from "./routes/WebApps.tsx";
import Articles from "./routes/Articles.tsx";
import MixedMedia from "./routes/MixedMedia.tsx";
import About from "./routes/About.tsx";
import Contact from "./routes/Contact.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="web-applications" element={<WebApps />}></Route>
      <Route path="articles" element={<Articles />}></Route>
      <Route path="mixed-media" element={<MixedMedia />}></Route>
      <Route path="about" element={<About />}></Route>
      <Route path="contact" element={<Contact />}></Route>
    </Route>
  )
);

createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);
