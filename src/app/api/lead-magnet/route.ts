const RESEND_API_KEY = process.env.RESEND_API_KEY;
const RESEND_FROM = process.env.RESEND_FROM;
const RESEND_TO = process.env.RESEND_TO || RESEND_FROM;

const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== 'string' || !isValidEmail(email)) {
      return Response.json({ ok: false, error: 'Invalid email.' }, { status: 400 });
    }

    if (!RESEND_API_KEY || !RESEND_FROM) {
      return Response.json({ ok: false, error: 'Email service not configured.' }, { status: 500 });
    }

    const adminTo = RESEND_TO || email;

    const notifyAdmin = fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: RESEND_FROM,
        to: adminTo,
        subject: 'New Mini Reading Request',
        html: `<p>New lead magnet request:</p><p><strong>Email:</strong> ${email}</p>`
      })
    });

    const sendUser = fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: RESEND_FROM,
        to: email,
        subject: 'Your Mini Reading Request',
        html: `<p>Thanks for requesting a mini reading. We will be in touch shortly.</p>`
      })
    });

    const [adminResult, userResult] = await Promise.all([notifyAdmin, sendUser]);

    if (!adminResult.ok || !userResult.ok) {
      return Response.json({ ok: false, error: 'Email delivery failed.' }, { status: 502 });
    }

    return Response.json({ ok: true });
  } catch {
    return Response.json({ ok: false, error: 'Request failed.' }, { status: 400 });
  }
}
