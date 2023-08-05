import React from 'react';
import AboutUs from 'pages/About-us/About-us';
import Cart from 'pages/Cart/Cart';
import Catalog from 'pages/Catalog/Catalog';
import Compare from 'pages/Compare/Compare';
import Contacts from 'pages/Contacts/Contacts';
import Credit from 'pages/Credit/Credit';
import Dropshipping from 'pages/Dropshipping/Dropshipping';
import Favorite from 'pages/Favorite/Favorite';
import Guarantee from 'pages/Guarantee/Guarantee';
import Home from 'pages/Home/Home';
import Product from 'pages/Product/Product';
import Profile from 'pages/Profile/Profile';
import Stocks from 'pages/Stocks/Stocks';
import View from 'pages/View/View';
import Unauthorized from 'ui/Unauthorized/Unauthorized';
import { path } from 'constants/path';
import { Route, Routes } from 'react-router-dom';
import { isAuth } from 'helpers/isAuth';

const Routing = () => {
  return (
    <Routes>
      <Route element={<Home />} path={path.home} />
      <Route element={<AboutUs />} path={path['about-us']} />
      <Route element={<Cart />} path={path.cart} />
      <Route element={<Catalog />} path={path.catalog} />
      <Route element={<Contacts />} path={path.contacts} />
      <Route element={<Credit />} path={path.credit} />
      <Route element={<Dropshipping />} path={path.dropshipping} />
      <Route element={<Guarantee />} path={path.guarantee} />
      <Route element={<Product />} path={path.product + ':id'} />
      <Route element={<Stocks />} path={path.stocks} />

      {isAuth() ? (
        <>
          <Route element={<Profile />} path={path.profile} />
          <Route element={<View />} path={path.view} />
          <Route element={<Favorite />} path={path.favorite} />
          <Route element={<Compare />} path={path.compare} />
        </>
      ) : (
        <>
          <Route element={<Unauthorized />} path={path.profile} />
          <Route element={<Unauthorized />} path={path.view} />
          <Route element={<Unauthorized />} path={path.favorite} />
          <Route element={<Unauthorized />} path={path.compare} />
        </>
      )}
    </Routes>
  );
};

export default Routing;
