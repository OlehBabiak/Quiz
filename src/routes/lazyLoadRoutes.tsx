import React, { FC, ReactNode, Suspense } from 'react';

export const lazyLoadRoutes = (componentName: string): ReactNode => {
  const LazyElement: FC = () => {
    const Component = React.lazy(
      () => import(`../pages/${componentName}/index.ts`)
    );
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Component />
      </Suspense>
    );
  };

  return <LazyElement />;
};
