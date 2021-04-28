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
import Select from "react-select"
import "../assets/scss/style.css"

const FormGeocaching = () => {

    const colourOptions = [
        { value: "ocean", label: "Ocean" },
        { value: "blue", label: "Blue" },
        { value: "purple", label: "Purple" },
        { value: "red", label: "Red" },
        { value: "orange", label: "Orange" }
      ]

    return (

        <div className="col-12 col-md-6">
            <h1 className="mb-1">Agregar Geocerca</h1>
        <Form className="formGeo">
        <Select
          className="React select-form mb-1"
          classNamePrefix="select"
          defaultValue={colourOptions[0]}
          name="color"
          options={colourOptions}
        />
          <FormGroup className="my-2">
            <Label for="exampleEmail">Nombre</Label>
            <Input
              type="text"
              name="text"
            />
          </FormGroup>
          <FormGroup className="my-2">
            <Label for="exampleText">Descripción (opcional)</Label>
            <Input type="textarea" name="text" id="exampleText"/>
          </FormGroup>
          <Button onClick={(e) => {
            e.preventDefault()
            window.location.reload()
          }} color="primary">Agregar</Button>
        </Form>
      </div>

)
 }

    export default FormGeocaching