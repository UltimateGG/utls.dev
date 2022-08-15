import { generateColorsArray, JetDesign, Shade, Theme, themeDefault } from '@ultimategg/jetdesign';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './Home';


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const theme: Theme = {
  ...themeDefault,
  colors: {
    ...themeDefault.colors,
    primary: generateColorsArray('#6914d1', 9, Shade.DARKER),
  },
}

root.render(
  <React.StrictMode>
    <JetDesign theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </JetDesign>
  </React.StrictMode>
);
