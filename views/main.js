//@ts-ignore
import { createInertiaApp } from "inertia-adapter-solid";
import { render } from 'solid-js/web'
import "./app.css";

createInertiaApp({
  //@ts-ignore
  resolve(name) {
    const allPages = import.meta.glob('./src/**/*.jsx', { eager: true });
    const page = allPages[`./src/pages/${name}.jsx`];
    return page;
  },

  //@ts-ignore
  setup({ el, App, props }) {
    render(() => App({ ...props }), el)
  },
});
