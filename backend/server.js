const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()

app.use(cors())
app.use(express.json())

app.post('/contato', async (req, res) => {
  try {
    const { nome, email, telefone, tipo, mensagem } = req.body

    if (!nome || !email || !mensagem) {
      return res.status(400).json({
        erro: 'Preencha os campos obrigatórios.'
      })
    }

    const texto = `
📩 NOVO CONTATO PELO SITE

👤 Nome: ${nome}

📧 E-mail: ${email}

📱 Telefone/Telegram: ${telefone || 'Não informado'}

🏥 Tipo de conta: ${tipo || 'Não informado'}

📝 Situação:
${mensagem}
`

    const resposta = await fetch(
      `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          chat_id: process.env.TELEGRAM_CHAT_ID,
          text: texto
        })
      }
    )

    const dados = await resposta.json()

    if (!resposta.ok) {
      console.error(dados)

      return res.status(500).json({
        erro: 'Não foi possível enviar a mensagem para o Telegram.'
      })
    }

    res.json({
      sucesso: true
    })

  } catch (erro) {
    console.error(erro)

    res.status(500).json({
      erro: 'Erro interno do servidor.'
    })
  }
})

const PORT = process.env.PORT || 3001

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Backend rodando na porta ${PORT}`)
})