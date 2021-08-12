import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Adminlayout from './layout/adminlayout';
import Indexproduct from './pages/admin/products/index';
import AddP from './pages/admin/products/add';
import EditP from './pages/admin/products/edit';
import HomeP from './components/admin/home';
import Homeweb from './components/web/home';
import Signin from './pages/web/signin';
import Signup from './pages/web/signup';
import AdminRoute from './auth/adminRoute';
import Weblayout from './layout/weblayout';
import ProductsWeb from 'pages/web/products';
import Detailproducts from 'pages/web/detail_products';
import Indexcategory from 'pages/admin/categorys';
import AddC from 'pages/admin/categorys/add';
import EditC from 'pages/admin/categorys/edit';
import ProductsWebcate from 'pages/web/productcate';
import Addcart from 'pages/web/addcart';

export default function router() {
    return (
        <Router>
            <Switch>
                <AdminRoute path="/admin/:path?">
                    <Adminlayout>
                        <Switch>
                            <Route exact path="/admin/products">
                                <Indexproduct  />
                            </Route>
                            <Route exact path="/admin/products/add">
                                <AddP />
                            </Route>
                            <Route exact path="/admin/products/:id/edit">
                                <EditP  />
                            </Route>
                            <Route exact path="/admin">
                                <HomeP />
                            </Route>
                            <Route exact path="/admin/categorys">
                                <Indexcategory/>
                            </Route>
                            <Route exact path="/admin/categorys/add">
                                <AddC />
                            </Route>
                            <Route exact path="/admin/categorys/:id/edit">
                                <EditC/>
                            </Route>
                        </Switch>
                    </Adminlayout>
                </AdminRoute>
               
                    <Weblayout >
                    <Switch>
                    <Route exact path="/"  >
                                <Homeweb />
                            </Route>
                        <Route exact path="/signin">
                            <Signin></Signin>
                        </Route>
                        <Route exact path="/signup">
                            <Signup></Signup>
                        </Route>
                        <Route exact path="/products">
                            <ProductsWeb></ProductsWeb>
                        </Route>
                        <Route exact path="/products/:id">
                            <ProductsWebcate></ProductsWebcate>
                        </Route>
                        <Route exact path="/products/:id/detail">
                            <Detailproducts></Detailproducts>
                        </Route>
                        <Route exact path="/addcart">
                            <Addcart></Addcart>
                        </Route>
                    </Switch>
                    </Weblayout>
               
            </Switch>
        </Router>

    )
}
