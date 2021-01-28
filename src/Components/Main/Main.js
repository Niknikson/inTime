import React from 'react'
import './main.css'
import SideMenu from './sideMeny/sideMenu'
import ContentHeader from './comtentHeader/contentHeader'
import { BrowserRouter, Route } from "react-router-dom"
import AllDays from './Content/All/AllDays'
import Today from './Content/Today/Today'
import Test from './Content/Test/Test'

const Main = () => {
    
    return (
        <div className="wrapper">
          <BrowserRouter>
            <SideMenu />
            <ContentHeader />
            <div className="content">
              <Route path="/alldays" render={() => <AllDays />} />
              <Route path="/today" render={() => <Today />} />
              <Route path="/test" render={() => <Test />} />
            </div>
          </BrowserRouter>
        </div>
    );
}

export default  Main;