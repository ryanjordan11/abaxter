export async function POST(request: Request) {
  try {
    await request.json();
  } catch {
    return Response.json({ ok: false, placeholder: true }, { status: 400 });
  }

  return Response.json({ ok: true, placeholder: true });
}
