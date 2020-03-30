var express = require('express');
var router = express.Router();

var pageHeaders = {
    'boy-apple-tree': {
        bgimage: 'background-image:url(/images/background/1.jpg);',
        link1: '/',
        link1Title: 'Home',
        link2: '/reading',
        link2Title: 'All Stories',
        headerTitle: 'The boy and the apple tree'
    },
    'dear-watson': {
        bgimage: 'background-image:url(/images/background/1.jpg);',
        link1: '/',
        link1Title: 'Home',
        link2: '/reading',
        link2Title: 'All Stories',
        headerTitle: 'Sherlock Holmes - Dear Watson'
    },
    'boy-who-was-always-losing-his-temper': {
        bgimage: 'background-image:url(/images/background/1.jpg);',
        link1: '/',
        link1Title: 'Home',
        link2: '/reading',
        link2Title: 'All Stories',
        headerTitle: 'Boy who was always losing his temper'
    }
}

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {
        title: 'Home',
        slides: [
            {
                image: 'images/main-slider/1.jpg',
                title: 'Learn more about coronavirus',
                caption: 'What can you do to help stop coronavirus?',
                link: '#stop-coronavirus'
            },
            {
                image: 'images/main-slider/2.jpg',
                title: 'Learn more about coronavirus',
                caption: 'What\'s a coronavirus anyway?',
                link: '#what-coronavirus'
            }
        ],
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

/* GET stories. */
router.get('/reading', function (req, res, next) {
	res.render('reading', {
    	title: 'Stories',
    	stories: [
        	{
				imgUrl: 'reading/the-boy-and-the-apple-tree.jpg',
				genre: 'Interesting reading',
				storyUrl: 'reading/stories/boy-apple-tree',
				headerTitle: 'The boy and the apple tree',
				readingTime: '15 minutes',
				storyAuthor: 'Jocelyn Mojzes',
			},
			{
				imgUrl: 'reading/holmes.jpg',
				genre: 'Funny stories',
				storyUrl: 'reading/stories/dear-watson',
				headerTitle: 'Sherlock Holmes - Dear Watson',
				readingTime: '2 minutes',
				storyAuthor: 'Arthur Conan Doyle',
			},
			{
				imgUrl: 'reading/boy-temper.jpg',
				genre: 'Short stories',
				storyUrl: 'reading/stories/boy-who-was-always-losing-his-temper',
				headerTitle: 'Boy who was always losing his temper',
				readingTime: '3 minutes',
				storyAuthor: 'Unknown',
			}
      	]
  	});
});

/* Route each story to a different url. Set headers for each story page */
router.get('/reading/stories/:storyId', function(req, res, next) {
	res.render('reading/stories', {
        title: 'A Story',
		storyId: req.params.storyId.toLowerCase(),
		pageHeader: {
			bgimage: pageHeaders[req.params.storyId.toLowerCase()].bgimage,
			link1: pageHeaders[req.params.storyId.toLowerCase()].link1,
			link1Title: pageHeaders[req.params.storyId.toLowerCase()].link1Title,
			link2: pageHeaders[req.params.storyId.toLowerCase()].link2,
			link2Title: pageHeaders[req.params.storyId.toLowerCase()].link2Title,
			headerTitle: pageHeaders[req.params.storyId.toLowerCase()].headerTitle
		}
    })
});

router.get('/classroom', function(req, res, next) {
    res.render('classroom', { title: 'Classsroom' })
});

router.get('/activities', function(req, res, next) {
  res.render('activities', {
        title: 'Activities',
        pageHeader: {
            bgimage: 'background-image:url(/images/background/1.jpg);',
            link1: '/',
            link1Title: 'Home',
            link2: '/activities',
            link2Title: 'All activities',
            headerTitle: 'Dance with GoNoodle'
        }
    })
});

router.get('/games', function(req, res, next) {
    res.render('games', {
        title: 'Games',
        pageHeader: {
            bgimage: 'background-image:url(/images/background/1.jpg);',
            link1: '/',
            link1Title: 'Home',
            link2: '/games',
            link2Title: 'All Games',
            headerTitle: 'Wanna Play A Game?'
        }
    })
});

router.get('/login', function(req, res, next) {
    res.render('login', { title: 'Login' })
});

router.post('/search', function(req, res, next) {
    res.render('search', {
        title: 'Search'
    });
});

module.exports = router;
