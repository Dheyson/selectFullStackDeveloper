const { posts } = require('../../database/models');

module.exports.createPost = async (req, res) => {
	const { post_title, post_content, publish_date, userId } = req.body;
	// pega o ID do user da sesseon - User logado

	try {
		let response = await posts.create({
			post_title,
			post_content,
			publish_date,
			userId
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

module.exports.listPosts = async (req, res) => {
	const Posts = await posts.findAll();
	return res.status(200).send(Posts);
}

module.exports.findPostsById = async (req, res) => {
	const post = await posts.findByPk(
		req.params.id,
	);
	res.status(200).send({
		message: 'User was found!',
		body: post
	});
};

module.exports.updatePostById = async (req, res) => {
	try {
		const { id } = req.params;

		const [updated] = await posts.update(req.body, {
			where: { id: id }
		});
		if (updated) {
			const updatedPost = await posts.findOne({ where: { id: id } });
			return res.status(200).json({ post: updatedPost });
		}
		throw new Error('Post not found');
	} catch (error) {
		return res.status(500).send(error.message);
	}
};

module.exports.deletePostById = async (req, res) => {
	const post = await posts.findByPk(
		req.params.id,
	);

	try {
		const response = await posts.destroy({
			where: { id: post.id },
		});

		return res.status(200).send(true);
	} catch (error) {
		console.log('Something went wrong', error);
	}
};
