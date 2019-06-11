# This code is absolutely awful and I'll explain why and what could be better

I created my main 3 personal projects (The personal website, fake/mock restaurant site and the fake/mock electricity company site) roughly 7-9 months after I started learning programming. As I'm updating this Readme it's been 1.5 years and the code you will see doesn't represent my current level of skill and knowledge.

I haven't managed to do any serious refactoring or improvements due to University and for now can only mention what was done badly and what can be improved as well as potentially what other technologies I could've used to improve the projects.

# Things that can be improved
- [ ] Not enough documentation, lack of comments. In a professional/team setting this is a must.
- [ ] 0 testing was done, neither unit or integration testing. At that point I hadn't learned testing but now I would use Jest + Puppeteer
- [ ] CSS is abysmal, no variable usage, way too many repeating/overlapping rules, sizes are bad/incosistent (didn't know about using REM while setting root font size to ex: 62.5%), no splitting of styles into components/modules (ie no architecture, didn't know about BEM, didn't know Sass)
- [ ] Nothing done in terms of accessibility
- [ ] Nothing done in terms of security (should've at least used Helmet.js, didn't even know about OWASP top 10)
- [ ] Deployed against Node only, no proper clustering & restart management (should've used PM2)
- [ ] Back-end/Server is just 1 big mess of a file, should've split & modularised it, didn't use Express' router, architecture is just bad and not scalable
- [ ] No usage of CDNs to serve static assets such as images
- [ ] No continuous integration set up such as with Travis CI, would just manually deploy to heroku
- [ ] Commits were always done on Master branch, to simulate a professional working environment I should've commited on separate branches
- [ ] Should have created the Front-End's Design/CSS from actual Photoshop/Sketch files or any other design tool (to know exact measurements/sizes in px) instead of using plain images/JPEGs and eyeballing the sizes and proportions

And there may be potentially many more things that could be improved (perhaps using Docker but I feel like that would be overkill for these small projects), that's one of the fun parts of Software Development, there's always more new stuff to learn. 