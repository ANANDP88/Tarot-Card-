module.exports = async (req, res) => {
  const url = `https://${req.headers.host}/api/webhook`;
  const r = await fetch(`https://api.telegram.org/bot${process.env.BOT_TOKEN}/setWebhook`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ url, allowed_updates: ['pre_checkout_query', 'message'] })
  });
  const data = await r.json();
  return res.status(200).json({ webhook: url, telegram: data });
};
