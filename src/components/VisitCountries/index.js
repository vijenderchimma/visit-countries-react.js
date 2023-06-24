import './index.css'

const VisitCountries = props => {
  const {eachCountry, onClickBtn} = props
  const {id, name, isVisited} = eachCountry

  const onClickVisitBtn = () => {
    onClickBtn(id)
  }

  return (
    <li className="list-item">
      <p className="name">{name}</p>
      {isVisited ? (
        <p className="visited">Visited</p>
      ) : (
        <button type="button" className="visit-btn" onClick={onClickVisitBtn}>
          Visit
        </button>
      )}
    </li>
  )
}

export default VisitCountries
