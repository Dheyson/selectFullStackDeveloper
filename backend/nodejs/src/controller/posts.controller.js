const { Posts } = require('../../models');

exports.createPost = async (req, res) => {
	const { post_title, post_content, publish_date } = req.body;

	try {
		let response = await Posts.create({
			post_title,
			post_content,
			publish_date
		});

		res.status(201).send({
			message: 'Post added successfully!',
			body: {
				post: response
			},
		});

	} catch (error) {
		console.log('Something went wrong', error);
	}
};

exports.listPosts = async (req, res) => {
	const posts = await Posts.findAll();
	return res.status(200).send(posts);
}

exports.findPostsById = async (req, res) => {
	const post = await Posts.findByPk(
		req.params.id,
	);
	res.status(200).send({
		message: 'User was found!',
		body: post
	});
};

exports.updatePostById = async (req, res) => {
	try {
		const { postId } = req.params;
		const [updated] = await Posts.update(req.body, {
			where: { id: postId }
		});
		if (updated) {
			const updatedPost = await Posts.findOne({ where: { id: postId } });
			return res.status(200).json({ post: updatedPost });
		}
		throw new Error('Post not found');
	} catch (error) {
		return res.status(500).send(error.message);
	}
};

exports.deletePostById = async (req, res) => {
	const { id } = req.body;

	try {
		const response = await Posts.destroy({
			where: { id: id },
		});

		return res.status(200).send(true);
	} catch (error) {
		console.log('Something went wrong', error);
	}
};

