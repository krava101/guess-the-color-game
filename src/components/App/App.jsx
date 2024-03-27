import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "../../pages/NotFound/NotFound";
import HomePage from "../../pages/HomePage/HomePage";
import GamePage from "../../pages/GamePage/GamePage";
import AboutPage from "../../pages/AboutPage/AboutPage";

const App = () => {  
  return (
    <>
      <Suspense fallback={
        <div>Loading...</div>
      }>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/game" element={<GamePage />} />
          <Route path="/about" element={<AboutPage />}/>
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App;