import "./App.css";
import Navs from "./components/nav";
import Footer from "./components/footer";
import { Route, Routes } from "react-router-dom";
import Form from "./components/admission";
import Form2 from "./components/admission2";
import Home from "./components/homepage/Home";



function App() {
  return (
    <>
      <Navs></Navs>
 <Routes>
 <Route path="/" element={<Home />} />
 <Route path="/admission" element={<Form />} />
 <Route path="/admission2" element={<Form2 />} />

 </Routes>
      {/* <Footer></Footer> */}
    </>
  );
}

export default App;
