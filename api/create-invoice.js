module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).json({ error: 'POST only' });
  try {
    const r = await fetch(`https://api.telegram.org/bot${process.env.BOT_TOKEN}/createInvoiceLink`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: 'Detailed Tarot Reading',
        description: 'Unlock a 3-card spread: Past, Present and Future.',
        payload: 'premium_spread_' + Date.now(),
        currency: 'XTR',
        prices: [{ label: '3-Card Spread', amount: 10 }]
      })
    });
    const data = await r.json();
    if (!data.ok) return res.status(500).json({ error: data.description });
    return res.status(200).json({ link: data.result });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
};
