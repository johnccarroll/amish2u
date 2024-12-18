import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material/styles';
import MarketingPage from "./MarketingPage";

ReactDOM.createRoot(document.querySelector("#root")!).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <MarketingPage></MarketingPage>
    </StyledEngineProvider>
  </React.StrictMode>
);