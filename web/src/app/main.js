// The app's entry point. Each file of src/app is an ES module that imports what it uses; esbuild bundles them
// from here into public/app.js. Only these three files run code when the page loads: app.js wires the shared
// clicks and loads the language pack, install.js the "add to home screen" prompt, connect.js waits for the
// account (runtime.js) and draws its data. Every other module only declares functions and values.
import "./app.js";
import "./install.js";
import "./connect.js";
