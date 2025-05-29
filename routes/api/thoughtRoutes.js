const router = require('express').Router();
const thoughtController = require('../../controllers/thoughtController');


// GET all thoughts
router.get('/', thoughtController.getThoughts);

// GET a single thought by ID
router.get('/:thoughtId', thoughtController.getSingleThought);

// POST a new thought
router.post('/', thoughtController.createThought);

// PUT update a thought by ID
router.put('/:thoughtId', thoughtController.updateThought);

// DELETE a thought by ID
router.delete('/:thoughtId', thoughtController.deleteThought);

// POST add a reaction to a thought
router.post('/:thoughtId/reactions', thoughtController.addReaction);

// DELETE remove a reaction by reactionId from a thought
router.delete('/:thoughtId/reactions/:reactionId', thoughtController.removeReaction);

module.exports = router;
