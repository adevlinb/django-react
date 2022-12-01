import { createRoot } from 'react-dom/client';
import App from "./components/App";
import React from 'react';

function AppWithCallbackAfterRender() {
    return <App />
}

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<AppWithCallbackAfterRender />);
