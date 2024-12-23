import { Resend } from 'resend';
import type { FormData } from '../types/form';
import { generatePDF } from './pdfGenerator';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendFormEmail = async (data: FormData, recipientEmail: string) => {
  try {
    const pdfAttachment = await generatePDF(data);
    
    await resend.emails.send({
      from: 'medical-forms@yourdomain.com',
      to: recipientEmail,
      subject: `Patient Report - ${data.patientInfo.firstName} ${data.patientInfo.lastName}`,
      attachments: [
        {
          filename: 'patient-report.pdf',
          content: pdfAttachment,
        },
      ],
    });
    
    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error };
  }
};