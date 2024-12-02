// import PDFDocument from 'pdfkit';
// import { createWriteStream, readFileSync } from 'fs';
// import path from 'path';
// import * as moment from "moment";

// interface ClientData {
//     client?: {
//         customer_name: string;
//         email: string;
//         shop_address: string;
//     };
//     client_id: string;
//     branch_name: string;
//     installation_date: string;
//     software_name: string;
//     amc: number;
// }

// export const generatePDFInvoice = (data: ClientData) => {
//     return new Promise<Buffer>((resolve, reject) => {
//         // Create a new PDFDocument
//         const doc = new PDFDocument({
//             size: 'A4',
//             margins: { top: 0, bottom: 0, left: 0, right: 0 },
//         });

//         // Store the PDF in a buffer
//         const buffers: Uint8Array[] = [];
//         doc.on('data', (buffer) => buffers.push(buffer));
//         doc.on('end', () => {
//             const pdfBuffer = Buffer.concat(buffers);
//             resolve(pdfBuffer);
//         });

//         // Formatting helpers
//         const formatDate = (date: string) => moment.utc(date).format('DD-MMM-YYYY');
//         const currentYear = moment.utc(new Date()).format('YYYY');

//         // Calculate AMC dates
//         const installDate = moment.utc(data.installation_date);
//         const currentAMC = installDate.format('DD-MMM-YYYY');
//         const nextAMC = installDate.add(365, 'days').format('DD-MMM-YYYY');

//         // Add content to the PDF
//         // Header
//         doc.fontSize(10);

//         // Try to add logo
//         try {
//             const pageWidth = 595.28;
//             const pageCenter = pageWidth / 2;
//             const logoPath = path.join(process.cwd(), 'public', 'assets', 'logo', 'new_logo.jpg');
//             const logoX = pageCenter - 100 / 2;
//             doc.image(logoPath, logoX, 20, { width: 100 });

//             // Invoice Header
//             doc.moveDown(2);
//             doc.font('Helvetica-Bold').fontSize(16).text('AMC INVOICE', { align: 'center' });
//             doc.moveDown();

//             // Customer Information
//             doc.font('Helvetica').fontSize(10);
//             doc.text('Invoice No: #' + moment.utc(new Date()).valueOf(), { align: 'right' });
//             doc.text('Date: ' + moment.utc(new Date()).format('DD/MM/YYYY'), { align: 'right' });
//             doc.moveDown();

//             // Services Details
//             doc.font('Helvetica-Bold').text('SERVICES TO', { underline: true });
//             doc.font('Helvetica').text(`Customer ID: ${data.client_id}`);
//             doc.text(`Customer Name: ${data.client?.customer_name}`);
//             doc.text(`Branch: ${data.branch_name}`);
//             doc.moveDown();

//             // Bill To
//             doc.font('Helvetica-Bold').text('BILL TO', { underline: true });
//             doc.font('Helvetica').text(`${data.client?.customer_name}`);
//             doc.text(`Contact: ${data.client?.email}`);
//             doc.text(`Address: ${data.client?.shop_address}`);
//             doc.moveDown(2);

//             // Service Details Table
//             const startX = 50;
//             const colWidth = 250;

//             doc.font('Helvetica-Bold').text('Service Details', { align: 'center' });

//             // Installation Date Row
//             doc.font('Helvetica').text('Installation Date', startX, undefined, { continued: true });
//             doc.text(formatDate(data.installation_date), startX + colWidth);

//             // AMC Duration Row
//             doc.text('AMC Duration', startX, undefined, { continued: true });
//             doc.text(`${currentAMC} to ${nextAMC}`);

//             // Next AMC Renewal Date Row
//             doc.text('Next AMC Renewal Date', startX, undefined, { continued: true });
//             doc.text(nextAMC);

//             doc.moveDown();

//             // Pricing Details
//             doc.font('Helvetica-Bold').text('Pricing Details', { align: 'center' });

//             doc.font('Helvetica').text('Description', startX, undefined, { continued: true });
//             doc.text(`${data.software_name.toUpperCase()} - YEAR ${currentYear}`, startX + colWidth);

//             doc.text('Total Amount', startX, undefined, { continued: true });
//             doc.text(`QR ${(+data.amc).toFixed(2)}`, startX + colWidth);

//             doc.moveDown(2);

//             // Footer
//             doc.font('Helvetica').fontSize(8);
//             doc.text('Please contact +974 30611913 with any questions regarding this invoice', { align: 'center' });
//             doc.text('Authorized Signatory, Amalgamate Technology', { align: 'center' });

//             // Finalize PDF
//             doc.end();

//         } catch (error) {
//             console.log("-----", error);

//             reject(error);
//         }
//     });
// };