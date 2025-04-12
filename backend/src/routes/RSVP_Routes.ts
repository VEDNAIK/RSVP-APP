import { Router, Request, Response } from 'express';
import { FileStorage } from '../storage/FileStorage';
import { RsvpService } from '../services/Rsvp_Service';

const router = Router();
const storage = new FileStorage();
const service = new RsvpService(storage);

const handlePostRsvp: (req: Request, res: Response) => void = (req, res) => {
  const entry = req.body;
  if (!entry.name || !entry.status) {
    res.status(400).json({ error: 'Missing name or status' });
    return;
  }
  service.addOrUpdate(entry)
    .then(() => res.status(200).json({ success: true }))
    .catch(err => res.status(500).json({ error: err.message }));
};

router.post('/', handlePostRsvp);

router.get('/', async (_req: Request, res: Response) => {
  const all = await service.getAll();
  res.json(all);
});

router.get('/confirmed', async (_req: Request, res: Response) => {
  const confirmed = await service.getConfirmed();
  res.json(confirmed);
});

router.get('/summary', async (_req: Request, res: Response) => {
  const summary = await service.getSummary();
  res.json(summary);
});

export default router;