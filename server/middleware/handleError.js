
function handleError(err, req, res, next) {
    
    if(err.name === 'SequelizeValidationError' || err.name === 'SequelizeUniqueConstraintError') {
        return res.status(400).json({ message: err.errors[0].message });
    } else if(err.name === 'BadRequest') {
        return res.status(400).json({ message: err.message });
    } else if(err.name === 'Unauthorized') {
        return res.status(401).json({ message: err.message });
    } else if(err.name === 'JsonWebTokenError' ) {
        return res.status(401).json({ message: 'Invalid token' });
    }

}