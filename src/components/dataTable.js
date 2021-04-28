import React, { useState } from 'react'
import axios from 'axios'

import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Badge,
  Input,
  Button,
  Media,
  CustomInput,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  UncontrolledTooltip
} from "reactstrap"
import DataTable from "react-data-table-component"
import {
  Eye,
  TrendingUp,
  Send,
  MoreVertical,
  Download,
  Edit,
  Trash,
  Copy,
  CheckCircle,
  Check,
  Save,
  ArrowDownCircle,
  Info,
  PieChart,
  ToggleLeft
} from "react-feather"
import Avatar from '@components/avatar'
import { Link } from 'react-router-dom'

class DataTableCustom extends React.Component {

  componentDidMount() {
    const accessToken = localStorage.getItem('accessToken')
    axios.get(`http://localhost:3000/geofences?token=${accessToken}`).then((response) => {
      console.log(response.data)
      this.setState({ data: response.data })
    })
  }

  toggleModal = id => {
    this.setState({modal:!this.state.modal})
  }

  deactivate() {
    alert()
  }

  state = {
    columns: [
      {
        name: "Nombre",
        selector: "name",
        sortable: true,
        minWidth: "200px",
        cell: row => (
          <div className="d-flex flex-xl-row flex-column align-items-xl-center align-items-start py-xl-0 py-1">
            <div className="user-img ml-xl-0 ml-2">
              <div className="user-info text-truncate ml-xl-50 ml-0">
                <small title={row.name}>{row.name}</small>
              </div>
            </div>
          </div>
        )
      },
      {
        name: "Descripcion",
        selector: "desc",
        sortable: true,
        cell: row => <p className="text-bold-500 mb-0">{row.shape.type}</p>
      },
      {
        name: "Activo",
        selector: "active",
        sortable: true,
        cell: row => (
          <span>
            <Avatar content={<Check />} color="light-success" />
          </span>
        )
      },
      {
        name: 'Action',
        minWidth: '110px',
        selector: '',
        sortable: true,
        cell: row => (
          <div className='column-action d-flex align-items-center'>
            <Link to={`/apps/invoice/preview/${row.id}`} id={`pw-tooltip-${row.id}`}>
              <Eye size={17} className='mx-1' />
            </Link>
            <UncontrolledTooltip placement='top' target={`pw-tooltip-${row.id}`}>
              Preview
            </UncontrolledTooltip>
            <UncontrolledDropdown>
              <DropdownToggle tag='span'>
                <MoreVertical size={17} className='cursor-pointer' />
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem onClick={e => this.deactivate()}>
                  <ToggleLeft size={14} className='mr-50' />
                  <span className='align-middle'>Desactivar</span>
                </DropdownItem>
                <DropdownItem tag={Link} to={`/apps/invoice/edit/${row.id}`} className='w-100'>
                  <Edit size={14} className='mr-50' />
                  <span className='align-middle'>Edit</span>
                </DropdownItem>
                <DropdownItem
                  className='w-100'
                  onClick={() => { this.toggleModal() }}
                >
                  <Trash size={14} className='mr-50' />
                  <span className='align-middle'>Delete</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </div>
        )
      }
    ],
    data: [],
    filteredData: [],
    value: "",
    modal: false
  }

  handleFilter = e => {
    const value = e.target.value
    const data = state.data
    let filteredData = state.filteredData
    setState({ value })

    if (value.length) {
      filteredData = data.filter(item => {
        const startsWithCondition =
          item.name.toLowerCase().startsWith(value.toLowerCase()) ||
          item.date.toLowerCase().startsWith(value.toLowerCase()) ||
          item.email.toLowerCase().startsWith(value.toLowerCase()) ||
          item.revenue.toLowerCase().startsWith(value.toLowerCase()) ||
          item.status.toLowerCase().startsWith(value.toLowerCase())
        const includesCondition =
          item.name.toLowerCase().includes(value.toLowerCase()) ||
          item.date.toLowerCase().includes(value.toLowerCase()) ||
          item.email.toLowerCase().includes(value.toLowerCase()) ||
          item.revenue.toLowerCase().includes(value.toLowerCase()) ||
          item.status.toLowerCase().includes(value.toLowerCase())

        if (startsWithCondition) {
          return startsWithCondition
        } else if (!startsWithCondition && includesCondition) {
          return includesCondition
        } else return null
      })
      setState({ filteredData })
    }
  }

  render() {
    const { data, columns, value, filteredData, modal } = this.state
    return (
      <Card>
        <CardHeader>
          <CardTitle tag='h4'>Geocercas </CardTitle>
        </CardHeader>
        <DataTable
          className="dataTable-custom"
          data={value.length ? filteredData : data}
          columns={columns}
          noHeader
          pagination
          subHeader
          highlightOnHover
        />
        <div className={`theme-modal-danger`} >
          <Modal
            isOpen={modal}
            className='modal-dialog-centered'
            modalClassName={'modal-danger'}
          >
            <ModalHeader>{'Warning'}</ModalHeader>
            <ModalBody>
              Estas seguro que deseas elimiar la geocerca seleccionada?.
          </ModalBody>
            <ModalFooter>
              <Button color={"danger"} >
                Accept
              </Button>
              <Button color={"neutral"} onClick={ () => { this.toggleModal() } }>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      </Card>
    )
  }
}

export default DataTableCustom
