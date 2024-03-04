import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from '../shared/ui/Navbar';
import { PostsPage } from '../Pages/PostsPage';
import { PostDetailPage } from '../Pages/PostDetailPage';
import { SearchPostsResults } from '../Pages/SearchPostsResults';



export const Navigation = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="main-layout">
          <Routes>
            <Route path="home" element={<PostsPage />} />
            <Route path="post/:id" element={<PostDetailPage />} />
            <Route path="posts/:searchTerm" element={<SearchPostsResults />} />

            <Route path="/*" element={<Navigate to="/home" replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}