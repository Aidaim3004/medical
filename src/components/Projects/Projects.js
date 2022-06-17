import React from 'react';
import {Link} from "react-router-dom";
import HeaderInfo from "../HeaderInfo";


const Projects = () => {
  return (
    <div className="container">
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
          <h1 className="title">ПРОЕКТЫ</h1>
          <div className="itemProject">
            <h5 className="asideLeft">СПИСОК ПРОЕКТОВ</h5>
            <h5 className="asideRight">ДОРОЖНЫЕ КАРТЫ</h5>
          </div>
          <div className= "content">
            <h2 className="subtitle">СПИСОК ПРОЕКТОВ</h2>
            <button type="submit" className="btnProject">Добавить проект</button>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Projects;