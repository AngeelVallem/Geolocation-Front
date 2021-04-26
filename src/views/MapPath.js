import { Card, CardHeader, CardBody, CardTitle, CardText, CardLink } from 'reactstrap'

const MapPath = () => {
  return (
    <div>
      <Card>
      <iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=monterrey+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
      </Card>
    </div>
  )
}

export default MapPath
