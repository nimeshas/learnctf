# CTFGuide

CTFGuide is a simple React app for beginners to explore CTF topics, read short writeups, and view upcoming events across multiple pages.

**project structure**

```
src/
	app.jsx
	main.jsx
	app.css
	index.css
	components/
		navbar.jsx
		ctfcard.jsx
		writeupcard.jsx
		topicsidebar.jsx
		statcard.jsx
	pages/
		homepage.jsx
		learnpage.jsx
		writeupspage.jsx
		upcomingpage.jsx
	data/
		topics.js
		writeups.js
		ctfs.js
```

**requirements (where used)**

- react jsx: app.jsx, main.jsx, pages/, components/
- react components: app.jsx, pages/, components/
- component api: components/ (ctfcard, writeupcard, topicsidebar, statcard)
- class component (constructor): not used now (profile page removed)
- component lifecycle: not used now (profile page removed)
- react state: pages/learnpage.jsx, pages/writeupspage.jsx, components/writeupcard.jsx
- react props: components/ and pages/ that pass data into them
- prop types: components/ (ctfcard, writeupcard, topicsidebar, statcard)
- styling in react: app.css, index.css, inline styles in pages/ and components/
- react hooks: useeffect in pages/homepage.jsx, pages/learnpage.jsx; usestate in pages/learnpage.jsx, pages/writeupspage.jsx, components/writeupcard.jsx
- react routing: app.jsx (routes), components/navbar.jsx (links)
