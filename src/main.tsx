import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import { store } from "./state/Store.ts";
import { Provider } from "react-redux";
import Root from "./routes/root/Root.tsx";
import Authentication from "./routes/auth/Authentication.tsx";

import Home from "./routes/Home.tsx";
import Portfolio from "./routes/portfolio/Portfolio.tsx";
import Content from "./routes/content/Content.tsx";
import Other from "./routes/Other.tsx";

import Contact from "./routes/Contact.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="portfolio" element={<Portfolio />}></Route>
      <Route path="content" element={<Content />}></Route>
      <Route path="other" element={<Other />}></Route>
      {/* <Route path="contact" element={<Contact />}></Route> */}
      <Route path="login" element={<Authentication />}></Route>
    </Route>
  )
);

createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
