import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Card } from 'antd';
import logo from './logo.svg';
import './App.css';
const { Header, Content, Footer } = Layout;

const cardData = [
  {
    nama : "Abdurrahman Jaisy",
    job : "Pedagang",
  },
  {
    nama : "Muklas Rahmanto",
    job : "Petani",
  },
  {
    nama : "Bramantya Genta",
    job : "Peternak",
  },
  {
    nama : "Ruditya Candra",
    job : "Pemahat",
  },
]

function App() {
  return (
    <div className="App">
      {cardData.map(data => (
        <Card title="Member Card" style={{ width: 500 }}>
          <p className="name">{data.nama}</p>
          <p className="job">{data.job}</p>
        </Card>
      ))}
    </div>
  );
}

export default App;