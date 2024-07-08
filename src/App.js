
import './App.css';
import Home from './screens/Home';
import Login from './screens/Login';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
   <>
   <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            {/* <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/myorder" element={<MyOrder />} /> */}
          </Routes>
        </div>
      </Router>

   </>
  );
}

export default App;
