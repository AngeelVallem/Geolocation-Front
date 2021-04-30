import React from "react"
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
import { Star, MoreVertical, Send, Eye } from "react-feather"
import '../assets/scss/style.css'


class DataTableCustom extends React.Component {
  state = {
    columns: [
      {
        name: "ID",
        selector: "id",
        sortable: true,
        minWidth: "200px",
        cell: row => (
          <div className="d-flex flex-xl-row flex-column align-items-xl-center align-items-start py-xl-0 py-1">
            <div className="user-info text-truncate ml-xl-50 ml-0">
              <span
                title={row.name}
                className="d-block text-bold-500 text-truncate mb-0">
                {row.name}
              </span>
              <small title={row.email}>{row.email}</small>
            </div>
          </div>
        )
      },
      {
        name: "UNIDAD",
        selector: "unidad",
        sortable: true,
        cell: row => (
          <p className="text-bold-500 text-truncate mb-0">{row.date}</p>
        )
      },
      {
        name: "RESPONSABLE",
        selector: "responsable",
        sortable: true,
        cell: row => <p className="text-bold-500 mb-0">{row.revenue}</p>
      },
      {
        name: "ACCIONES",
        selector: "actions",
        sortable: false,
        cell: row => {
          return (
             <div>
            <Send/>
            <Eye className="mx-3"/>
            <MoreVertical className="click" onClick={() => {
              this.props.setHandler(!this.props.handler)
              console.log(this.props.handler)
            }}/>
             </div>
          )
        }
      }
    ],
    data: [
      {
        name: "angel Lillecrop",
        email: "alillecrop0@twitpic.com",
        date: "May 13, 2018",
        status: "active",
        revenue: "$32,000",
        ratings: "good"
      },
      {
        name: "Shep Pentlow",
        email: "spentlow1@home.pl",
        date: "June 5, 2019",
        status: "active",
        revenue: "$50,000",
        ratings: "good"
      },
      {
        name: "Gasper Morley",
        email: "gmorley2@chronoengine.com",
        date: "December 24, 2019",
        status: "active",
        revenue: "$78,000",
        ratings: "average"
      },
      {
        name: "Phaedra Jerrard",
        email: "pjerrard3@blogs.com",
        date: "November 30, 2018",
        status: "inactive",
        revenue: "$10,000",
        ratings: "bad"
      },
      {
        name: "Conn Plose",
        email: "cplose4@geocities.com",
        date: "April 8, 2017",
        status: "active",
        revenue: "$22,000",
        ratings: "average"
      },
      {
        name: "Tootsie Brandsma",
        email: "tbrandsma5@theatlantic.com",
        date: "August 12, 2019",
        status: "inactive",
        revenue: "$49,000",
        ratings: "bad"
      },
      {
        name: "Sibley Bum",
        email: "sbum6@sourceforge.net",
        date: "October 1, 2017",
        status: "active",
        revenue: "$56,000",
        ratings: "good"
      },
      {
        name: "Kristoffer Thew",
        email: "kthew7@amazon.com",
        date: "February 28, 2018",
        status: "inactive",
        revenue: "$83,000",
        ratings: "bad"
      },
      {
        name: "Fay Hasard",
        email: "fhasard8@java.com",
        date: "January 29, 2018",
        status: "active",
        revenue: "$26,000",
        ratings: "good"
      },
      {
        name: "Tabby Abercrombie",
        email: "tabercrombie9@statcounter.com",
        date: "April 1, 2019",
        status: "active",
        revenue: "$60,000",
        ratings: "average"
      },
      {
        name: "Stella Indruch",
        email: "sindruch1@mayoclinic.com",
        date: "Dec 4, 2019",
        status: "active",
        revenue: "$21,000",
        ratings: "good"
      },
      {
        name: "Aron McNirlin",
        email: "amcnirlin2@samsung.com",
        date: "Jan 4, 2018",
        status: "inactive",
        revenue: "$30,000",
        ratings: "bad"
      },
      {
        name: "Ange Trenholm",
        email: "atrenholm4@slideshare.net",
        date: "February 23, 2019",
        status: "active",
        revenue: "$12,000",
        ratings: "good"
      },
      {
        name: "Caterina Starkie",
        email: "cstarkie5@feedburner.com",
        date: "September 8, 2018",
        status: "active",
        revenue: "$40,000",
        ratings: "average"
      },
      {
        name: "Hugibert McGeagh",
        email: "hmcgeaghf@smh.com.au",
        date: "August 20, 2017",
        status: "active",
        revenue: "$90,000",
        ratings: "good"
      },
      {
        name: "Jaime Maher",
        email: "jmaher1@msu.edu",
        date: "April 7, 2019",
        status: "active",
        revenue: "$38,000",
        ratings: "good"
      },
      {
        name: "Amalle Pladen",
        email: "jmaher1@msu.edu",
        date: "March 30, 2018",
        status: "active",
        revenue: "$18,000",
        ratings: "average"
      },
      {
        name: "Dorris Ferries",
        email: "dferries7@ucoz.com",
        date: "August 25, 2017",
        status: "active",
        revenue: "$69,000",
        ratings: "bad"
      },
      {
        name: "Andy Fettes",
        email: "afettesh@upenn.edu",
        date: "September 30, 2017",
        status: "inactive",
        revenue: "$35,000",
        ratings: "good"
      },
      {
        name: "Allene Hughf",
        email: "ahughf0@dropbox.com",
        date: "June 21, 2018",
        status: "active",
        revenue: "$35,000",
        ratings: "good"
      },
      {
        name: "Petra Rheubottom",
        email: "prheubottom0@globo.com",
        date: "July 4, 2018",
        status: "active",
        revenue: "$72,000",
        ratings: "good"
      },
      {
        name: "Ambrosius Olyfant",
        email: "aolyfant1@timesonline.co.uk",
        date: "May 5, 2019",
        status: "inactive",
        revenue: "$13,000",
        ratings: "bad"
      },
      {
        name: "Letti Trineman",
        email: "ltrineman2@cnbc.com",
        date: "February 15, 2017",
        status: "active",
        revenue: "$84,000",
        ratings: "average"
      },
      {
        name: "Sayer Rodger",
        email: "srodgerb@rakuten.co.jp",
        date: "January 30, 2018",
        status: "inactive",
        revenue: "$15,000",
        ratings: "bad"
      },
      {
        name: "Skyler Scotcher",
        email: "sscotcher3@soup.io",
        date: "November 3, 2018",
        status: "active",
        revenue: "$26,000",
        ratings: "average"
      },
      {
        name: "Florette Shotbolt",
        email: "fshotbolt7@wiley.com",
        date: "March 12, 2017",
        status: "active",
        revenue: "$69,000",
        ratings: "good"
      },
      {
        name: "Janis Bakhrushkin",
        email: "jbakhrushkina@epa.gov",
        date: "July 10, 2017",
        status: "active",
        revenue: "$65,000",
        ratings: "good"
      },
      {
        name: "Alric Peinton",
        email: "apeinton0@google.cn",
        date: "February 6, 2017",
        status: "inactive",
        revenue: "$38,000",
        ratings: "bad"
      },
      {
        name: "Rubie Pitkethly",
        email: "rpitkethlyf@51.la",
        date: "February 20, 2018",
        status: "active",
        revenue: "$62,000",
        ratings: "average"
      },
      {
        name: "Hortensia Soaper",
        email: "hsoaperh@mapy.cz",
        date: "June 1, 2017",
        status: "active",
        revenue: "$60,000",
        ratings: "good"
      }
    ],
    filteredData: [],
    value: ""
  }

  handleFilter = e => {
    const value = e.target.value
    const data = this.state.data
    let filteredData = this.state.filteredData
    this.setState({ value })

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
      this.setState({ filteredData })
    }
  }

  render() {
    const { data, columns, value, filteredData } = this.state
    return (
          <DataTable
            className="dataTable-custom"
            data={value.length ? filteredData : data}
            columns={columns}
            noHeader
            pagination
          />
    )
  }
}

export default DataTableCustom
