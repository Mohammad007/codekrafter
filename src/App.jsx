import './App.css';
import RouterPage from './main-components/RouterPage';
import React, {useEffect} from "react";
import ReactGa from 'react-ga';
import TagManager from 'react-gtm-module'

const tagManagerArgs = {
  gtmId: 'GTM-5M9Z4RM'
}
TagManager.initialize(tagManagerArgs)

function App() {
  useEffect(() => {
    ReactGa.initialize('UA-243832973-2')

    ReactGa.pageview(window.location.pathname + window.location.search)
  }, [])
  return (
    <div className="App">
     <RouterPage/>
    </div>
  );
}

export default App;