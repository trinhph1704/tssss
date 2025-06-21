import { createRoute } from '@tanstack/react-router'
import { Route as rootRoute } from './__root'
import RepairPage from '../pages/repair'

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/repair',
  component: RepairPage,
}) 