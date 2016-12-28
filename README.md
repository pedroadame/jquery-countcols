# Jquery Column Count plugin
A simple plugin that counts how many columns are displayed passing a selector.

## What's this?
Let's say you have a dynamic grid that sets in 1 column for mobile portrait,
2 cols for tablet/mobile landscape, 4 columns for desktop, etc. And you need to
know in JS how many columns are displayed at the moment. Just give a selector
for the elements you want their columns counted and it will returned for you.

This plugins uses the `offset()` jQuery method and bases the column counting in
how many elements of the provided selector are displayed in the same
X coordinate.

## How to use
Simply install it with bower!
`bower install jquery-countcols`
- Note: Will be available on NPM soon

And call it:
ES6:
`const columnsNumber = $(".my-class-displayed-in-columns").countCols();`
Standard JS:
`var columnsNumber = $(".my-class-displayed-in-columns").countCols();`
It will give you 0, 1, 2... etc.

Easy as 1, 2, 3!
