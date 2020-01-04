const path = require('path');

const express = require('express');


const router = express.Router();

router.use('/', (req, res, next) => {
	if(req.url === '/') {
		res.render('home', {pagetitle : 'Home'});	
	}else {
		res.status(404).render('404', {pagetitle : '404 - Page Not Found'});
	}
});

module.exports = router;