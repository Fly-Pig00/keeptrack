import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';

import ProjectsPage from './views/projects/ProjectsPage';
import ProjectPage from './views/projects/ProjectPage';
import CounterPage from './views/counter/CounterPage';
import HomePage from './views/home/HomePage';
import GoogleSignin from './views/auth/GoogleSignin ';
import Navbar from './components/layouts/navigation/Navbar/Navbar';
import PrivateRoute from './components/routing/PrivateRoute';
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<GoogleSignin />} />
            {/* <Route
              path="/projects"
              element={
                <PrivateRoute>
                  <ProjectsPage />
                </PrivateRoute>
              }
            /> */}
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/counter" element={<CounterPage />} />
            <Route path="/projects/:id" element={<ProjectPage />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
