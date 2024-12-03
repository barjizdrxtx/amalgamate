import { NextApiRequest, NextApiResponse } from 'next';
import PDFDocument from 'pdfkit';
import moment from 'moment';
import path from 'path';
import fs from 'fs';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }
    const data = JSON.parse(req.body);
    try {
        // Create a new PDF document
        const doc = new PDFDocument({ size: 'A4', margin: 50 });

        // Set up response to send PDF
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', `attachment; filename="${data.client?.customer_name}_invoice.pdf"`);

        // Pipe the PDF directly to the response
        doc.pipe(res);

        // Formatting helpers
        const formatDate = (date: string) => moment.utc(date).format('DD-MMM-YYYY');
        const currentYear = moment.utc(new Date()).format('YYYY');

        // Calculate AMC dates
        const installDate = moment.utc(data.installation_date);
        const currentAMC = installDate.format('DD-MMM-YYYY');
        const nextAMC = installDate.clone().add(365, 'days').format('DD-MMM-YYYY');

        // Page width and styling
        const pageWidth = 595.28;
        const pageCenter = pageWidth / 2;
        const startX = 50;
        const colWidth = 250;

        // Background color for headers
        const headerBackgroundColor = '#0066CC'; // Blue color similar to the original invoice
        const textColor = 'white';

        // Add logo
        const logoPath = data.logo_path || path.join(process.cwd(), 'public', 'assets', 'logo', 'new_logo.jpg');

        // Check if logo exists
        if (fs.existsSync(logoPath)) {
            const logoX = pageCenter - 100 / 2;
            doc.image(logoPath, logoX, 20, { width: 100 });
        }

        // Invoice Header with Background
        doc.moveDown(2);
        doc.fillColor(headerBackgroundColor)
            .rect(startX, doc.y, pageWidth - 2 * startX, 25)
            .fill();
        doc.fillColor(textColor)
            .font('Helvetica-Bold')
            .fontSize(16)
            .text('AMC INVOICE', { align: 'center' });

        // Invoice Details
        doc.fillColor('black')
            .font('Helvetica')
            .fontSize(10);
        doc.text('Invoice No: #' + moment.utc(new Date()).valueOf(), { align: 'right' });
        doc.text('Date: ' + moment.utc(new Date()).format('DD/MM/YYYY'), { align: 'right' });
        doc.moveDown();

        // Services Details Header
        doc.fillColor(headerBackgroundColor)
            .rect(startX, doc.y, pageWidth - 2 * startX, 20)
            .fill();
        doc.fillColor(textColor)
            .font('Helvetica-Bold')
            .text('SERVICES TO', { align: 'center' });

        // Customer Information
        doc.fillColor('black')
            .font('Helvetica')
            .text(`Customer ID: ${data.client_id}`);
        doc.text(`Customer Name: ${data.client?.customer_name}`);
        doc.text(`Branch: ${data.branch_name}`);
        doc.moveDown();

        // Bill To Header
        doc.fillColor(headerBackgroundColor)
            .rect(startX, doc.y, pageWidth - 2 * startX, 20)
            .fill();
        doc.fillColor(textColor)
            .font('Helvetica-Bold')
            .text('BILL TO', { align: 'center' });

        // Bill To Details
        doc.fillColor('black')
            .font('Helvetica')
            .text(`${data.client?.customer_name}`);
        doc.text(`Contact: ${data.client?.email}`);
        doc.text(`Address: ${data.client?.shop_address}`);
        doc.moveDown(2);

        // Service Details Header
        doc.fillColor(headerBackgroundColor)
            .rect(startX, doc.y, pageWidth - 2 * startX, 20)
            .fill();
        doc.fillColor(textColor)
            .font('Helvetica-Bold')
            .text('Service Details', { align: 'center' });

        // Service Details Content
        doc.fillColor('black')
            .font('Helvetica');

        // Installation Date Row
        doc.text('Installation Date', startX, undefined, { continued: true });
        doc.text(formatDate(data.installation_date), startX + colWidth);

        // AMC Duration Row
        doc.text('AMC Duration', startX, undefined, { continued: true });
        doc.text(`${currentAMC} to ${nextAMC}`);

        // Next AMC Renewal Date Row
        doc.text('Next AMC Renewal Date', startX, undefined, { continued: true });
        doc.text(nextAMC);

        doc.moveDown();

        // Pricing Details Header
        doc.fillColor(headerBackgroundColor)
            .rect(startX, doc.y, pageWidth - 2 * startX, 20)
            .fill();
        doc.fillColor(textColor)
            .font('Helvetica-Bold')
            .text('Pricing Details', { align: 'center' });

        // Pricing Details Content
        doc.fillColor('black')
            .font('Helvetica');

        doc.text('Description', startX, undefined, { continued: true });
        doc.text(`${data.software_name.toUpperCase()} - YEAR ${currentYear}`, startX + colWidth);

        doc.text('Total Amount', startX, undefined, { continued: true });
        doc.text(`QR ${(+data.amc).toFixed(2)}`, startX + colWidth);

        doc.moveDown(2);

        // Footer
        doc.font('Helvetica')
            .fontSize(8)
            .fillColor('black')
            .text('Please contact +974 30611913 with any questions regarding this invoice', { align: 'center' });
        doc.text('Authorized Signatory, Amalgamate Technology', { align: 'center' });

        // Finalize PDF
        doc.end();

    } catch (error) {
        console.error('PDF Generation Error:', error);
        res.status(500).json({ message: 'Error generating PDF', error: error });
    }
}