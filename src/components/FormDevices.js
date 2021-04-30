import React from 'react'
import {
    Card,
    CardHeader,
    CardTitle,
    CardBody,
    FormGroup,
    Row,
    Col,
    Input,
    Form,
    Button,
    Label
  } from "reactstrap"
  import { X } from 'react-feather'

  import '../assets/scss/style.css'

const FormDevices = (props) => {

const {formTitle} = props

    return (
          <div className="d-flex justify-content-center">
          <Card>
               <X onClick={() => {
                 location.reload()
               }} className="align-self-end click mt-2 mr-2"/>
           <h1 className="ml-2 pt-2 text-dark"> {formTitle} </h1> 
        <Form className="d-flex p-1">
            <div className="mr-5">
            <FormGroup >
            <Label for="exampleEmail">Dispositivo</Label>
            <Input
            className="fixed-input"
                placeholder="Device name"
              type="text"
              name="device"
            />
          </FormGroup>
          <FormGroup className="">
            <Label for="exampleEmail">Marca</Label>
            <Input
              type="text"
              name="brand"
            />
          </FormGroup>
          <FormGroup className="">
            <Label for="exampleEmail">Placas</Label>
            <Input
              type="text"
              name="plates"
            />
          </FormGroup>
          <FormGroup className="">
            <Label for="exampleEmail">VIN</Label>
            <Input
              type="text"
              name="vin"
            />
          </FormGroup>
          <FormGroup className="">
            <Label for="exampleEmail">Tipo de vehiculo</Label>
            <Input
              type="text"
              name="type"
            />
          </FormGroup>
            <Button color="primary">
                Agregar
            </Button>
            </div>
            <div>
            <FormGroup className="">
            <Label for="exampleEmail">Nombre</Label>
            <Input
            className="fixed-input"
              type="text"
              name="name"
            />
          </FormGroup>
          <FormGroup className="">
            <Label for="exampleEmail">Modelo</Label>
            <Input
              type="text"
              name="model"
            />
          </FormGroup>
          <FormGroup className="">
            <Label for="exampleEmail">Versíon</Label>
            <Input
              type="text"
              name="version"
            />
          </FormGroup>
          <FormGroup className="">
            <Label for="exampleEmail">Póliza</Label>
            <Input
              type="text"
              name="polixy"
            />
          </FormGroup>
            </div>
        </Form>
        </Card>
      </div>
    )
}


export default FormDevices