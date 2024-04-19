const express = require('express');
const router = express.Router();

const { AddNotes, FetchAllNotes } = require( '../controller/AddNoteController');

router.route('/add').put(AddNotes);
router.route('/notes').get(FetchAllNotes);



module.exports = router;