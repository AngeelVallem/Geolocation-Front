import { Fragment, useState } from "react"
import {
  Card,
  Table,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap"
import DataTableCustom from "../components/dataTable"

import DrawMap from '../components/drawMap'
import Select from "react-select"
import Breadcrumbs from '@components/breadcrumbs'
import FormGeocaching from '../components/Form'


import "../assets/scss/style.css"

const Geocaching = () => {
  const [toggle, setToggle] = useState(false)

  const toggleForm = () => {
    setToggle(!toggle)
  }
  return (
    <div className="d-flex flex-column">
      <Breadcrumbs breadCrumbTitle='Geofences' breadCrumbParent2={false} breadCrumbParent3={false}/>
      {toggle === false ? (
        <div>
          <div className="d-flex justify-content-end mb-3">
            <Button onClick={toggleForm} color="primary">
              Agregar
            </Button>
          </div>
          <DataTableCustom />
        </div>
      ) : (
        <Card className="p-2">
          <div className="row">
          <FormGeocaching/>
            <DrawMap/>
          </div>
        </Card>
      )}
    </div>
  )
}

export default Geocaching
