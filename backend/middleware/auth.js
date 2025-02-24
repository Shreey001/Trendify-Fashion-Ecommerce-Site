import jwt from 'jsonwebtoken';


const authUser = async(req, res, next) => {
    const {token} = req.headers;
    
    if (!token) {
        return res.json({success: false, message: 'Authentication required'});
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = { _id: decoded.id }; // Add user info to request object
        next();
    } catch (error) {
        console.log(error);
        res.json({success: false, message: 'Invalid or expired token'});
    }
};

export default authUser;