import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Film } from 'lucide-react';
import { mockMovies, genres } from '@/data/mockMovies';
import MovieCard from '@/components/MovieCard';
import SearchBar from '@/components/SearchBar';
import GenreChip from '@/components/GenreChip';
import EmptyState from '@/components/EmptyState';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState<number | null>(null);

  const filteredMovies = useMemo(() => {
    return mockMovies.filter((movie) => {
      const matchesSearch = movie.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesGenre =
        selectedGenre === null || movie.genre_ids.includes(selectedGenre);
      return matchesSearch && matchesGenre;
    });
  }, [searchQuery, selectedGenre]);

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky top-0 z-40 bg-background/95 backdrop-blur-xl border-b border-border/50"
      >
        <div className="px-4 py-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Film className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground font-display">
                Movie Discovery
              </h1>
              <p className="text-xs text-muted-foreground">
                Find your next favourite
              </p>
            </div>
          </div>

          {/* Search */}
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search movies..."
          />
        </div>

        {/* Genre Filter */}
        <div className="px-4 pb-4">
          <div className="flex gap-2 overflow-x-auto scrollbar-none -mx-4 px-4">
            <GenreChip
              genre="All"
              isActive={selectedGenre === null}
              onClick={() => setSelectedGenre(null)}
            />
            {genres.slice(0, 8).map((genre) => (
              <GenreChip
                key={genre.id}
                genre={genre.name}
                isActive={selectedGenre === genre.id}
                onClick={() =>
                  setSelectedGenre(selectedGenre === genre.id ? null : genre.id)
                }
              />
            ))}
          </div>
        </div>
      </motion.header>

      {/* Movie Grid */}
      <main className="px-4 py-4">
        {filteredMovies.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {filteredMovies.map((movie, index) => (
              <MovieCard key={movie.id} movie={movie} index={index} />
            ))}
          </div>
        ) : (
          <EmptyState
            icon={Film}
            title="No movies found"
            description="Try adjusting your search or filter to find what you're looking for."
          />
        )}
      </main>
    </div>
  );
};

export default Index;
