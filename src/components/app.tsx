import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from 'react-router-dom'
import { HomeRoute } from './routes/home' //earlier I talked about the @routes path alias in the TSConfig, this is an example of using it.  It's a short cut so you don't have to folder drill with ../../ etc all over your app.

export const App = (): React.ReactElement => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Outlet />}>
          <Route path="/" element={<HomeRoute />} />
        </Route>
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </BrowserRouter>
  )
}
