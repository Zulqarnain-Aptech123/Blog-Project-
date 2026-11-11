import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import CreateBlog from './pages/CreateBlog'
import Blogs from './pages/Blogs'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/create-blog" element={<CreateBlog />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
