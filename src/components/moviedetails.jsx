import { useState } from "react";
const Moviedetails =()=>{

    const { title } = useParams();

    const [moviedata,setMoviedata]=useState(null);
    useEffect(() => {
        const fetchdata = async (title) => {
          try {
            const response = await axios.get(
              `http://localhost:5000/api/movies/${title}`
            );
            setMoviedata(response.data);
          } catch (error) {
            console.log("Error fetching Movie Details", error);
          }
        };
    
        fetchdata(title); 

      }, []); 
    
      return (
        <>
          <div className="moviedetails">
            {moviedata ? (
              <div>
                <img src={moviedata.posterURL} alt={moviedata.title} />
                <h2>{moviedata.title}</h2>
                <p>{moviedata.overview}</p>
                <p>{moviedata.genre}</p>
                <p>{moviedata.imdbrating}</p>
                <p>{moviedata.releasedYear}</p>
                <p>{moviedata.certificate}</p>
              </div>
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </>
      );
    };
    
    export default Moviedetails;