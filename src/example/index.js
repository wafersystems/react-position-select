import React from 'react';
import ReactDOM from 'react-dom';
import PositionSelect from '../components/PositionSelect';
import PosModel from '../components/PosModel';
// import {PositionSelect,PosModel} from "../tmp/index";

import { spaceTree, spaceTree2, space3, initData,init2 } from '../mockData';
import 'antd-mobile/dist/antd-mobile.css';

ReactDOM.render(<div className="App"
                     style={{ 'padding': '10px', 'margin': '10px', height: '100%' }}>
  <header className="App-header">
    <h1 className="App-title">Welcome to React</h1>
  </header>
  <p className="App-intro">
    To get started, edit <code>src/App.js</code> and save to reload.
  </p>
  <div style={{ height: '500px' }}>
    <PositionSelect spaceTree={space3} defaultValue={init2}  onChange={e=>console.log(e)} showPositionSelect={true}/>
    {/*<PosModel spaceTree={space3} spaceTree1={spaceTree2} defaultValue={init2}  onChange={e=>console.log(e)} showPositionSelect={true}/>*/}
  </div>
</div>, document.getElementById('root'));
