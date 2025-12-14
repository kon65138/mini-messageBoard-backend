const messages = [
  {
    text: 'hi my name is jake',
    user: 'Jake',
    added: new Date(),
    id: 0,
  },
  {
    text: 'woof im a dog',
    user: 'dog',
    added: new Date(),
    id: 1,
  },
];

function getMsgById(messageId) {
  return messages.find((message) => message.id === messageId);
}

module.exports = { messages, getMsgById };
