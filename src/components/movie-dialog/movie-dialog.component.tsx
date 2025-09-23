import { type FC, useState, useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Stack,
  Box,
} from '@mui/material';
import type { Movie } from '../../interfaces/movie.interface';

interface MovieDialogProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (movie: Movie) => void;
  movie?: Movie; // optional for editing
}

const MovieDialog: FC<MovieDialogProps> = ({ open, onClose, onSubmit, movie }) => {
  const [form, setForm] = useState<Movie>({
    rank: 0,
    id: '',
    name: '',
    year: new Date().getFullYear(),
    imbd_votes: 0,
    imdb_rating: 0,
    certificate: '',
    duration: 0,
    genre: '',
    cast_id: '',
    cast_name: '',
    director_id: '',
    director_name: '',
    writer_name: '',
    writer_id: '',
    img_link: '',
  });

  useEffect(() => {
    if (movie) {
      setForm(movie);
    } else {
      setForm({
        rank: 0,
        id: '',
        name: '',
        year: new Date().getFullYear(),
        imbd_votes: 0,
        imdb_rating: 0,
        certificate: '',
        duration: 0,
        genre: '',
        cast_id: '',
        cast_name: '',
        director_id: '',
        director_name: '',
        writer_name: '',
        writer_id: '',
        img_link: '',
      });
    }
  }, [movie, open]);

  const handleChange = <K extends keyof Movie>(field: K, value: Movie[K]) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    onSubmit(form);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth='md' fullWidth>
      <DialogTitle>{movie ? 'Edit Movie' : 'Add Movie'}</DialogTitle>
      <DialogContent>
        <Box
          component='form'
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <Stack spacing={2} sx={{ mt: 1 }}>
            {/* Row: Rank, ID, Year, Duration */}
            <Stack direction='row' spacing={2}>
              <TextField size='small'
                label='Rank'
                type='number'
                value={form.rank}
                onChange={(e) => handleChange('rank', Number(e.target.value))}
                fullWidth
              />
              <TextField size='small'
                label='ID'
                value={form.id}
                onChange={(e) => handleChange('id', e.target.value)}
                fullWidth
              />
              <TextField size='small'
                label='Year'
                type='number'
                value={form.year}
                onChange={(e) => handleChange('year', Number(e.target.value))}
                fullWidth
              />
              <TextField size='small'
                label='Duration (min)'
                type='number'
                value={form.duration}
                onChange={(e) => handleChange('duration', Number(e.target.value))}
                fullWidth
              />
            </Stack>

            {/* Row: Certificate, IMDB Rating, IMDB Votes */}
            <Stack direction='row' spacing={2}>
              <TextField size='small'
                label='Certificate'
                value={form.certificate}
                onChange={(e) => handleChange('certificate', e.target.value)}
                fullWidth
              />
              <TextField size='small'
                label='IMDB Rating'
                type='number'
                value={form.imdb_rating}
                onChange={(e) => handleChange('imdb_rating', Number(e.target.value))}
                fullWidth
              />
              <TextField size='small'
                label='IMDB Votes'
                type='number'
                value={form.imbd_votes}
                onChange={(e) => handleChange('imbd_votes', Number(e.target.value))}
                fullWidth
              />
            </Stack>

            {/* Single field rows */}
            <TextField size='small'
              label='Name'
              value={form.name}
              onChange={(e) => handleChange('name', e.target.value)}
              fullWidth
            />
            <TextField size='small'
              label='Genre (comma separated)'
              value={form.genre}
              onChange={(e) => handleChange('genre', e.target.value)}
              fullWidth
            />

            {/* Multiline fields */}
            <TextField size='small'
              label='Cast Names (comma separated)'
              multiline
              minRows={2}
              value={form.cast_name}
              onChange={(e) => handleChange('cast_name', e.target.value)}
              fullWidth
            />
            <TextField size='small'
              label='Cast IDs (comma separated)'
              multiline
              minRows={2}
              value={form.cast_id}
              onChange={(e) => handleChange('cast_id', e.target.value)}
              fullWidth
            />
            <TextField size='small'
              label='Director Name'
              value={form.director_name}
              onChange={(e) => handleChange('director_name', e.target.value)}
              fullWidth
            />
            <TextField size='small'
              label='Director ID'
              value={form.director_id}
              onChange={(e) => handleChange('director_id', e.target.value)}
              fullWidth
            />
            <TextField size='small'
              label='Writer Names (comma separated)'
              multiline
              minRows={2}
              value={form.writer_name}
              onChange={(e) => handleChange('writer_name', e.target.value)}
              fullWidth
            />
            <TextField size='small'
              label='Writer IDs (comma separated)'
              multiline
              minRows={2}
              value={form.writer_id}
              onChange={(e) => handleChange('writer_id', e.target.value)}
              fullWidth
            />
            <TextField size='small'
              label='Image Link'
              value={form.img_link}
              onChange={(e) => handleChange('img_link', e.target.value)}
              fullWidth
            />
          </Stack>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button type='submit' onClick={handleSubmit} variant='contained'>
          {movie ? 'Save Changes' : 'Add Movie'}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default MovieDialog;
