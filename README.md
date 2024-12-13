# Preview Documentaion Built from Antora

Because our theme uses SVG `use` the theme will not preview locally by simply loading the files via the file:/// method directly into the browsesr and should be run from a server. This small repo sets up a basic webserver that points to a placeholder index page containing links to each documentation group.

Depending on your locations of the documentation files you should edit the URLs in the index.html file.

## Running the script

1. To install donwload the repo and in a terminal type `npm i`, this will install the Node packages

2. To start the web server type `gulp`, you should then see output in the terminal for the IP address and port you should load in your browser