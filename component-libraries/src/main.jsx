import React from 'react'
import ReactDOM from 'react-dom/client'
// eslint-disable-next-line no-unused-vars
import App from './App.jsx'
import './index.css'
import MyBreadcrumbs from './Breadcrumbs.jsx'
import ButtonTable from './ButtonTable.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ButtonTable />
  </React.StrictMode>,
)
