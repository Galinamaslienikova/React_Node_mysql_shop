import React from 'react';
import { Route, Switch } from 'react-router';
import CategoryProducts from './Pages/CategoryProducts';
import  ClientOrder  from './Pages/Client/ClientOrder';
import ClientPage from './Pages/Client/ClientPage';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register'
import ProductDetails from './Pages/ProductDetails';
import OrderMaker from './Pages/Client/OrderMaker';
import StartPage from './Pages/StartPage';
import TypeProducts from './Pages/TypeProducts';
import ErrorBoundary from './Pages/ErrorBoundary';


function App() {
  return (
   <Switch>
      <Route path="/login">  
      <ErrorBoundary>
        <Login />
        </ErrorBoundary>
      </Route>
      <Route path="/type/:categoryName/page:id">  
      <ErrorBoundary>
        <TypeProducts />
        </ErrorBoundary>
      </Route>
      <Route path="/register">  
      <ErrorBoundary>
        <Register />
        </ErrorBoundary>
      </Route>
      <Route path="/clientPage/:id_client/order/:id_order">  
      <ErrorBoundary>
        <ClientOrder/>
        </ErrorBoundary>
      </Route>
      <Route path="/clientPage/:id_client/order">  
      <ErrorBoundary>
        <OrderMaker />
        </ErrorBoundary>
      </Route>
      <Route path="/clientPage/:id_client">
      <ErrorBoundary>  
        <ClientPage />
        </ErrorBoundary>
      </Route>
      <Route path="/category/:categoryName/page:id">
      <ErrorBoundary>
        <CategoryProducts />
        </ErrorBoundary>
      </Route>
      <Route path="/product/:productId">
      <ErrorBoundary>
    <ProductDetails />
    </ErrorBoundary>
        </Route>
     <Route path='/page:id'>
     <ErrorBoundary>
     <Home/>
     </ErrorBoundary>
     </Route>
     <Route path='/'>
     <StartPage/>
     </Route>
   </Switch>
      
    
  );
}

export default App;
