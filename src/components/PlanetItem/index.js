import './index.css'

const PlanetItem = props => {
  const {PlanetsDetails} = props
  const {imageUrl, name, description} = PlanetsDetails

  return (
    <div className="planet-container">
      <img src={imageUrl} alt={`planet ${name}`} className="planet-image" />
      <h1 className="planet-name">{name}</h1>
      <p className="planet-description">{description}</p>
    </div>
  )
}

export default PlanetItem
