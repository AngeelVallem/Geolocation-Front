// ** Icons Import
import { Heart } from 'react-feather'

const Footer = () => {
  return (
    <p className='clearfix mb-0'>
      <span className='float-md-left d-block d-md-inline-block mt-25'>
        COPYRIGHT © {new Date().getFullYear()}{' '}
        <a  href='https://1.envato.market/pixinvent_portfolio' target='_blank' rel='noopener noreferrer'>
          Semantic
        </a>
      </span>
    </p>
  )
}

export default Footer
