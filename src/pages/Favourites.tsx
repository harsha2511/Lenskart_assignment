import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { useMovies } from '@/contexts/MovieContext';
import MovieCard from '@/components/MovieCard';
import EmptyState from '@/components/EmptyState';

const Favourites = () => {
  const { favourites } = useMovies();

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky top-0 z-40 bg-background/95 backdrop-blur-xl border-b border-border/50"
      >
        <div className="px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center">
              <Heart className="w-5 h-5 text-red-500" fill="currentColor" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground font-display">
                Favourites
              </h1>
              <p className="text-xs text-muted-foreground">
                {favourites.length} {favourites.length === 1 ? 'movie' : 'movies'}
              </p>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Movie Grid */}
      <main className="px-4 py-4">
        {favourites.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {favourites.map((movie, index) => (
              <MovieCard key={movie.id} movie={movie} index={index} />
            ))}
          </div>
        ) : (
          <EmptyState
            icon={Heart}
            title="No favourites yet"
            description="Start adding movies to your favourites by tapping the heart icon on any movie."
          />
        )}
      </main>
    </div>
  );
};

export default Favourites;
