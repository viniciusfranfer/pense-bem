import '../styles/App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Main';
import Quiz from './Quiz';
import Nivel1 from './Nivel1';
import Nivel2 from './Nivel2';
import Nivel3 from './Nivel3';
import Nivel4 from './Nivel4';
import Nivel5 from './Nivel5';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main ></Main>
  },
  {
    path: '/quiz',
    element: <Quiz></Quiz>
  },
  {
    path: '/quiz/nivel1',
    element: <Nivel1></Nivel1>
  },
  {
    path: '/quiz/nivel2',
    element: <Nivel2></Nivel2>
  },
  {
    path: '/quiz/nivel3',
    element: <Nivel3></Nivel3>
  },
  {
    path: '/quiz/nivel4',
    element: <Nivel4></Nivel4>
  },
  {
    path: '/quiz/nivel5',
    element: <Nivel5></Nivel5>
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
