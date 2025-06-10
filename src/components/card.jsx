
const Cards = ({actor}) => {
    const {name, birth_year, nationality, biography,image, awards} = actor;
  return   <div className="card g-3 h-100 m-2">
  <img src={image} className="card-img-top h-100 object-fit-cover" alt={`Immagine di ${name}`} />
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p className="card-text">Born in : {birth_year}</p>
      <h5> Nazionalità : </h5><p className="card-text"> {nationality}</p>
              <h5>Awards : </h5> <p className="card-text"> {awards}</p>
                     <h5>Biography : </h5> <p className="card-text"> {biography}</p>

  </div>
</div>
}

export default Cards;