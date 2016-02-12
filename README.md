# gamejane

Hello from

- [Cindy Miller](https://www.linkedin.com/in/cynthialm)
- [Jenny Rowley](https://www.facebook.com/jenny.rowley.58)
- [Jess Soberman](https://twitter.com/sobermanj)
- [Sean Bender](https://www.linkedin.com/in/sean-bender-57374247)
- [Matt Dennewitz](https://twitter.com/mattdennewitz)

At SNDMakes' 2016 Chicago party, we designed and developed
a simple UI for connecting new gamers with games they may enjoy
in a conversational and unobtrusive way. A user answers
questions to build a narrative sentence about the kind of games
they feel they would like to play, and the system responds
in kind with recommendations, both curated and automatic.

We felt that this would allow gamers to ease themselves into
games outside of the perceptions driven by toxic-out-loud
gaming culture.

Our functional demo app comes with a [handful of games](https://github.com/mattdennewitz/sndmakeschi-gamejane/blob/develop/src/database.js), each tagged and scored as they would be were this a real system.

This app requires a working Node installation.

## Installation

Clone this repo, and then:

```shell
$ npm install
```

... to install its requirements.

Then, run `webpack` to build the app:

```shell
$ webpack
```

And finally start an HTTP server to view the page.
To keep it simple, use Python's built-in HTTP server:

(Python 2)

```shell
$ python -m SimpleHTTPServer
```

(Python 3)

```shell
$ python -m http.server
```

Open [http://localhost:8000/](http://localhost:8000) to start!