import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans, { vansLoader } from "./pages/Vans/Vans";
import VanDetails, { vanDetailsLoader } from "./pages/Vans/VanDetails";
import Layout from "./components/Layout";
import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import HostLayout from "./components/HostLayout";
import HostVans, { hostVansLoader } from "./pages/Host/HostVans/HostVans";
import HostVanDetails, {
  hostVanDetailsLoader
} from "./pages/Host/HostVans/HostVanDetails";
import Details from "./pages/Host/HostVans/Details";
import Pricing from "./pages/Host/HostVans/Pricing";
import Photos from "./pages/Host/HostVans/Photos";
import NotFound from "./components/NotFound";
import Error from "./components/Error";
import Login, { loginLoader, action as loginAction } from "./pages/Login";
import { requiredAuth } from "./utils";

function App() {
  const routes = createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="login" element={<Login />} loader={loginLoader} action={loginAction}/>
      <Route path="*" element={<NotFound />} />
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route
        path="vans"
        element={<Vans />}
        loader={vansLoader}
        errorElement={<Error />}
      />
      <Route
        path="vans/:id"
        loader={vanDetailsLoader}
        element={<VanDetails />}
      />
      <Route
        path="host"
        loader={async ({request}) => await requiredAuth(request) }
        element={<HostLayout />}
      >
        <Route
          index
          element={<Dashboard />}
        />
        <Route
          path="income"
          element={<Income />}
        />
        <Route
          path="reviews"
          
          element={<Reviews />}
        />
        <Route path="vans" loader={hostVansLoader} element={<HostVans />} />
        <Route
          path="vans/:id"
          loader={hostVanDetailsLoader}
          element={<HostVanDetails />}
        >
          <Route index element={<Details />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="photos" element={<Photos />} />
        </Route>
      </Route>
    </Route>
  );

  return <RouterProvider router={createBrowserRouter(routes)} />;
}

export default App;
