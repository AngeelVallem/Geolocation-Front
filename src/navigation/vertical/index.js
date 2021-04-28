import {MapPin, MessageSquare, CheckSquare,
  Calendar,
  Grid,
  Settings,
  Octagon,
  Bell
  } from 'react-feather'

export default [
  {
    id: 'liveMap',
    title: 'Mapa en vivo',
    icon: <MapPin size={20} />,
    navLink: '/home'
  },
  {
    id: 'mapPath',
    title: 'Recorrido',
    icon: <MessageSquare size={20} />,
    navLink: '/mapPath'
  },
  {
    id: 'metrics',
    title: 'Métricas',
    icon: <CheckSquare size={20} />,
    navLink: '/metrics'
  },
  {
    id: 'alerts',
    title: 'Alertas',
    icon: <Bell size={20} />,
    navLink: '/alerts'
  },
  {
    id: 'geocaching',
    title: 'Geocercas',
    icon: <Octagon size={20} />,
    navLink: '/geocaching'
  },
  {
    id: 'settings',
    title: 'Configuración',
    icon: <Settings size={20} />,
    navLink: '/settings'
  }
]
