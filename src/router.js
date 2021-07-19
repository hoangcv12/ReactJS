import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from './components/footer';
import Nav from './components/nav';
import Indexproduct from './pages/products';

export default function router(props) {
    return (
        <Router>
<div id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="absolute" data-header-position="absolute" data-boxed-layout="full">
<Nav/>
<Switch>
    <Route path="/home">
    <Indexproduct {...props}/>
    </Route>
</Switch>

<Footer/>
</div>
        </Router>
        
    )
}
