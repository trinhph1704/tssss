import { createRoute } from '@tanstack/react-router'
import { Route as rootRoute } from './__root'
import AddRepairPage from '../pages/repair/add'

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/repair-add',
  component: AddRepairPage,
}) 