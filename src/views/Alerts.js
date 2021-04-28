import DataTableCustom from '../components/dataTableNotifications'
import { Fragment } from 'react'
import Breadcrumbs from '@components/breadcrumbs'


const Alerts = () => {
  return (
    <Fragment>
    <Breadcrumbs breadCrumbTitle='Alertas' breadCrumbParent2={false} breadCrumbParent3={false}/>
    <DataTableCustom/>
    </Fragment>
  )
}

export default Alerts
