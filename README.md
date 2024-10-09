# How to run

To run the project, execute the "npm run dev" command in the terminal, when the project is built, go to http://localhost:3000.

## features

- filtering of car models by their make(brand) and year
- displaying the filtered cars on a separate page
- ability to go back to filters page

## Architecture

### Routes

- / - main page, has the filter component.
- /result/:makeId/:year - cards for car models, displayed as a grid

### Folder structure

- components: folder that contains miscelaneous components, or those that might be used across different pages in the future.
- types: folder that contains typescript types
- utils: folder that contains utility functions

### Tech stack

- Node.js
- React
- Next.js
- Tailwind css
- TypeScript
- ESlint
- Prettier

## Things to improve

- create a separate component for selects to make code more DRY
- tailwind should have some functionality so that developer doesn't repeat all of the classes for every breakpoint
- change default select values to something more descriptive (currently its just an empty string)
- there might be a better way to create a list of years (currently created via for loop)
- Create an animated loader (spinner would be great)
