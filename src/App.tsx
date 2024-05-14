import React from 'react';
import {
  BrowserRouter as Router,
  Navigate,
  Routes,
  Route,
} from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Article1 from './pages/Article1';
import Article2 from './pages/Article2';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/article-1" element={<Article1 />} />
          <Route path="/article-2" element={<Article2 />} />
          <Route path="/" element={<Navigate replace to="/article-1" />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
