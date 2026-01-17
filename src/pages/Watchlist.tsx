import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import { useMovies } from '@/contexts/MovieContext';
import MovieCard from '@/components/MovieCard';
import EmptyState from '@/components/EmptyState';

const Watchlist = () => {
  const { watchlist } = useMovies();

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
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Clock className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground font-display">
                Watchlist
              </h1>
              <p className="text-xs text-muted-foreground">
                {watchlist.length} {watchlist.length === 1 ? 'movie' : 'movies'}
              </p>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Movie Grid */}
      <main className="px-4 py-4">
        {watchlist.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {watchlist.map((movie, index) => (
              <MovieCard key={movie.id} movie={movie} index={index} />
            ))}
          </div>
        ) : (
          <EmptyState
            icon={Clock}
            title="Watchlist is empty"
            description="Add movies to your watchlist by tapping the clock icon to watch them later."
          />
        )}
      </main>
    </div>
  );
};

export default Watchlist;
