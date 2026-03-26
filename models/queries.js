const pool = require('./pool');

async function getAllMessages() {
  const { rows } = await pool.query('SELECT * FROM messages;');
  return rows;
}

async function getMsgById(messageId) {
  const { rows } = await pool.query(
    `SELECT * FROM messages WHERE id=${messageId};`,
  );
  return rows;
  //return messages.find((message) => message.id === messageId);
}

async function addMessage(username, text, date) {
  await pool.query(
    `INSERT INTO messages(username, text, added) VALUES ('${username}','${text}',${date});`,
  );
}

module.exports = {
  getAllMessages,
  getMsgById,
  addMessage,
};
