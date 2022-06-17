import React from 'react';
import HeaderInfo from "../HeaderInfo";
import {Link} from "react-router-dom";

const Works = () => {
  return (
    <div>
      <HeaderInfo/>
      <div className="row">
        <div className="col-3">
          <ul className="menu">
            <li className="link-btn"><Link to="/works">Задачи и работы</Link></li>
            <li className="link-btn blue"><Link to="/projects">Проекты</Link></li>
            <li className="link-btn"><Link to="/calendar">Календарь</Link></li>
            <li className="link-btn"><Link to="/benefits">Возможности</Link></li>
          </ul>
        </div>
        <div className="col-6">
          <h1 className="title">ЗАДАЧИ И РАБОТЫ</h1>
        </div>


      </div>
    </div>
  );
};

export default Works;