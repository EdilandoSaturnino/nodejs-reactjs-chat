const { User, Message } = require('../models/models');

async function authenticate(req, res) {
    const { username } = req.body;

    try {
        let user = await User.findOne({ username: username });

        if (!user) {
            user = new User({
                username: username,
                secret: username,
                first_name: username
            });
            await user.save();
        }

        res.status(200).json(user);
    } catch (e) {
        res.status(500).json({ error: 'Algo deu errado.' });
    }
}

async function sendMessage(req, res) {
    const { username, text } = req.body;

    try {
        const message = new Message({
            username,
            text,
            timestamp: new Date()
        });
        await message.save();
        res.status(200).json(message);
    } catch (e) {
        res.status(500).json({ error: 'Não foi possível enviar a mensagem.' });
    }
}

async function getMessages(req, res) {
    try {
        const messages = await Message.find().sort({ timestamp: 1 });
        res.status(200).json(messages);
    } catch (e) {
        res.status(500).json({ error: 'Não foi possível recuperar as mensagens.' });
    }
}

module.exports = {
    authenticate,
    sendMessage,
    getMessages
};
