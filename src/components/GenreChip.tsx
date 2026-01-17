import { cn } from '@/lib/utils';

interface GenreChipProps {
  genre: string;
  isActive?: boolean;
  onClick?: () => void;
}

const GenreChip = ({ genre, isActive, onClick }: GenreChipProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap',
        isActive
          ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25'
          : 'bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground'
      )}
    >
      {genre}
    </button>
  );
};

export default GenreChip;
