import Header from "./components/Header";
import Home from "./components/Home";
import Releases from "./components/releases";
import { useState } from "react";
import axios from "axios"
import Footer from "./components/footer";
import { useParams } from "react-router-dom";

const App= () => {
  
  const { genre } = useParams();
  const releasedata= [
    {id:1,title:"Dune-Part Two",posterURL:"images/dune2.jpg",genre:"Adventure",overview:"Dune: Part Two will explore the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a warpath of revenge against the conspirators who destroyed his family. Facing a choice between the love and the fate of the known universe, he endeavors to prevent a terrible future only he can foresee.",releasedYear:"2024",certificate:"U/A",imdbrating:8.9},
    {id:2,title:"Manjumel Boys",posterURL:"images/manjumelboys.jpg",genre:"Thriller",overview:"A group of friends get into a daring rescue mission to save their friend from Guna Caves, a perilously deep pit from where nobody has ever been brought back.",releasedYear:"2024",certificate:"U/A",imdbrating:"8.7"},
    {id:3,title:"Premalu",posterURL:"images/premalu.jpg",genre:"Romance",overview:"Sachin`s quest for love takes unexpected turns, creating a laughter-filled love triangle.",releasedYear:"2024",certificate:"U/A",imdbrating:"8.3"},
    {id:4,title:"Siren",posterURL:"images/sirenmovie.jpg",genre:"Thriller",overview:"After being framed for the murder of a powerful man, a man vows to get revenge when he is released. When he gets out after 14 years, he hunts down the accuser, unleashing his pent-up rage on him.",releasedYear:"2024",certificate:"U/A",imdbrating:"7.3"},
    {id:5,title:"Lover",posterURL:"images/lovermovie.jpg",genre:"Romance",overview:"After six years of love, longing and togetherness, Arun and Divya start to drift apart. Will their love endure their differences, or does love need to endure so much?",releasedYear:"2024",certificate:"U/A",imdbrating:"2022"},
]

const [movies,setMovies] = useState(releasedata);
const [text,setText]=useState("New Releases");
    
const fetchData = async (genre) => {
  try {
    const response = await axios.get(`http://localhost:5000/api/movies/${genre}`);
    setMovies(response.data);
    setText(`Highly recommended ${genre} movies`);
  } catch (error) {
    console.error('Error fetching data:', error);
    setText(`Error fetching ${genre} movies. Please try again later.`);
  }
};


  return( 
    <>
    <div className="image">
    <Header/>
    <Home fetchData={fetchData}/>
    </div>
    <div className="releases_background">
    <div className="h1tag">
        <h1>{text}</h1>
    </div>
    <div className="releases">
       <div className="movies"> 
                {movies.map((movie) => (
                    <Releases key={movie.id} title={movie.title} imagesrc={movie.posterURL}genre={movie.genre} overview={movie.overview} releasedYear={movie.releasedYear} certificate={movie.certificate} imdbrating={movie.imdbrating}/>
                ))}
            </div>
       </div>      
    </div>      
    <Footer/>                           
    </>
  )
}
export default App;