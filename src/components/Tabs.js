import React, {useState } from "react"
import classnames from 'classnames'
import { User, Lock } from 'react-feather'
import {TabContent, TabPane, Nav, NavItem, NavLink, Button} from "reactstrap"
import DataTableCustom from "./dataTableDevices"

import '../assets/scss/style.css'
import FormDevices from "./FormDevices"


const TabsVerticalRight = () => {

    const [toggleDevices, setToggleDevices] = useState(false)
    const [toggleScreen, setToggleScreen] = useState(false)

const [state, setState] = useState({
    active  : "1"
})

 const toggle = tab => {
    if (state.active  !== tab) {
        setState({ active : tab })
    }
  }

  const handlerScreen = () => {
      setToggleScreen(!toggleScreen)
  }


        return      (
    <div className="nav-vertical mt-1">
      <Nav tabs className="nav-left">
        <NavItem className="mb-2">
          <NavLink
            className={classnames({
              active : state.active  === "1"
            })}
            onClick={() => {
              toggle("1")
            }}
          >
              <User/>
            Dispositivos
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({
              active :   state.active  === "2"
            })}
            onClick={() => {
              toggle("2")
            }}
          >
              <Lock/>
           Responsables   
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={state.active }>
        <TabPane className="text-dark" tabId="1">
            {
              toggleDevices === false ? <DataTableCustom handler={toggleDevices} setHandler = {setToggleDevices}/> :  <FormDevices handler={toggleDevices} setHandler = {setToggleDevices} formTitle={"Editar Unidad"} /> 
            }
        </TabPane>
        <TabPane className="text-dark" tabId="2">
        {toggleScreen === false ? (
       <div className="d-flex flex-column">
         <div className="d-flex justify-content-end">
       <Button onClick={handlerScreen} className="mb-2" color="primary">
         Agregar
       </Button>
     </div>
     <DataTableCustom/> 
     </div>
      ) : (
        <FormDevices formTitle={"Agregar Unidad"}/>
      )}
        </TabPane>
    </TabContent>
  </div>
    )
  
}
export default TabsVerticalRight

