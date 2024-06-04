import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
    
// Movie model
const Movie = mongoose.model('moviesdata', new mongoose.Schema({
    id: String,
    title: String,  
    posterURL: String,
    imdbId: String,
    genre: String,
    overview:String,
    releasedYear:Number,
    certificate:String,
    imdbrating:Number,
}));

// Middleware   
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb+srv://####@cluster0.wxdglqf.mongodb.net/sample_mflix', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("DB Connection Success");
})
.catch(error => {
    console.log("Error:" + error);
});

// Movie routes
app.get('/api/movies/:genre', async (req, res) => {
    const genre = req.params.genre;
    try {
        const movies = await Movie.find({ genre }).sort({ 'imdbrating': -1 });
        res.status(200).json(movies);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Movie routes
app.get('/api/moviedetails/:title', async (req, res) => {
    const title = req.params.title;
    try {
        const movie = await Movie.findOne({ title });
        if (!movie) {
            return res.status(404).json({ message: 'Movie not found' });
        }
        res.status(200).json(movie);
    } catch (error) {
        console.error('Error fetching movie details:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


// Server listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
