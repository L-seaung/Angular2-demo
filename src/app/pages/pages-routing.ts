import { AboutComponent } from './component/about/about.component';


export const routes = [
  {
    path: '/about',
    component: AboutComponent,
    data: {
      title: 'About me'
    }
  }
];
