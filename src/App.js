import Navbar from "./components/layout/Navbar";
import Index from "./components/layout/Index";
import {Route, Routes} from 'react-router-dom'
import Lyrics from "./components/tracks/Lyrics";
function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path={'/'} element={<Index/>}></Route>
        <Route path={'/lyrics/track/:trackId'} element={<Lyrics/>}></Route>
      </Routes>
    </>
  );
}

export default App;
