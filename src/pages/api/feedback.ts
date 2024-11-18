import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const response = await fetch('https://REGION-PROJECT_ID.cloudfunctions.net/email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(req.body),
      });

      const result = await response.json();

      if (response.ok) {
        res.status(200).json(result);
      } else {
        res.status(response.status).json(result);
      }
    } catch (error) {
      res.status(500).json({ error: 'Erro interno no servidor.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Método ${req.method} não permitido`);
  }
}
