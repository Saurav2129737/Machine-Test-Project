const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');

const app = express();
app.use(bodyParser.json());
app.use(express.static('public'));  // Serve static files (HTML, CSS, JS)
app.use('/uploads', express.static('uploads'));  // Serve uploaded images

// MongoDB connection
mongoose.connect('mongodb://localhost/employeeDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error("MongoDB connection error:", err));

// Employee Schema
const employeeSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    mobile: String,
    designation: String,
    gender: String,
    course: [String],
    image: String,
});

const Employee = mongoose.model('Employee', employeeSchema);

// Multer setup for image upload
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const upload = multer({ storage: storage });

// POST route to create employee
app.post('/create', upload.single('image'), async (req, res) => {
    try {
        const { name, email, mobile, designation, gender, course } = req.body;
        const newEmployee = new Employee({
            name, email, mobile, designation, gender, course: course.split(','), image: req.file.filename
        });
        await newEmployee.save();
        res.status(201).send("Employee Created Successfully");
    } catch (error) {
        res.status(400).send("Error creating employee: " + error.message);
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
