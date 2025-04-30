const { google } = require('googleapis');

// Certifique-se que você carrega o dotenv aqui também, por segurança
require('dotenv').config();

const oauth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  'http://localhost:3000/oauth2callback'
);

function login(req, res) {
  const url = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: ['https://www.googleapis.com/auth/gmail.readonly'],
  });
  res.redirect(url);
}

async function callback(req, res) {
  const code = req.query.code;
  try {
    const { tokens } = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(tokens);

    const gmail = google.gmail({ version: 'v1', auth: oauth2Client });
    const response = await gmail.users.messages.list({
      userId: 'me',
      maxResults: 10,
    });

    const emails = [];
    for (const msg of response.data.messages) {
      const full = await gmail.users.messages.get({ userId: 'me', id: msg.id });
      const subject = full.data.payload.headers.find(h => h.name === 'Subject');
      emails.push(subject ? subject.value : '(Sem assunto)');
    }

    res.send(emails.join('<br>'));
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao autenticar ou buscar e-mails');
  }
}

module.exports = { login, callback };