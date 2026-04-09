module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const body = req.body;
  const lang = body.lang || 'en';

  const REPO = 'https://raw.githubusercontent.com/purmethod/pur/main/knowledge';
  const files = ['p0-sexual-control.txt','p1-sleep.txt','p2-movement.txt','p3-food.txt','p4-breath-p5-temperature.txt','u0-awareness.txt','u1-impulse.txt','u2-dopamine.txt','u3-u4-u5-mind.txt','r0-accountability.txt','r1-r5-responsibility.txt'];

  let knowledge = '';
  for (const f of files) {
    try {
      const r = await fetch(REPO + '/' + f);
      if (r.ok) knowledge += '\n\n' + await r.text();
    } catch (e) {
      console.error('Failed:', f, e.message);
    }
  }

  if (!knowledge.trim()) {
    knowledge = 'PUR METHOD: P0 Kegel 100 reps every 2nd day, release valve technique, no pornography (Voon 2014 cocaine brain patterns), testosterone +145% day 7 abstinence. P1 Last meal 15:00, phone away 18:00, bed 21:00, wake 05:00. P2 PUR Ladder 1-2-3 reps with 10-20-30s rest, 5 ladders daily, outdoor calisthenics. P3 21h fast, ACV + salt morning, eating window 13​​​​​​​​​​​​​​​​
