import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import LoadingSpinner from '@/components/LoadingSpinner';
import PrivateRoute from '@/components/PrivateRoute';

const Home = lazy(() => import('@/pages/Home'));
const Profile = lazy(() => import('@/pages/Profile'));
const NotFound = lazy(() => import('@/pages/NotFound'));

const AppRoutes = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        {/* <Route element={<Layout />}> */}
          <Route path="/" element={<Home />} />

          <Route path="/profile" element={<PrivateRoute />}>
            <Route path="" element={<Profile />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        {/* </Route> */}
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
