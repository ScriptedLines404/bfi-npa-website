const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Email transporter configuration
const transporter = nodemailer.createTransport({
  service: 'gmail', // or use your email service
  auth: {
    user: process.env.EMAIL_USER, // Your email address
    pass: process.env.EMAIL_PASS, // Your email password or app-specific password
  },
});

// Send email endpoint
app.post('/api/send-email', async (req, res) => {
  const { name, company, phone, email, caseDetails } = req.body;

  // Validate required fields
  if (!name || !phone || !email || !caseDetails) {
    return res.status(400).json({ message: 'Please fill all required fields' });
  }

  // Email content
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'bfirspl@gmail.com', // BFI-NPA email
    subject: `New Case Submission from ${name}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px; }
          .header { background: #0A2540; color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { padding: 20px; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #0A2540; }
          .value { margin-top: 5px; color: #555; }
          .footer { background: #f5f5f5; padding: 15px; text-align: center; font-size: 12px; color: #777; border-radius: 0 0 10px 10px; }
          .highlight { color: #F59E0B; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>BFI-NPA Resolution Services</h2>
            <p>New Case Submission</p>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">📋 Client Details</div>
              <div class="value">
                <strong>Name:</strong> ${name}<br>
                <strong>Company:</strong> ${company || 'Not provided'}<br>
                <strong>Phone:</strong> ${phone}<br>
                <strong>Email:</strong> ${email}
              </div>
            </div>
            <div class="field">
              <div class="label">📝 Case Details</div>
              <div class="value">${caseDetails.replace(/\n/g, '<br>')}</div>
            </div>
          </div>
          <div class="footer">
            <p>This is an automated message from BFI-NPA website contact form.</p>
            <p>Please respond to this client within 24 hours.</p>
          </div>
        </div>
      </body>
      </html>
    `,
    // Plain text backup
    text: `
      BFI-NPA Resolution Services - New Case Submission
      ================================================
      
      Client Details:
      - Name: ${name}
      - Company: ${company || 'Not provided'}
      - Phone: ${phone}
      - Email: ${email}
      
      Case Details:
      ${caseDetails}
      
      Please respond to this client within 24 hours.
    `,
  };

  // Auto-reply to client
  const autoReplyOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Thank you for contacting BFI-NPA Resolution Services',
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #0A2540; color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { padding: 20px; background: #f9f9f9; }
          .footer { background: #f5f5f5; padding: 15px; text-align: center; font-size: 12px; color: #777; border-radius: 0 0 10px 10px; }
          .highlight { color: #F59E0B; }
          .button { display: inline-block; background: #F59E0B; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; margin-top: 15px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>BFI-NPA Resolution Services</h2>
          </div>
          <div class="content">
            <h3>Dear ${name},</h3>
            <p>Thank you for reaching out to <strong class="highlight">BFI-NPA Resolution Services</strong>. We have received your case submission and our team is reviewing the details.</p>
            <p><strong>Your submitted details:</strong></p>
            <ul>
              <li><strong>Name:</strong> ${name}</li>
              <li><strong>Phone:</strong> ${phone}</li>
              <li><strong>Email:</strong> ${email}</li>
            </ul>
            <p>One of our experts will contact you within <strong>24 hours</strong> to discuss your case and provide a free consultation.</p>
            <p>If you need immediate assistance, please call us at <strong class="highlight">+91-9444035070</strong>.</p>
            <p>Thank you for choosing BFI-NPA Resolution Services.</p>
            <p>Best regards,<br><strong>BFI-NPA Team</strong></p>
          </div>
          <div class="footer">
            <p>© 2024 BFI-NPA Resolution Services Pvt. Ltd. All rights reserved.</p>
            <p>51, Ramakrishna Mutt Road, 1st Floor, Mylapore, Chennai - 600004</p>
          </div>
        </div>
      </body>
      </html>
    `,
  };

  try {
    // Send main email to BFI-NPA
    await transporter.sendMail(mailOptions);
    
    // Send auto-reply to client
    await transporter.sendMail(autoReplyOptions);
    
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send email. Please try again later.' });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Server is running' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});