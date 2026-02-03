import {NextRequest, NextResponse} from 'next/server';
import {Resend} from 'resend';
import WaitingListEmail from '@/app/components/emails/WaitingListEmail';
import {render} from '@react-email/render';

const resend = new Resend(process.env.RESEND_API_KEY);
const toEmail = process.env.TO_EMAIL;

export async function POST(req: NextRequest) {
  try {
    const {name, email, userType} = await req.json();

    if (!name || !email) {
      return NextResponse.json({error: 'Name and email are required'}, {status: 400});
    }

    if (!toEmail) {
      return NextResponse.json({error: 'TO_EMAIL environment variable is not set'}, {status: 500});
    }

    const emailHtml = render(<WaitingListEmail name={name} email={email} userType={userType} />);

    const {error} = await resend.emails.send({
      from: 'noreply@skillstruct.com',
      to: toEmail,
      subject: 'New Evolmio Waiting List Submission',
      html: emailHtml,
    });

    if (error) {
      console.error('Resend API Error:', error);
      return NextResponse.json({error: 'Failed to send email'}, {status: 500});
    }

    return NextResponse.json({message: 'Email sent successfully'});
  } catch (error) {
    console.error('API Route Error:', error);
    return NextResponse.json({error: 'An unexpected error occurred'}, {status: 500});
  }
}
