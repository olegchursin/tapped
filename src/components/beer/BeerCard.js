import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Image } from 'semantic-ui-react'

const BeerCard = (props) => {
  let beer = props.beer
  return (
    <Card>
      <Image src={beer.url ? beer.url : '../../../img/beer-placeholder.jpg' } alt={beer.name} />
      <Card.Content>
        <Card.Header>{beer.name}</Card.Header>
        <Card.Meta><Link to={`/breweries/${beer.brewery.id}`}>{beer.brewery.name}</Link></Card.Meta>
        <Card.Description>
        <h4>{beer.abv}% ABV <strong>{beer.style}</strong></h4>
          {beer.description}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <span className="right floated">
          Avg. rating
        </span>
        <span>
          No. of reviews
        </span>
        </Card.Content>
    </Card>

  )
}

export default BeerCard
