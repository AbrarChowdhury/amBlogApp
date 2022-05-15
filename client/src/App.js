import Layout from "./components/layout/Layout";
import Blog from "./pages/blog";
import Blogs from "./pages/blogs";
import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>  
      <Layout>
      
        <Routes>
          <Route path="/" element={<Blogs/>}/>
          <Route path="/blog/:id" element={<Blog/>}/>
        </Routes>
      
      </Layout>
      </Router>
    </div>
  );
}

export default App;
