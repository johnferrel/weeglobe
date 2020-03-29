var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {
        title: 'Home',
        news: [
            {
                category: 'Learn',
                title: 'Captain Handwash and the Virus Villains!',
                date: 'Mar 28, 2020',
                image: 'capt-handwash.png',
                link: '#',
                blurb: 'Halvah fruitcake biscuit oat cake I love sweet roll sweet biscuit lollipop. Jelly beans bear claw sweet roll I love chocolate gummies. Apple pie cheesecake cupcake carrot cake cookie bear claw jujubes. I love sugar plum sesame snaps.'
            },
            {
                category: 'Story',
                title: 'The Girl Who Captured The Moon',
                date: 'Mar 22, 2020',
                image: 'girl-captures-moon.png',
                link: '#',
                blurb: 'Gummi bears apple pie I love cake liquorice ice cream liquorice biscuit wafer. Chocolate bar biscuit pastry jelly-o danish jelly dessert. Danish sweet gummi bears chupa chups.'
            },
            {
                category: 'Activity',
                title: 'Popsicle Pirate Ship',
                date: 'Mar 19, 2020',
                image: 'popsicle-pirate-ship.png',
                link: '#',
                blurb: 'Gingerbread jelly beans I love chocolate cake carrot cake I love I love chupa chups. Cheesecake gummi bears cheesecake cake gummies candy wafer. Powder bear claw lollipop lollipop tiramisu sesame snaps gingerbread cake.'
            }
        ]
    });
});

/* GET page titles. */
// router.get('/boy-apple-tree', function (req, res, next) {
// 	res.render('reading/boy-apple-tree', {
//     	pageTitles: [
//         	{
// 				bgimage: 'background-image:url(images/background/1.jpg);',
// 				link1: '/',
// 				link1Title: 'Home',
// 				link2: '/reading',
// 				link2Title: 'All Genres',
// 				genre: 'Funny Stories'
// 			}
//       	]
//   	});
// });

/* GET stories. */
router.get('/reading', function (req, res, next) {
	res.render('reading', {
    	title: 'Stories',
    	stories: [
        	{
				genre: 'Science',
				storyUrl: '/boy-apple-tree',
				storyTitle: 'The boy and the apple tree',
				readingTime: '',
				storyAuthor: '',
			}
      	]
  	});
});

router.get('/boy-apple-tree', function(req, res, next) {
	res.render('reading/boy-apple-tree', { title: 'The boy and the apple tree' })
  });

router.get('/classroom', function(req, res, next) {
    res.render('classroom', { title: 'Classsroom' })
});

router.get('/activities', function(req, res, next) {
  res.render('activities', { title: 'Activities' })
});

router.get('/games', function(req, res, next) {
  res.render('games', { title: 'Games' })
});

module.exports = router;
