import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/project.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import avt from '../assets/avatar.png';

const posts = [
  { id: 1, category: 'Branding', title: 'Creative Agency', description: 'Lorem ipsum...', imgSrc: avt },
  { id: 2, category: 'Marketing', title: 'Creative Agency', description: 'Lorem ipsum...', imgSrc: avt },
  { id: 3, category: 'Marketing', title: 'Creative Agency', description: 'Lorem ipsum...', imgSrc: avt },
  { id: 4, category: 'Development', title: 'Creative Agency', description: 'Lorem ipsum...', imgSrc: avt },
  { id: 5, category: 'Design', title: 'Creative Agency', description: 'Lorem ipsum...', imgSrc: avt },
  { id: 6, category: 'Marketing', title: 'Creative Agency', description: 'Lorem ipsum...', imgSrc: avt },
  { id: 7, category: 'Development', title: 'Creative Agency', description: 'Lorem ipsum...', imgSrc: avt },
  { id: 8, category: 'Branding', title: 'Creative Agency', description: 'Lorem ipsum...', imgSrc: avt },
];

function App() {
  const [filter, setFilter] = useState('All Project');

  const filteredPosts = filter === 'All Project' ? posts : posts.filter(post => post.category === filter);

  return (
    <div className="App text-white">
      <div className="post-filter container d-flex justify-content-center align-items-center gap-3 mt-4">
        {['All Project', 'Branding', 'Design', 'Marketing', 'Development'].map((item) => (
          <span
            key={item}
            className={`filter-item ${filter === item ? 'active-filter' : ''}`}
            onClick={() => setFilter(item)}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </span>
        ))}
      </div>

      <div className="post container mt-4">
        <div className="row">
          <AnimatePresence>
            {filteredPosts.map((post) => (
              <motion.div
                key={post.id}
                className="col-12 col-md-6 col-lg-4 mb-4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <div className="post-box shadow p-3 rounded">
                  <img src={post.imgSrc} alt="" className="post-img w-100 rounded" />
                  <h2 className="category text-uppercase text-primary mt-3">{post.category}</h2>
                  <a href="#" className="post-title d-block text-dark text-decoration-none">{post.title}</a>
                  <p className="post-description text-muted mt-3">{post.description}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default App;
