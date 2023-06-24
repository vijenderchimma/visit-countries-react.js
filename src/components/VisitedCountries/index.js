import './index.css'

const VisitedCountries = props => {
  const {eachCountry, removeCountryBtn} = props
  const {id, imageUrl, name} = eachCountry

  const onClickRemoveBtn = () => {
    removeCountryBtn(id)
  }

  return (
    <li className="visited-list-item">
      <img src={imageUrl} className="image" alt="thumbnail" />
      <div className="name-container">
        <p className="name">{name}</p>
        <button type="button" className="remove-btn" onClick={onClickRemoveBtn}>
          Remove
        </button>
      </div>
    </li>
  )
}

export default VisitedCountries
