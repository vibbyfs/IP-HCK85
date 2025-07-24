const { Comment, User } = require('../models');

class CommentsController {


    static async listComments(req, res) {
        try {
            const { id: ReportId } = req.params;
            const comments = await Comment.findAll({
                where: { ReportId },
                order: [['createdAt', 'ASC']],
                include: [{ model: User, attributes: ['id', 'name'] }]
            });
            res.status(200).json(comments);
        } catch (err) {
            res.status(500).json({ message: "Internal server error" });
        }
    }

    static async createComment(req, res) {
        try {
            const { id: ReportId } = req.params;
            const { content } = req.body;
            const comment = await Comment.create({
                content,
                ReportId,
                UserId: req.user.id
            });
            res.status(201).json(comment);
        } catch (err) {
            res.status(500).json({ message: "Internal server error" });
        }
    }

    static async deleteComment(req, res) {
        try {
            const { commentId } = req.params;
            const comment = await Comment.findByPk(commentId);
            if (!comment) return res.status(404).json({ message: "Comment not found" });

            if (comment.UserId !== req.user.id) {
                return res.status(403).json({ message: "You are not authorized" });
            }

            await comment.destroy();
            res.status(200).json({ message: "Comment deleted successfully" });
        } catch (err) {
            res.status(500).json({ message: "Internal server error" });
        }
    }

}

module.exports = CommentsController;