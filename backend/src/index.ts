import express from 'express';
import cors from 'cors';
import rsvpRoutes from './routes/RSVP_Routes';

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());
app.use('/api/rsvp', rsvpRoutes);

app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});