# Startup Application

## Elevator Pitch

I am going to make a Pixel art/sprite animation application where anyone can enter and easily create new pixelated masterpieces. Each user can save their own drawings and animations, as well as post them to the platform, where other users can see them and download them at the poster's discression. Users will be able to use various tools to assist their drawings, like a color history tracker, color palette generator, animation frames viewer, and more. It'll be accessible to use with mouse, keyboard, or both. Users will also be able to have collaborative canvases which will update in real time to all users connected, with a small chat box.

## Key Features

- Reactive Pixel Art Canvas
- Saving and Publishing sprites and animations
- Dynamic Color Selection in RGBA.
- Color History Tab
- Animation Frame View and Switch

## Technology Representation

- **HTML:** Three pages with HTML, one for Login, one for canvas, another for file storage viewing. Each one with links to each other.
- **CSS:** Resizing canvas and tools to fit many screen sizes, with color picking background.
- **JavaScript:** Login functionality, as well as updating each pixel's 4 values, and making backend calls.
- **React:** Two-page application with canvas componetized and reactive to user's input.
- **Web Service:** Endpoints for:
  - Retrieving Library
  - Submitting new images
  - Generating Color Schemes using the <http://colormind.io/api-access/> service
- **DB/Login:** Store users, and each image or animation created. Allows sign in and log in. Passwords encrypted. Can view files but can only store if authenticated.
- **WebSocket:** As a new image or animation is posted by someone, it is broadcasted to the others. If an animation is colaborative, each update from each member is sent to the other members. Simple chatbox for collaborative canvases.

## Visual Sketch for Canvas

![A small preview of the general outline of the pixel art canvas and the tools given to the user.](https://github.com/TheDavSmasher/startup/blob/main/CanvasRoughSketch.png)

## HTML Deliverable

This deliverable uses basic HTML and minor CSS elements for the basic structure of the application.

- **HTML Pages** - Three pages of the application: login/main (index), the main canvas page, and a page to show all other posted files.
- **Navigation** - Either Log in or Sign up buttons send to the canvas page. The Sharing page is accessible from navigation.
- **Login** - The starting page will take information from new users as well as returning users.
- **DB** - The sprites shown in the sharing page are stored in the database, as well as each user's login information.
- **Service** - The Color Scheme Generator is represented in the Canvas page.
- **WebSocket** - The Chatbox and the Canvas itself will show realtime messages and changes.

## CSS Deliverable

- **General** - Added CSS to the headers, footers, and main body, for both all pages and spefific pages.
- **Navigation** - Header includes a navigation element with proper CSS
- **Flex Design** - All elemenents respond to window resizing accordingly.
- **Elements and Text** - All elements and text properly separated and stylized with CSS.
