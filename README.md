# Preview Documentation Built in Antora

As our theme uses SVG `use` the theme will not preview locally by simply loading the files via the `file:///` method directly into the browser, it should be run from a server. This small repo sets up a basic webserver that points to a placeholder index page containing links to each documentation group.

Depending on your locations of the documentation files you should edit the URLs in the index.html file.

## Running the script

1. Clone this repo

2. In a terminal type `npm install`, this will install the required Node packages

3. Duplicate the `index-template.html` file and customize the links to your generated docs content if needed, note you may have issues if the generated content folder is outside of the gulp server folder, I haven't tested this so be prepared for it not to work of you try that

4. To start the web server type `gulp`, you should then see output in the terminal for the IP address and port you should load in your browser