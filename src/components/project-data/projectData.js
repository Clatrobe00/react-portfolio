import musicSpiderGif from '../../assets/gifs/Music-Spider.gif';
import liaBanner from '../../assets/pictures/ChineseLanterns.jpg';
import cyoaBanner from '../../assets/pictures/Castaway.jpg';
import comingSoon from '../../assets/pictures/ComingSoon.jpg';
import learningApp from '../../assets/pictures/learningApp.jpg';
import burgerLogger from '../../assets/pictures/burgerLogger.jpg';

const ProjectData = [
    {
        name: 'Music Spider',
        src: musicSpiderGif,
        description: 'A music finding app that allows the user to search up songs by lyrics and discover cool new artists.',
        link: 'https://inesr19.github.io/Project-1/',
        repo: 'https://github.com/Clatrobe00/Music-Spider',
        button: 'Find some music',
        technologies: ['Node', 'Shazaam Music API', 'Materialize CSS']
    },
    {
        name: 'Learnt Up',
        src: learningApp,
        description: 'A mobile-first language learning app for children.',
        link: 'https://floating-oasis-75260.herokuapp.com/',
        repo: 'https://github.com/kurtp23/language-app',
        button: 'Expand your mind',
        technologies: ['React', 'React-Spring', 'MongoDB Atlas']
    },
    {
        name: 'Castaway: Flight of the Phoenix',
        src: cyoaBanner,
        description: 'A choose-your-own-adventure style game that challenges the user to escape an alien planet.',
        link: 'https://cyoa-rpg.herokuapp.com/',
        repo: 'https://github.com/Clatrobe00/CYOA',
        button: 'Try your luck',
        technologies: ['Node', 'Handlebars', 'Sequelize']
    },
    {
        name: 'Lia Liu Chinese',
        src: liaBanner,
        description: 'A website for Lia Liu Chinese built with React.',
        link: 'https://lia-liu-chinese.herokuapp.com/',
        repo: 'https://github.com/Clatrobe00/liachinese',
        button: 'Learn Chinese',
        technologies: ['React', 'Node','Bootstrap']
    },
    {
        name: 'Google Books Search',
        src: comingSoon,
        description: 'A full stack MERN application that allows the user to search books through Google Books, and then save books to or delete books from their collection.',
        link: 'https://clb-google-books-search.herokuapp.com/',
        repo: 'https://github.com/Clatrobe00/google-books-search',
        button: 'Find your next book',
        technologies: ['React', 'Google Cloud API', 'MongoDB Atlas']
    },
    {
        name: 'The Burger Logger',
        src: burgerLogger,
        description: 'A full-stack app built with Node, Express, SQL, and HandleBars.',
        link: 'https://burger-logger-clb.herokuapp.com/',
        repo: 'https://github.com/Clatrobe00/Burger-Logger',
        button: 'Find some music',
        technologies: ['Node', 'Handlebars', 'JS']
    },
]

export default ProjectData;