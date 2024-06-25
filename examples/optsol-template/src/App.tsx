import { RouterProvider } from 'react-router-dom';
import AppProviders from './App.providers';
import { router } from './routes/index.routes';

export default function App() {
  return (
    <AppProviders>
      <RouterProvider router={router} />
    </AppProviders>
  );
}
