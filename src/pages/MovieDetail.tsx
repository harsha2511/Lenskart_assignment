import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Heart, Clock, Play, Calendar, Star } from 'lucide-react';
import { mockMovies, getGenreNames } from '@/data/mockMovies';
import { useMovies } from '@/contexts/MovieContext';
import CircularProgress from '@/components/CircularProgress';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

const MovieDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const {
    isFavourite,
    isInWatchlist,
    addToFavourites,
    removeFromFavourites,
    addToWatchlist,
    removeFromWatchlist,
  } = useMovies();

  const movie = mockMovies.find((m) => m.id === Number(id));

  if (!movie) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Movie not found</p>
      </div>
    );
  }

  const favourite = isFavourite(movie.id);
  const inWatchlist = isInWatchlist(movie.id);
  const genreNames = getGenreNames(movie.genre_ids);

  const handlePlayNow = () => {
    toast.success('🎬 Movie is Playing', {
      description: `Now playing: ${movie.title}`,
      duration: 4000,
    });
  };

  const handleFavouriteClick = () => {
    if (favourite) {
      removeFromFavourites(movie.id);
      toast.info(`Removed from favourites`);
    } else {
      addToFavourites(movie);
      toast.success(`Added to favourites`);
    }
  };

  const handleWatchlistClick = () => {
    if (inWatchlist) {
      removeFromWatchlist(movie.id);
      toast.info(`Removed from watchlist`);
    } else {
      addToWatchlist(movie);
      toast.success(`Added to watchlist`);
    }
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Banner Section */}
      <div className="relative">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 z-20 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </motion.button>

        {/* Banner Image */}
        <div className="relative h-[50vh] overflow-hidden">
          <motion.img
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            src={movie.backdrop_path}
            alt={movie.title}
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          
          {/* Rating Circle - Positioned at bottom of banner */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
            className="absolute -bottom-10 right-6 bg-card rounded-full p-2 shadow-xl border border-border/50"
          >
            <CircularProgress value={movie.vote_average} />
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="px-4 pt-14"
      >
        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-bold text-foreground font-display mb-2">
          {movie.title}
        </h1>

        {/* Release Date */}
        <div className="flex items-center gap-2 text-muted-foreground mb-4">
          <Calendar className="w-4 h-4" />
          <span className="text-sm">
            {new Date(movie.release_date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </span>
        </div>

        {/* Genres */}
        <div className="flex flex-wrap gap-2 mb-6">
          {genreNames.map((genre) => (
            <span
              key={genre}
              className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium"
            >
              {genre}
            </span>
          ))}
        </div>

        {/* Overview */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-foreground mb-2">Overview</h2>
          <p className="text-muted-foreground leading-relaxed">
            {movie.overview}
          </p>
        </div>

        {/* User Rating */}
        <div className="flex items-center gap-3 mb-8 p-4 rounded-xl bg-card border border-border/50">
          <Star className="w-5 h-5 text-primary fill-primary" />
          <div>
            <p className="text-sm text-muted-foreground">User Score</p>
            <p className="font-semibold text-foreground">
              {movie.vote_average.toFixed(1)} / 10
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mb-6">
          <Button
            onClick={handleFavouriteClick}
            variant={favourite ? 'default' : 'outline'}
            className={cn(
              'flex-1',
              favourite && 'bg-red-500 hover:bg-red-600 border-red-500'
            )}
          >
            <Heart
              className="w-4 h-4 mr-2"
              fill={favourite ? 'currentColor' : 'none'}
            />
            {favourite ? 'Favourited' : 'Add to Favourites'}
          </Button>
          <Button
            onClick={handleWatchlistClick}
            variant={inWatchlist ? 'default' : 'outline'}
            className="flex-1"
          >
            <Clock
              className="w-4 h-4 mr-2"
              fill={inWatchlist ? 'currentColor' : 'none'}
            />
            {inWatchlist ? 'In Watchlist' : 'Add to Watchlist'}
          </Button>
        </div>

        {/* Play Now Button */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button
            onClick={handlePlayNow}
            size="lg"
            className="w-full h-14 text-lg font-semibold bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25"
          >
            <Play className="w-5 h-5 mr-2" fill="currentColor" />
            Play Now
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default MovieDetail;
