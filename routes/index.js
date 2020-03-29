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
                image: 'news-1.png',
                link: '#',
                blurb: 'Halvah fruitcake biscuit oat cake I love sweet roll sweet biscuit lollipop. Jelly beans bear claw sweet roll I love chocolate gummies. Apple pie cheesecake cupcake carrot cake cookie bear claw jujubes. I love sugar plum sesame snaps.'
            },
            {
                category: 'Story',
                title: 'The Girl Who Captured The Moon',
                date: 'Mar 22, 2020',
                image: 'news-2.png',
                link: '#',
                blurb: 'Gummi bears apple pie I love cake liquorice ice cream liquorice biscuit wafer. Chocolate bar biscuit pastry jelly-o danish jelly dessert. Danish sweet gummi bears chupa chups.'
            },
            {
                category: 'Activity',
                title: 'Popsicle Pirate Ship',
                date: 'Mar 19, 2020',
                image: 'news-3.png',
                link: '#',
                blurb: 'Gingerbread jelly beans I love chocolate cake carrot cake I love I love chupa chups. Cheesecake gummi bears cheesecake cake gummies candy wafer. Powder bear claw lollipop lollipop tiramisu sesame snaps gingerbread cake.'
            }
        ]
    });
});

/* GET reading page */
router.get('/read', function (req, res, next) {
    res.render('read', {
        title: 'Let\'s get to readin\''
    })
});

module.exports = router;
