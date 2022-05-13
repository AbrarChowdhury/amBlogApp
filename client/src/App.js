import Layout from "./components/layout/Layout";
import Blog from "./pages/blog";
import Blogs from "./pages/blogs";
 
function App() {
  return (
    <div className="App">
      <Layout>
        <Blogs/>
        <Blog/>
      </Layout>
      
    </div>
  );
}

export default App;
