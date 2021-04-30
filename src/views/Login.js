import { useSkin } from '@hooks/useSkin'
import React, { useState, useRef, Fragment } from 'react'
import Avatar from '@components/avatar'
import { Link, Redirect, useHistory } from 'react-router-dom'
import { toast, Slide } from 'react-toastify'
import { Facebook, Twitter, Mail, GitHub, LogIn, Coffee } from 'react-feather'
import InputPasswordToggle from '@components/input-password-toggle'
import { Row, Col,
   CardTitle,
    CardText,
    Form,
    FormGroup,
    Label,
    Input,
    CustomInput,
    Button } 
    from 'reactstrap'
import '@styles/base/pages/page-auth.scss'
import useJwt from '../auth/jwt/useJwt'
import LOGO from '../assets/images/logo/bfbl.png'
import '../assets/scss/style.css'

const ToastContent = ({ name, role }) => (
  <Fragment>
    <div className='toastify-header'>
      <div className='title-wrapper'>
        <Avatar size='sm' color='success' icon={<Coffee size={12} />} />
        <h6 className='toast-title font-weight-bold'>Welcome, {name}</h6>
      </div>
    </div>
    <div className='toastify-body'>
      <span>You have successfully logged in as an {role} user. Now you can start to explore. Enjoy!</span>
    </div>
  </Fragment>
)

const ErrorToastContent = ({ title, content }) => (
  <Fragment>
    <div className='toastify-header'>
      <div className='title-wrapper'>
        <Avatar size='sm' color='error' icon={<LogIn size={12} />} />
        <h6 className='toast-title font-weight-bold'>{title}</h6>
      </div>
    </div>
    <div className='toastify-body'>
      <span>{content}</span>
    </div>
  </Fragment>
)

const Login = () => {
  const [skin, setSkin] = useSkin()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const loginForm = useRef(null)
  const history = useHistory()

  const illustration = skin === 'dark' ? 'login-v2-dark.svg' : 'login-v2.svg',
    source = require(`@src/assets/images/pages/${illustration}`).default
    const login = (email, password) => {
          useJwt.login({
            email,
            password
          })
            .then(response => {
              if (response.status === 200) {
                const { userData } = response.data
                useJwt.setToken(response.data.accessToken)
      
                useJwt.setRefreshToken(response.data.refreshToken)
      
                localStorage.setItem('userData', JSON.stringify(userData))
                history.push('/home')
                toast.success(
                  <ToastContent name={userData.name} role={'admin'} />,
                  { transition: Slide, hideProgressBar: true, autoClose: 2000 }
                )

              } else {
                toast.error(
                  <ToastContent name={'John Doe'} role={'admin'} />,
                  { transition: Slide, hideProgressBar: true, autoClose: 2000 }
                )
              }
            })
            .catch(error => {
              toast.error(
                <ErrorToastContent title={'Error de inicio de sesion'} content={'Las credenciales proporcionadas son incorrectas.'} />,
                { transition: Slide, hideProgressBar: true, autoClose: 2000 }
              )
            })   
    }

  return (
    <div className='auth-wrapper auth-v2'>
      <Row className='auth-inner m-0'>
        <Link className='brand-logo' to='/'>
        <img className="logo-img"  src={LOGO}/>
        </Link>
        <Col className='d-none d-lg-flex align-items-center p-5' lg='8' sm='12'>
          <div className='w-100 d-lg-flex align-items-center justify-content-center px-5'>
            <img className='img-fluid' src={source} alt='Login V2' />
          </div>
        </Col>
        <Col className='d-flex align-items-center auth-bg px-2 p-lg-5' lg='4' sm='12'>
          <Col className='px-xl-2 mx-auto' sm='8' md='6' lg='12'>
            <CardTitle tag='h2' className='font-weight-bold mb-1'>
              Welcome to BigFleet! 👋
            </CardTitle>
            <CardText className='mb-2'>Please sign-in to your account and start the adventure</CardText>
            <Form ref={loginForm} className='auth-login-form mt-2' onSubmit={e => e.preventDefault()}>
              <FormGroup>
                <Label className='form-label' for='login-email'>
                  Email:
                </Label>
                <Input type='text' value={email} onChange={(e) => { setEmail(e.target.value) }} id='login-email' placeholder='Email' autoFocus />
              </FormGroup>
              <FormGroup>
                <div className='d-flex justify-content-between'>
                  <Label className='form-label' for='login-password'>
                    Password:
                  </Label>
                </div>
                <InputPasswordToggle value={password} onChange={(e) => { setPassword(e.target.value) }} className='input-group-merge' />
              </FormGroup>
             <FormGroup>
                <CustomInput type='checkbox' className='custom-control-Primary' id='remember-me' label='Remember Me' />
              </FormGroup>
              <Button color="primary" block onClick={() => { login(email, password) }}>
                Login
              </Button>
            </Form>
          </Col>
        </Col>
      </Row>
    </div>
  )
}

export default Login
