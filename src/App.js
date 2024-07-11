import './App.css';

// import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import Notes from './components/Notes';
import Home from './components/Home';
import LoadingBar from 'react-top-loading-bar'
import {
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";


// const router = createBrowserRouter([
//   { path: "/", Component: Navbar },
//   { path: "/", Component: News },
//   {path:"*", Component:Root},
// ]);
const router = createBrowserRouter([
  { path: "/*", Component: Root },
]);


export default function App(){
  return <RouterProvider router={router}/>;
}

    function Root() {
 
    return (
      <div>
       
        <Navbar />
        
        <LoadingBar
        color='#f11946'
        progress={100}
      />
      
        <Routes>
        <Route key="home" path='*' element={<Home />}></Route>
            <Route key="general" path='/general' element={<News key='general' pageSize={6} country='in' category='general' />}></Route>
            <Route key="business" path='/business' element={<News key='business' pageSize={6} country='in' category='business' />}></Route>
            <Route key="entertainment" path='/entertainment' element={<News key='entertainment' pageSize={6} country='in' category='entertainment' />}></Route>
            <Route key="health" path='/health' element={<News key='health' pageSize={6} country='in' category='health' />}></Route>
            <Route key="science" path='/science' element={<News key='science' pageSize={6} country='in' category='science' />}></Route>
            <Route key="sports" path='/sports' element={<News key='sports' pageSize={6} country='in' category='sports' />}></Route>
            <Route key="technology" path='/technology' element={<News key='technology' pageSize={6} country='in' category='technology' />}></Route>
            <Route key="todo" path='/notes' element={<Notes/>} ></Route>

        </Routes>

      </div>
    )
  }









// export default class App extends Component {
 
 
  
// render()  {
//     return (
//       <div>
//         <Navbar/>
//         <Routes>
//         <Route exact path="/" element={<News key="general" pageSize={9} country="in" category="general"/>}/>
//         {/* const router = createBrowserRouter([
//           {

// <Route exact path="/" element={<News key="general" pageSize={9} country="in" category="general"/>}/>


//             path= "/",
//             element=  <News pageSize={5} country="in" category="science"/>,
//           } */}
//         {/* ]); */}
//         </Routes>
//       </div>
//     )
//   }

// }
