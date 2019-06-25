# terminaltyper
A lightweight, fast and easy-to-use typer for simulating terminals in native js. Written in a single codepen session (so please excuse the mess). See it in use at https://randyzhou.com/.

## Usage
Include in html file with `<script type="text/javascript" src="location/of/typer.js"></script>`

### Setup
`var typer = new Typer(\[stage id\],\[target id\], \[ms between each char\], \[interrupt string\], \[# lines to start trimming terminal at\]);`

### Type text on stage
typer.type(\[string to type\], \[suffix\], \[callback\]);

### Dump text to stage instantly
typer.dump(\[string to dump\], \[ms to wait before dumping text\], \[callback\]);
`

Proper documentation to come soon™.
