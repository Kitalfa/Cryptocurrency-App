import React from 'react';
import { Route, Link, Routes } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import './app.scss';

import {
  Exchanges,
  Homepage,
  News,
  Cryptocurrencies,
  CryptoDetails,
  Navbar,
} from './components';

function App() {
  return (
    <div className="App">
      <div className="main2">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="main">
          <Layout>
            <div className="routes">
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="exchanges" element={<Exchanges />} />
                <Route
                  path="/cryptocurrencies"
                  element={<Cryptocurrencies />}
                />
                <Route path="/crypto/:coinId" element={<CryptoDetails />} />
                <Route path="/news" element={<News />} />
              </Routes>
            </div>
          </Layout>
        </div>
      </div>
      <div className="footer">
        <Typography.Title
          level={5}
          style={{ color: 'white', textAlign: 'center' }}
        >
          <Link to="/">AlfaCrypto</Link> <br />
          All Rights Reserved.
        </Typography.Title>
      </div>
    </div>
  );
}

export default App;
