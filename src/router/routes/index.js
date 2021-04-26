import { lazy } from 'react'

// ** Document title
const TemplateTitle = '%s - Vuexy React Admin Template'

// ** Default Route
const DefaultRoute = '/home'

// ** Merge Routes
const Routes = [
  {
    path: '/home',
    component: lazy(() => import('../../views/Home'))
  },
  {
    path: '/mapPath',
    component: lazy(() => import('../../views/MapPath'))
  },
  {
    path: '/metrics',
    component: lazy(() => import('../../views/Metrics'))
  },
  {
    path: '/alerts',
    component: lazy(() => import('../../views/Alerts'))
  },
  {
    path: '/geocaching',
    component: lazy(() => import('../../views/Geocaching'))
  },
  {
    path: '/settings',
    component: lazy(() => import('../../views/Settings'))
  },
  {
    path: '/login',
    component: lazy(() => import('../../views/Login')),
    layout: 'BlankLayout',
    meta: {
      authRoute: true
    }
  },
  {
    path: '/error',
    component: lazy(() => import('../../views/Error')),
    layout: 'BlankLayout'
  }
]

export { DefaultRoute, TemplateTitle, Routes }
