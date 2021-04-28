import { Card, CardHeader, CardBody, CardTitle, CardText, CardLink } from 'reactstrap'

const Home = () => {
  return (
    <div>
      <Card>
      <iframe width="100%" height="1400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://localhost:5601/app/dashboards#/view/b8172560-a865-11eb-924c-3790e4a2b160?embed=true&_g=(filters%3A!()%2CrefreshInterval%3A(pause%3A!f%2Cvalue%3A5000)%2Ctime%3A(from%3Anow-15m%2Cto%3Anow))" ></iframe>
      </Card>
    </div>
  )
}

export default Home
