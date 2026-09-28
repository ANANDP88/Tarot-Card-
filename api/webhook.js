module.exports = async (req, res) => {
  try {
    const update = req.body || {};
    if (update.pre_checkout_query) {
      await fetch(`https://api.telegram.org/bot${process.env.BOT_TOKEN}/answerPreCheckoutQuery`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pre_checkout_query_id: update.pre_checkout_query.id, ok: true })
      });
    }
  } catch (e) {}
  return res.status(200).json({ ok: true });
};
