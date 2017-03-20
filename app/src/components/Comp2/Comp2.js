'use strict';
import React from 'react';
import Link from 'react-router-dom/es/Link';
import 'bootstrap/dist/css/bootstrap-theme.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './Comp2.scss';
const Comp2 = () => <h2><Link to="/"><button className="btn btn-success">
  <i className="fa fa-eercast" aria-hidden="true"/>
</button></Link></h2>;
export default Comp2;