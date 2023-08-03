
import './App.css';
import { Routes, Route } from 'react-router-dom'

//importing pages
import HomePage from './pages/Home'
import AboutPage from './pages/About'
import BlogPage from './pages/Blog'
import ContactPage from './pages/Contact'
import LoginPage from './pages/Login'
//RootLayout the Layout of all the pages
import RootLayout from './layouts/RootLayout'

function App() {
  return (
    <Routes>
        <Route element={<RootLayout />}>
          <Route  path="/" element={<HomePage />}> </Route>
          <Route path="/about" element={<AboutPage />}> </Route>
          <Route path="/blog" element={<BlogPage />}> </Route>
          <Route path="/contact" element={<ContactPage /> }> </Route>
          <Route path="/login" element={<LoginPage /> }> </Route>
        </Route>   
   </Routes>
  );
}

export default App;
