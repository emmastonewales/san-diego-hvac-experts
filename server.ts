import express from 'express';
import path from 'path';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Handle API endpoints for forms
app.post('/api/estimate', (req, res) => {
  const { name, phone, email, service, zipCode, details } = req.body;
  if (!name || !phone || !service) {
    return res.status(400).json({ success: false, message: 'Please provide your name, phone number, and service required.' });
  }
  
  return res.json({
    success: true,
    message: 'Thank you! Your estimate request has been received. One of our San Diego HVAC specialists will contact you within 15 minutes.',
    confirmationId: 'SD-HVAC-' + Math.floor(100000 + Math.random() * 900000)
  });
});

app.post('/api/contact', (req, res) => {
  const { name, email, phone, message } = req.body;
  if (!name || (!email && !phone)) {
    return res.status(400).json({ success: false, message: 'Please enter your name and email or phone number.' });
  }

  return res.json({
    success: true,
    message: 'Message sent successfully! Our customer care team will reply promptly.'
  });
});

// Serve static files from root directory with HTML extensions fallback
app.use(express.static(process.cwd(), {
  extensions: ['html', 'htm'],
  index: 'index.html'
}));

// Fallback to 404.html for non-existent pages
app.use((req, res) => {
  res.status(404).sendFile(path.join(process.cwd(), '404.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`San Diego HVAC Experts server running on http://0.0.0.0:${PORT}`);
});
