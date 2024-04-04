import express from "express";
import bodyParser from "body-parser";
import nodeMailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
const port = 3000; 

app.use(express.json());
app.use(cors());

dotenv.config();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Form submission endpoint
app.post('/submit', async (req, res) => {
    console.log(req.body);
  const { firstName, lastName, email, contactNumber } = req.body;

  // Create transporter

  const transporter = nodeMailer.createTransport({
    service: 'Gmail', // e.g., 'Gmail'
    auth: {
      user: process.env.EMAIL_ID,
      pass: process.env.EMAIL_PASSCODE
    }
  });

  // Create email message
  const mailOptions = {
    from: 'omsaipharma51@gmail.com',
    to: email,
    subject: 'Welcome To Rescue Towing Service',
    html: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Rescue Towing Service</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f4f4f4;
                color: #333;
                margin: 0;
                padding: 0;
            }
            .container {
                max-width: 600px;
                margin: 20px auto;
                background-color: #fff;
                padding: 20px;
                border-radius: 10px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
            h1, h2 {
                color: #333;
                font-weight: bold;
                margin-bottom: 20px;
            }
            .main {
                font: bold;
                text-decoration: underline;
            }
            p {
                margin-bottom: 10px;
            }
            .service-list {
                margin-bottom: 20px;
            }
            .service-item {
                font-weight: bold;
                color: #007bff; /* Blue color */
            }
            .company-location {
                margin-top: 20px;
            }
            .company-location a {
                color: #007bff; /* Blue color */
                text-decoration: none;
            }
            .photos {
                max-width: 100%;
                height: auto;
                display: block;
                margin: 20px auto;
                border-radius: 5px;
            }
            .logo {
                width: 30%;
                height: auto;
                margin-left: 35%;
                margin-right: 35%;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <img src="https://lh3.googleusercontent.com/pw/AP1GczPuXYiQ92puCH87ClkoNTXYcJ9HDANOveAqfImB-hYaxJZ9GOpwlxX1v344q5KHyVEna0h7ojUo58NMzx3-CVG5eO0b_-vBErkU7jqL7FyiZcrmvD1Pdp86r7iQDTLitDLCldpWeGQRMB8_mFoJXbU=w360-h360-s-no-gm?authuser=0" class="logo">
            <h1>Welcome to Rescue Towing Service</h1>
            <p>Greetings ${firstName} ${lastName},</p>
            <p>We are dedicated to providing reliable towing and roadside assistance solutions to our valued customers. Our team of professionals is committed to ensuring your safety and peace of mind on the road.</p>
            
            <img src="https://lh3.googleusercontent.com/p/AF1QipMSzjOgTJfKANB6m3l3XakK-w6B9MX_n5XHl6NK=s0" class="photos" alt="Towing Truck">
    
            <div class="service-list">
                <h2>Our Services</h2>
                <ul>
                    <li><span class="service-item main">Heavy, Medium, and Light Duty Towing:</span> Towing services for vehicles of all sizes.</li>
                    <li><span class="service-item">Flatbed Towing Service:</span> Safe and secure transportation of your vehicle.</li>
                    <li><span class="service-item">Battery Replacement:</span> Quickly replace your dead battery with a new one.</li>
                    <li><span class="service-item">Tyre Change:</span> Swift tire changing service to get you back on the road.</li>
                    <li><span class="service-item">Fuel Supply:</span> Emergency fuel delivery to your location.</li>
                    <li><span class="service-item">Roadside Assistance:</span> Assistance for various roadside issues.</li>
                    <li><span class="service-item">Accidents Towing:</span> Towing service for vehicles involved in accidents.</li>
                    <li><span class="service-item">JumpStart:</span> Jumpstart your vehicle's battery when it's dead.</li>
                    <li><span class="service-item">LockOut:</span> Unlock your car when you're locked out.</li>
                    <li><span class="service-item">WinchOut:</span> Get your vehicle unstuck with our winch service.</li>
                </ul>
            </div>
            
            <img src="https://lh3.googleusercontent.com/p/AF1QipMqSxVMGPq3M3dE3NX_cKF3WZt_ngu0-UruBprk=s0" class="photos" alt="Towing Service Location">
    
            <div class="company-location">
                <h2>Company Location</h2>
                <p>Find us on Google Maps: <a href="https://maps.google.com/maps?q=16503c+Governor+Bridge+Rd+Apt+107,+Bowie,+MD+20716,+United+States">Rescue Towing Service Location</a></p>
            </div>
            <p>Your Submitted Contact Number is: ${contactNumber}</p>
        </div>
    </body>
    </html>
    
    `
  };

  try {
    // Send email
    await transporter.sendMail(mailOptions);
    res.send('Email sent successfully!');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('An error occurred while sending the email.');
  }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});