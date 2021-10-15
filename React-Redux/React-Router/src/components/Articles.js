import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { selectArticles, filterArticles } from '../features/articles/articlesSlice';
import Search from './Search';

export default function Articles() {
  const articles = useSelector(selectArticles);

  // grab the search value from useLocation()

  // get the queryParams from new URLSearchParams()

  const title = ''; // <-- fix me!

  const filteredArticles = title ? filterArticles(title, articles) : Object.values(articles);

  return (
    <main>
      <h1>Articles</h1>
      <ul>
        {filteredArticles.map((article) => {
          return (
            <li key={article.slug}>
              <Link to={`/articles/${article.slug}`}>{article.title}</Link>
            </li>
          );
        })}
      </ul>
      <Search />
    </main>
  );
}
