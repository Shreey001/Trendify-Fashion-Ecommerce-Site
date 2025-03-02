import multer from "multer";
import path from "path";

// Configure multer to use disk storage for temporary file storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
});

const upload = multer({
    storage,
    limits: {
        fileSize: 5 * 1024 * 1024 // 5MB limit
    },
    fileFilter: function (req, file, cb) {
        const filetypes = /jpeg|jpg|png/;
        const mimetype = filetypes.test(file.mimetype);
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase());

        if (!file) {
            return cb(new Error('No file uploaded'), false);
        }

        if (!mimetype || !extname) {
            return cb(new Error('Only .jpg, .jpeg, and .png files are allowed'), false);
        }

        cb(null, true);
    }
});

export default upload;