
async function authAdminRT(req, res, next) {

    if (!req.user) {
        return res.status(401).json({ message: 'Access denied.' });
    }

    if (req.user.RoleId !== 'RT') {
        return res.status(403).json({ message: 'Only RT admin can access.' });
    }
    next();
};

module.exports = authAdminRT;
