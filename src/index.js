/*
 **  Index.js adds the Svelte components to the body of HTML frame
 */

import App from "./App.svelte";

const app = new App({
  target: document.body,
});

export default app;
