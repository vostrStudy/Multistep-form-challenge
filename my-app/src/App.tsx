
import {HelmetProvider} from 'react-helmet-async';
import { Route, Routes } from 'react-router-dom';
import './App.scss';


import browserHistory from './browser-history';
import MainPage from './pages/main';
import HistoryRouter from './routes/history-route/history-route';
import { AppRoute } from './utils/utils';


function App() {
  return (
    <HelmetProvider>
      <HistoryRouter history ={browserHistory}>
        <Routes>
          <Route
            path = {AppRoute.Root}
            element = {<MainPage/>}
          />       
        </Routes>
      </HistoryRouter>

    </HelmetProvider>
  );
}
  

export default App;

