const { Comment } = require('../models');

class CommentsController {


    static async createComment(req, res) {
        try {
            const { id: ReportId } = req.params;
            const { content } = req.body;

            const comment = await Comment.create({
                ReportId,
                UserId: req.user.id,
                content
            });

            res.status(201).json(comment);
        } catch (err) {
            console.log("ERROR CREATE COMMENT", err);
            res.status(500).json({ message: 'Internal server error' });
        }
    };


    static async listComments(req, res) {
        try {
            const { id: ReportId } = req.params;

            const comments = await Comment.findAll({
                where: { ReportId },
                order: [['createdAt', 'ASC']],
                include: [{ model: User, attributes: ['id', 'name'] }]
            });

            res.json(comments);
        } catch (err) {
            console.log("ERROR LIST COMMENTS", err);
            res.status(500).json({ message: 'Internal server error' });
        }
    };


    static async deleteComment(req, res) {
        try {
            const { commentId } = req.params;
            const comment = await Comment.findByPk(commentId);
            if (!comment) {
                return res.status(404).json({ message: 'Comment not found' });
            }

            await comment.destroy();
            res.json({ message: 'Comment deleted successfully' });
        } catch (err) {
            console.log("ERROR DELETE COMMENT", err);
            res.status(500).json({ message: 'Internal server error' });
        }
    };

}

module.exports = CommentsController;