import {
  HashRouter,
  Routes,
  Route,
  // BrowserRouter,
} from "react-router-dom";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
// import { initializeCountries } from "./features/countries/countriesSlice";

import Layout from "./layout/Layout";
import HomePage from "./components/home/HomePage";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(initializeCountries());
    // eslint-disable-next-line
  }, [dispatch]);

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />

          {/* <Route path="galleria/pienet-tatuointi" element={<Smalls />} /> */}

        </Route>
      </Routes>
    </HashRouter>


  );
};

export default App;
