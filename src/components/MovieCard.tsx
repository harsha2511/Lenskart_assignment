import { Heart, Clock, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Movie, getGenreNames } from '@/data/mockMovies';
import { useMovies } from '@/contexts/MovieContext';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

interface MovieCardProps {
  movie: Movie;
  index?: number;
}

const MovieCard = ({ movie, index = 0 }: MovieCardProps) => {
  const navigate = useNavigate();
  const {
    isFavourite,
    isInWatchlist,
    addToFavourites,
    removeFromFavourites,
    addToWatchlist,
    removeFromWatchlist,
  } = useMovies();

  const favourite = isFavourite(movie.id);
  const inWatchlist = isInWatchlist(movie.id);
  const genreNames = getGenreNames(movie.genre_ids);

  const handleFavouriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (favourite) {
      removeFromFavourites(movie.id);
      toast.info(`Removed "${movie.title}" from favourites`);
    } else {
      addToFavourites(movie);
      toast.success(`Added "${movie.title}" to favourites`);
    }
  };

  const handleWatchlistClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (inWatchlist) {
      removeFromWatchlist(movie.id);
      toast.info(`Removed "${movie.title}" from watchlist`);
    } else {
      addToWatchlist(movie);
      toast.success(`Added "${movie.title}" to watchlist`);
    }
  };

  const handleCardClick = () => {
    navigate(`/movie/${movie.id}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      onClick={handleCardClick}
      className="group relative rounded-xl overflow-hidden bg-card hover:ring-2 hover:ring-primary/50 transition-all duration-300 cursor-pointer"
    >
      {/* Poster */}
      <div className="relative aspect-[2/3] overflow-hidden">
        <img
          src={movie.poster_path}
          alt={movie.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Rating Badge */}
        <div className="absolute top-2 left-2 flex items-center gap-1 px-2 py-1 rounded-full bg-background/80 backdrop-blur-sm">
          <Star className="w-3 h-3 text-primary fill-primary" />
          <span className="text-xs font-semibold">{movie.vote_average.toFixed(1)}</span>
        </div>

        {/* Action Buttons */}
        <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={handleFavouriteClick}
            className={cn(
              'p-2 rounded-full backdrop-blur-sm transition-all duration-300',
              favourite
                ? 'bg-red-500 text-white'
                : 'bg-background/80 text-foreground hover:bg-primary hover:text-primary-foreground'
            )}
          >
            <Heart className="w-4 h-4" fill={favourite ? 'currentColor' : 'none'} />
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={handleWatchlistClick}
            className={cn(
              'p-2 rounded-full backdrop-blur-sm transition-all duration-300',
              inWatchlist
                ? 'bg-primary text-primary-foreground'
                : 'bg-background/80 text-foreground hover:bg-primary hover:text-primary-foreground'
            )}
          >
            <Clock className="w-4 h-4" fill={inWatchlist ? 'currentColor' : 'none'} />
          </motion.button>
        </div>
      </div>

      {/* Info */}
      <div className="p-3">
        <h3 className="font-semibold text-sm text-foreground truncate mb-1">
          {movie.title}
        </h3>
        <div className="flex flex-wrap gap-1">
          {genreNames.slice(0, 2).map((genre) => (
            <span
              key={genre}
              className="text-xs px-2 py-0.5 rounded-full bg-muted/50 text-muted-foreground"
            >
              {genre}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default MovieCard;
