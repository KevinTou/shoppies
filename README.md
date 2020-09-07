# <h1 name="top">The Shoppies</h1>

<img src="https://i.imgur.com/XbwbhcD.png" alt="The Shoppies">

**Live Website**: [The Shoppies](https://shoppies-nominations.netlify.app/)

A React-based web application utilizing the [OMDb API](http://www.omdbapi.com/) to search for and nominate your five favorite movies.

This project was based on a challenge, given as an alternative to submitting a personal project, for a **Shopify Web Developer Internship (Winter 2021)** position.

### Table of Contents ([Top](#top))

1. [The Challenge](#challenge)
2. [Installation](#installation)
3. [The Journey](#journey)
4. [List of Things To Do](#todo)
5. [Known Bugs](#bugs)
6. [Third-Party Libraries (and Considerations)](#libraries)

### <h3 name="challenge">The Challenge :movie_camera: ([Top](#top))</h3>

**Web Developer Internship Challenge** - [Google Doc](https://docs.google.com/document/d/1AZO0BZwn1Aogj4f3PDNe1mhq8pKsXZxtrG--EIbP_-w/edit#heading=h.31w9woubunro)

Essentially, **the challenge** was to create a user interface which:

- Search OMDB and display the results (movies only)
- Add a movie from the search results to our nomination list
- View the list of films already nominated
- Remove a nominee from the nomination list

More explicitly, the **technical requirements** were:

1. Search results should come from OMDB's API (free API key: http://www.omdbapi.com/apikey.aspx).
2. Each search result should list at least its title, year of release and a button to nominate that film.
3. Updates to the search terms should update the result list
4. Movies in search results can be added and removed from the nomination list.
5. If a search result has already been nominated, disable its nominate button.
6. Display a banner when the user has 5 nominations.

### <h3 name="installation">Installation :floppy_disk: ([Top](#top))</h3>

**\*Note\*** - Request a **free OMDb API key** at: [API Key Sign Up](http://www.omdbapi.com/apikey.aspx), otherwise the application will not work.

1. Fork/clone the repository
2. Create a `.env` file in your root folder
3. Inside of your `.env` file, add `REACT_APP_KEY=yourkey` to the file and save it
4. Run `npm install` to install the dependencies
5. Run `npm start` to launch a local instance of the application

### <h3 name="journey">The Journey :airplane: ([Top](#top))</h3>

The challenge sounded easy enough after reading the specifications but I found out that there were quite a few complications that came from using the API and designing the application.

The search functionality brought up a lot of interesting things to consider. I wanted to incorporate something like [Elastic](https://www.elastic.co/) but found out that you would need to somehow cache the data, which I didn't have access to, but I was thinking about incorporating later and caching as users make a successful query. This was something I thought of after the fact and will try to incorporate down the line. For better user experience, I added debouncing to my search and made an "instant search" functionality once a user stops typing.

The API itself was very interesting. I ended up using the images from the Poster's API and was surprised with the data that was returned. I've always used images through a source link and this was the first time I had to deal with binary data being returned from an API. After a bit of research, I ended up converting the response into a `blob` and converting that into a `DOMString`.

Another few issues I had with the API was the fact that it had duplicate data within the search results and that it returned results other than movies as well. The first issue I fixed was getting unique results. I ended up creating a psuedo-cache and checking to see if the movie was already in the search results, and if it was, I would just ignore it. For the other issue, I passed through a `?type=movies` parameter to the request, but it seems like certain things are incorrectly marked on the database's end... So I was able to remove some of the unwanted data but couldn't completed get rid of it (i.e. searching `final fantasy` brings up `Final Fantasy X-2`, which is a game).

There are a few other features I would like to include and will continue to update as time permits, one utilizing an open source library built by Shopify called `Draggable`. This will most likely be a work-in-progress because changing into a drag-and-drop creates a different user experience and will need futher research for design and implementation.

### <h3 name="todo">List of Things To Do :memo: ([Top](#top))</h3>

- [ ] Incorporate fuzzy/auto-complete search
- [ ] Add a sharing feature (i.e. links)
- [ ] Allow users to persist their session across multiple platforms (i.e. phone to desktop)
- [ ] Save a user's nominations after leaving the website
- [ ] Add a most recently viewed list
- [ ] Add movie details (possibly in a modal)
- [ ] Add tests (i.e. unit, e2e)
- [ ] Incorporate drag-and-drop feature to add/remove nominations
- [ ] Optimize database requests

### <h3 name="bugs">Known Bugs :no_entry_sign: ([Top](#top))</h3>

:x: Confetti component (from `react-dom-confetti`) stretches window size which creates white-space until the animation finishes
:x: The input and the icon for the search bar can be a pixel or two off on mobile

### <h3 name="libraries">Third-Party Libraries (and Considerations) :books: ([Top](#top))</h3>

Third-Party Libraries Used:

- [react-dom-confetti](https://www.npmjs.com/package/react-dom-confetti) - A React component used to "trigger a confetti explosion" on prop change
- [react-redux](https://react-redux.js.org/) - The "official Redux UI binding library for React"
- [redux](https://redux.js.org/) - A "Predictable State Container for JS Apps"
- [redux-thunk](https://www.npmjs.com/package/redux-thunk) - Thunk middleware for Redux
- [axios](https://www.npmjs.com/package/axios) - A "Promise based HTTP client for the browser and node.js"
- [lodash](https://lodash.com/) - A "modern JavaScript utility library delivering modularity, performance & extras"
- [react-id-swiper](https://react-id-swiper.ashernguyen.site/) - A library "to use Swiper as a ReactJs component"
- [swiper](https://swiperjs.com/) - The "most modern free mobile touch slider with hardware accelerated transitions and amazing native behavior"

Considerations:

- [@shopify/draggable](https://shopify.github.io/draggable/) - An open source "modern drag and drop JavaScript library" by Shopify
- [search-ui](https://github.com/elastic/search-ui) - A "React library that allows you to quickly implement search experiences without re-inventing the wheel"
