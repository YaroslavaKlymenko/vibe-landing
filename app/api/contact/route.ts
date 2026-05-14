import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, company, revenue, vertical, message } = await req.json()

  await resend.emails.send({
    from: 'Book an Intro <klymenko0105@gmail.com>',
    to: 'dropship.test.yaro@gmail.com',
    replyTo: email,
    subject: `New intro request — ${name} · ${company}`,
    html: `
      <div style="font-family:monospace;max-width:600px;margin:0 auto;padding:32px">
        <h2 style="margin:0 0 24px">New intro request</h2>
        <table style="width:100%;border-collapse:collapse">
          <tr><td style="padding:8px 0;color:#888;width:120px">Name</td><td style="padding:8px 0"><strong>${name}</strong></td></tr>
          <tr><td style="padding:8px 0;color:#888">Email</td><td style="padding:8px 0"><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding:8px 0;color:#888">Company</td><td style="padding:8px 0">${company}</td></tr>
          <tr><td style="padding:8px 0;color:#888">Revenue</td><td style="padding:8px 0">${revenue || '—'}</td></tr>
          <tr><td style="padding:8px 0;color:#888">Vertical</td><td style="padding:8px 0">${vertical || '—'}</td></tr>
        </table>
        <hr style="margin:24px 0;border:none;border-top:1px solid #eee"/>
        <p style="color:#888;margin:0 0 8px;font-size:12px">WHAT THEY&apos;RE WORKING ON</p>
        <p style="margin:0;white-space:pre-wrap">${message || '—'}</p>
      </div>
    `,
  })

  return NextResponse.json({ ok: true })
}
