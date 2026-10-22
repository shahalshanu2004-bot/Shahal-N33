import { NextResponse } from "next/server";

interface ContactRequestBody {
  name: string;
  phone: string;
  businessType?: string;
  budget?: string;
  marketingGoal?: string;
  message?: string;
}

export async function POST(request: Request) {
  try {
    const body: ContactRequestBody = await request.json();
    const { name, phone, businessType, budget, marketingGoal, message } = body;

    // Server-side validation
    if (!name || name.trim().length < 2) {
      return NextResponse.json(
        { error: "Please enter a valid name (at least 2 characters)." },
        { status: 400 }
      );
    }

    if (!phone || phone.trim().length < 7) {
      return NextResponse.json(
        { error: "Please provide a valid phone or WhatsApp number." },
        { status: 400 }
      );
    }

    // TODO: Connect email provider (Resend, SendGrid, or Formspree)
    // Example with Resend:
    // const resendApiKey = process.env.RESEND_API_KEY;
    // if (resendApiKey) {
    //   await fetch("https://api.resend.com/emails", {
    //     method: "POST",
    //     headers: {
    //       "Authorization": `Bearer ${resendApiKey}`,
    //       "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify({
    //       from: "audit@shahaln.com",
    //       to: "shahalnwork@gmail.com",
    //       subject: `Free Ad Account Audit Request from ${name}`,
    //       text: `Name: ${name}\nPhone: ${phone}\nBusiness Type: ${businessType || "N/A"}\nBudget: ${budget || "N/A"}\nMessage: ${message || "N/A"}`
    //     })
    //   });
    // }

    // Log in development/server console
    console.log("[New Lead / Audit Request]:", {
      name: name.trim(),
      phone: phone.trim(),
      businessType: businessType || "Not specified",
      budget: budget || "Not specified",
      marketingGoal: marketingGoal || "Not specified",
      message: message || "None",
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message: "Thank you! Your audit request has been received. I will review your information within 24 hours.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Failed to process request. Please try contacting via WhatsApp." },
      { status: 500 }
    );
  }
}
