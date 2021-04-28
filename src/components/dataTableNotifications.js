import React from "react"
import axios from 'axios'

import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Badge,
  Input,
  Button
} from "reactstrap"
import DataTable from "react-data-table-component"
import { Star, Search, AlertTriangle } from "react-feather"
import Avatar from '@components/avatar'


class DataTableCustom extends React.Component {

  componentDidMount() {
   const accessToken = localStorage.getItem('accessToken')
   axios.get(`http://localhost:3000/notifications?token=${accessToken}`).then((response) => {
    console.log(response.data)
    this.setState({data:response.data})
   })
  }

  state = {
    columns: [
      {
        name: "Descripcion",
        selector: "desc",
        sortable: true,
        cell: row => <p className="text-bold-500 mb-0"><Avatar content={<AlertTriangle size={14}/>} color="light-warning"/>{row.desc}</p>
      },
      {
        name: "Fecha",
        selector: "updatedAt",
        sortable: true,
        minWidth: "200px",
        cell: row => (
          <div className="d-flex flex-xl-row flex-column align-items-xl-center align-items-start py-xl-0 py-1">
            <div className="user-img ml-xl-0 ml-2">
            <div className="user-info text-truncate ml-xl-50 ml-0">
              <span title={row.updatedAt} className="d-block text-bold-500 text-truncate mb-0">{row.updatedAt} </span>
              <small title={row.email}>{row.email}</small>
            </div>
          </div>
          </div>
        )
      },
      {
        name: "IMEI",
        selector: "imei",
        sortable: true,
        cell: row => (
          <span>
            <p className="text-bold-500 mb-0">{row.device.alias}</p>
            <p className="text-bold-500 mb-0">{row.device.imei}</p>
          </span>
          )
      }
    ],
    data: [],
    filteredData: [],
    value: ""
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
        const  includesCondition =
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
    const { data, columns, value, filteredData } = this.state
    return (
      <Card>
      <CardHeader>
        <CardTitle tag='h4'>Alertas </CardTitle>
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
          </Card>
    )
  }
}

export default DataTableCustom
