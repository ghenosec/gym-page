import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

type Data = {
  message?: string
  error?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  const { email } = req.body

  if (!email) {
    return res.status(400).json({ error: 'Email é obrigatório' })
  }

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT),
    secure: process.env.EMAIL_SECURE === 'true',
    auth: {
      user: process.env.EMAIL_USER, 
      pass: process.env.EMAIL_PASS,  
    }
  })

  const mailOptions = {
    from: email, 
    to: process.env.RECEIVER_EMAIL, 
    subject: 'Novo Feedback',
    text: `Recebemos umo novo Feedback do email: ${email}`,
    html: `
      <h1>Novo Feedback</h1>
      <p>Recebemos umo novo Feedback do email: <strong>${email}</strong></p>
    `
  }

  try {
    await transporter.sendMail(mailOptions)
    res.status(200).json({ message: 'Feedback enviado com sucesso!' })
  } catch (error) {
    console.error('Erro ao enviar feedback:', error)
    res.status(500).json({ error: 'Deu bigode ao enviar seu Feedback mano' })
  }
}
