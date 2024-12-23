import { PDFDocument, rgb } from '@react-pdf/renderer';
import type { FormData } from '../types/form';

const styles = {
  page: {
    padding: 30,
  },
  section: {
    margin: 10,
    padding: 10,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
  },
};

export const generatePDF = async (data: FormData): Promise<Blob> => {
  const doc = await PDFDocument.create();
  const page = doc.addPage();
  const { width, height } = page.getSize();

  // Add title
  page.drawText('Patient Report', {
    x: 50,
    y: height - 50,
    size: 24,
    color: rgb(0, 0, 0),
  });

  // Patient Information
  page.drawText(`Patient: ${data.patientInfo.firstName} ${data.patientInfo.lastName}`, {
    x: 50,
    y: height - 100,
    size: 12,
  });

  page.drawText(`DOB: ${data.patientInfo.dateOfBirth}`, {
    x: 50,
    y: height - 120,
    size: 12,
  });

  // Vital Signs
  page.drawText('Vital Signs:', {
    x: 50,
    y: height - 160,
    size: 14,
  });

  page.drawText(`Blood Pressure: ${data.vitalSigns.bloodPressure}`, {
    x: 50,
    y: height - 180,
    size: 12,
  });

  // Add more sections as needed...

  return doc.save();
};