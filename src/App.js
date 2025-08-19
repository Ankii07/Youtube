import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Body from './Components/Body';
import { createContext, useState } from 'react';
import ContextProvider from './Context/ContextProvider';
import { Provider } from 'react-redux';
import store from './utils/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainContainer from './Components/MainContainer';
import WatchPage from './Components/WatchPage';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body/>,
    children: [
       {
        path: "/",
        element: <MainContainer/>
       },
       {
        path: "/watch",
        element: <WatchPage/>
       }
    ]
  }
]);

function App() {
  const MyContext = createContext(null);
  

  return (
    <Provider store={store}>
    <div className="App">
      <Header/>
      <RouterProvider router={appRouter}/>

      {/* <Body/> */}
       
      {/*
         Head
         Body
           Sidebar
             MenuItems
           MainContainer
             ButtonList 
             VideoContainer
               VideoCard
       */}
    </div>
    </Provider>
    
  );
  
}


export default App;
