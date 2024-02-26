import { ReactNode } from 'react';
import { lazyLoadRoutes } from './lazyLoadRoutes';

export interface IRoute {
  path: string;
  component: ReactNode;
  exact?: boolean;
}

export enum RouteNames {
  START_PAGE = '/startPage',
  IDENTIFY = '/identify',
  AGE = '/age',
  ABOUT_BOOKS = '/about-books',
  TOPICS = '/topics',
  LOADING = '/loading',
  EMAIL = '/email',
  RESULT = '/result',
}

export const privateRoutes: IRoute[] = [
  {
    path: RouteNames.START_PAGE,
    component: lazyLoadRoutes('start-page'),
  },
  {
    path: RouteNames.IDENTIFY,
    component: lazyLoadRoutes('identify-page'),
  },
  {
    path: RouteNames.AGE,
    component: lazyLoadRoutes('age-page'),
  },
  {
    path: RouteNames.ABOUT_BOOKS,
    component: lazyLoadRoutes('about-books-page'),
  },
  {
    path: RouteNames.TOPICS,
    component: lazyLoadRoutes('topics-page'),
  },
  {
    path: RouteNames.LOADING,
    component: lazyLoadRoutes('loading-page'),
  },
  {
    path: RouteNames.EMAIL,
    component: lazyLoadRoutes('email-page'),
  },
  {
    path: RouteNames.RESULT,
    component: lazyLoadRoutes('result-page'),
  },
];
