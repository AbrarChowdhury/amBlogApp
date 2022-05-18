import Layout from "./components/layout/Layout";
import Blog from "./pages/blog";
import Blogs from "./pages/blogs";
import PostContextProvider from "./context/postContext";
import CommentContextProvider from "./context/commentContext";
import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>  
      <PostContextProvider>
      <CommentContextProvider>
      <Layout>
      
        <Routes>
          <Route path="/" element={<Blogs/>}/>
          <Route path="/blog/:id" element={<Blog/>}/>
        </Routes>
      
      </Layout>
      </CommentContextProvider>
      </PostContextProvider>
      </Router>
    </div>
  );
}

export default App;
