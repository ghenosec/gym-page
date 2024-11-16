import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, feedback } = req.body;

    if (!email || !feedback) {
      return res.status(400).json({ error: 'Por favor, preencha todos os campos.' });
    }
    res.status(200).json({ message: 'Feedback enviado com sucesso!' });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Método ${req.method} não permitido`);
  }
}
