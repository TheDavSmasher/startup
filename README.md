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

## React Deliverable

- **General** - Changed all the application's structure to use React JSX for most functionality.
- **Pixel Canvas** - Canvas is fully interactible with color selection, placement, clearing, undo, and redo tools.
- **Login** - Mocked Login functionality with local storage.
- **Vite** - Packaged and deployed with Vite.
- **Routing** - Used Routing to display the multiple pages of the application.

## Service Deliverable

- **General** - Added index.js for various application endpoints utilizing Node and Express.
- **Express** - Frontend managed with static Express middleware.
- **Login** - Utilizes Express and endpoints to better store the users that have registered or logged in.
- **Color Palette Service** - Utilized the <https://www.thecolorapi.com/docs> service to generate a color palette based on the current color, which when clicked will set the active color to the one clicked.

## Login Deliverable

- **Database integration** - User data is stored in and retrived from a persistent database with MongoDB Atlas.
- **Data Hashing** - User passwords are stored encrypted for security.
- **Persistent Registration** - Users who registrate can now use the login side of the page to return.
- **Logout** - Users can log out normally and return at any time.
- **Authentication** - Non-registered users are blocked from entering the other pages of the application.

## WebSocket Deliverable

- **WebSocket Integration** - Server will listen to WebSocket requests and proxy messages. Users can connect through the client.
- **Chat Messages** - Users can send text messages through the client. Other connected clients will receive the messages sent.
