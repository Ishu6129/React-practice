import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Layout from './components/ReactRouter/Layout';
import About from './components/ReactRouter/About';
import Contact from './components/ReactRouter/Contact';
import Github,{githubInfoLoader} from './components/ReactRouter/Github.jsx';
import BgChange from './components/ChangeBg/BgChange';
import PassWordGenerator from './components/PassGenerator/PassWordGenerator';
import CNC from './components/CurrencyConverter/CNC';

// const routes = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       { index: true, element: <Home /> },
//       { path: 'about', element: <About /> },
//       { path: 'contact', element: <Contact /> },
//     ],
//   },
// ]);
const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Github />} loader={githubInfoLoader} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='background-changer' element={<BgChange />} />
      <Route path='password-generator' element={<PassWordGenerator />} />
      <Route path='currency-converter' element={<CNC />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
)
