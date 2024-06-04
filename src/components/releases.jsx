const Releases = (props) => {
    return (
        <div className="movie">
            <div className="movie_image">
                <img src={props.imagesrc} alt={props.title} />
            </div>
            <div className="movie_details">
                <h1 className="title">{props.title}<span>({props.releasedYear})</span></h1>
                <p>Overview:{props.overview}</p>
                <h4>Movie-Certificate: {props.certificate}</h4>
                <h4>Imdb-Rating: {props.imdbrating}</h4>
            </div>
        </div>
    );
}

export default Releases;