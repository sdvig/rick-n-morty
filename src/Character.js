function Character({ id, name, image, episode }) {

  return (
    <li className="character">
      <img
        className="character-img"
        src={image} alt={name}
      />
      <div className="character-body">
        <div className="character-title">
          {name}
        </div>
        <h5>Episodes:</h5>
        <small>{episode.join(', ')}</small>
      </div>
    </li>
  );
}

export default Character;
