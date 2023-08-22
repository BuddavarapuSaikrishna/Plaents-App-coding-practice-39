import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'
import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div className="app-container">
      <h1 className="heading">PLANETS</h1>
      <div data-testid="planets" className="Slider-container">
        <Slider {...settings}>
          {planetsList.map(eachItem => (
            <PlanetItem PlanetsDetails={eachItem} key={eachItem.id} />
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default PlanetsSlider
