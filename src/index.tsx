import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';

import ReactDOM from 'react-dom/client';
import {ThemeProvider} from '@gravity-ui/uikit';
import {RouterProvider} from "react-router-dom";
import router from './containers/app-container/app-container';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ThemeProvider theme="light">
    <RouterProvider router={router}/>
  </ThemeProvider>
);