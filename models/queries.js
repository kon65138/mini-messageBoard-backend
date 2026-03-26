const pool = require('pool');

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

async function addMessage(user, text, date) {
  await pool.query(
    `INSERT INTO messages(user, text, added) VALUES (${user},${text},${date});`,
  );
}

module.exports = {
  getAllMessages,
  getMsgById,
  addMessage,
};
