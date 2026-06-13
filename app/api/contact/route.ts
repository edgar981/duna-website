import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { nombre, correo, empresa, detalle, sector, necesidades, tamano } = body;

    await resend.emails.send({
      from: "onboarding@resend.dev",       // swap for your domain later
      to: "davidravan5@gmail.com",                // your receiving email for now
      subject: `New Inquiry from ${nombre} — ${sector}`,
      html: `
        <div style="font-family: monospace; max-width: 600px; margin: 0 auto;">
          <h2 style="border-bottom: 2px solid #0ea5e9; padding-bottom: 8px;">
            New Project Inquiry
          </h2>

          <h3>Contact</h3>
          <p><strong>Nombre:</strong> ${nombre}</p>
          <p><strong>Email:</strong> ${correo}</p>
          <p><strong>Empresa:</strong> ${empresa || "—"}</p>

          <h3>Project Scope</h3>
          <p><strong>Sector:</strong> ${sector}</p>
          <p><strong>Necesidades:</strong> ${necesidades?.join(", ") || "—"}</p>
          <p><strong>Tamaño:</strong> ${tamano || "—"}</p>

          <h3>Details</h3>
          <p>${detalle || "—"}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}