# terminaltyper
A lightweight, fast and easy-to-use typer for simulating terminals in native js. Written in a single codepen session (so please excuse the mess). See it in use at https://randyzhou.com/.

## Usage
Include in html file with `<script type="text/javascript" src="location/of/typer.js"></script>`

### Setup
`var typer = new Typer([stage id],[target id], [ms between each char], [interrupt string], [# lines to start trimming terminal at]);`

### Type text on stage
`typer.type([string to type], [suffix], [callback]);`

### Dump text to stage instantly
`typer.dump([string to dump], [ms to wait before dumping text], [callback]);`

Proper documentation to come soon™.

### Why?
When building my personal website, I had the idea to make everything based around a simulated terminal at the top of the page. In order to accomplish this, I needed a way to animate typing, and at first I looked to [Typed.js](https://github.com/mattboldt/typed.js) for this functionality. However, although Typed.js is a fantastic library, I ended up having a few problems with how it wasn't built for repeated use/teardown (I was calling typed.destroy() between every new line), how it wasn't super fast (there was a noticeable blink when a new line was started) and how interrupt strings (useful when a user cancels their previous request, for example) had to be hacked in. And that's basically it.
