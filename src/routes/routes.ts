import { lazy, LazyExoticComponent } from "react";
import { LazyPage1 } from "../01-lazyload/pages";
// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";
import { NoLazy } from '../01-lazyload/pages/NoLazy';

type JSXComponent = ()=> JSX.Element;

interface Route {
   to: string;
   path: string;
   component: LazyExoticComponent<JSXComponent> | JSXComponent;
   name: string;
}


const LazyLayout = lazy(()=> import(/* webpackChunkName: "LazyPage1" */ '../01-lazyload/layout/LazyLayout'));




export const routes: Route[] = [
   {
      path: '/lazyload/*',
      to: '/lazyload/',
      component: LazyLayout,
      name: 'LazyLayout -Dash'
   },
   {
      to: '/no-lazy',
      path: 'no-lazy',
      component: NoLazy,
      name: 'No Lazy'
   }  
   
  
]