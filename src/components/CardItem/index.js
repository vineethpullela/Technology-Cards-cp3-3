import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails

  return (
    <li className={`${className} card-container`}>
      <div>
        <h1 className="card-heading">{title}</h1>
        <p className="card-description">{description}</p>
        <div className="img-container">
          <img src={imgUrl} className="img" alt={title} />
        </div>
      </div>
    </li>
  )
}

export default CardItem
