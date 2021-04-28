import { Card, CardHeader, CardBody, CardTitle, CardText, CardLink } from 'reactstrap'

const Home = () => {
  return (
    <div>
      <Card>
      <iframe width="100%" height="1400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://localhost:5601/app/dashboards#/view/9efab2e0-8c59-11eb-8ed6-ad7e5c1b23b1?embed=true&_g=(filters%3A!()%2CrefreshInterval%3A(pause%3A!t%2Cvalue%3A0)%2Ctime%3A(from%3Anow-1y%2Cto%3Anow))&show-query-input=true&show-time-filter=true" ></iframe>
      </Card>
    </div>
  )
}

export default Home
