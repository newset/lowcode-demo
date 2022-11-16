import ReactDOM from 'react-dom';
import React from 'react';

const affix = ':projectSchema';

const ListPage = () => {
  const url = location.pathname.replace(/(\w+).html/, 'index.html');
  const pages = Object.keys(localStorage).filter(name => name.endsWith(affix));

  return <div style={{width: 400, margin: '20px auto'}}>
    <h3>页面列表</h3>
    <ol>
    {
      pages.map(page => {
        const name = page.replace(affix, '');
        return <li key={page} style={{marginBottom: 20,}}>
          <a href={`${url}?scenarioName=${name}`}>{name.toUpperCase()}</a>
        </li>
      })
    }
    </ol>
  </div>
}

ReactDOM.render(<ListPage />, document.getElementById('pages-list-container'));