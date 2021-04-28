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


import "../assets/scss/style.css"

const Geocaching = () => {
  const [toggle, setToggle] = useState(false)

  const toggleForm = () => {
    setToggle(!toggle)
  }

  const colourOptions = [
    { value: "ocean", label: "Ocean" },
    { value: "blue", label: "Blue" },
    { value: "purple", label: "Purple" },
    { value: "red", label: "Red" },
    { value: "orange", label: "Orange" }
  ]

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
        <Card>
          <div className="d-flex justify-content-between">
            <div className="d-flex flex-column p-2">
              <Select
                className="React select-form mb-1"
                classNamePrefix="select"
                defaultValue={colourOptions[0]}
                name="color"
                options={colourOptions}
              />
              <Form>
                <FormGroup>
                  <Label for="exampleEmail">Text</Label>
                  <Input
                    type="text"
                    name="text"
                    placeholder="with a placeholder"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleText">Text Area</Label>
                  <Input type="textarea" name="text" id="exampleText" placeholder="with a placeholder"/>
                </FormGroup>
                <Button onClick={() => {
                  window.location.reload()
                }} color="primary">Submit</Button>
              </Form>
            </div>
            <DrawMap/>
          </div>
        </Card>
      )}
    </div>
  )
}

export default Geocaching
