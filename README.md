# ink
## Introduction
- Ink is a simple web app meant to test out working with 3D models with Three.js, Fiber, and Drei and experiment with the OpenAI API. This app allows you to test out different designs and logos on a 3D model of a T-shirt. This app supports both custom logo and texture uploads, a color picker, and even AI image generation with DALLE-2.



## Tech Stack
- React.js
- Three.js
- React Three Fiber
- React Three Drei
- Vite
- Tailwind CSS
- Node.js
- Express.js
- OpenAI
- Framer Motion
- Valtio

## Features
- 3D Generation: Generate unique 3D shirts dynamically

- Color Customization: Able to apply any color to the 3D shirt.

- Logo Upload Functionality: Enables users to upload any file as a logo, integrating it seamlessly onto the 3D shirt.

- Texture Image Upload: Allows users to upload texture images to style the 3D shirt.

- AI-Generated Logo Integration: Utilizes OpenAI's DALLE-2 to generate logos and intelligently apply them to the 3D shirt.

- AI-Generated Textures: Implement AI-generated textures for enhanced customization.

- Theme Change with Color Selection: Dynamically change the application theme based on the selected color.

- Responsive 3D Application: The application is responsive, delivering a seamless experience across various devices.

- Framer Motion Animation: Implemented framer motion animations for smooth transitions.

## Quick Start

**Follow these steps to set up the project locally on your machine:**

- Prerequisites

  - Make sure you have the following installed on your machine:

`Git`
`Node.js`
`npm (Node Package Manager)`
`Cloning the Repository`

`git clone https://github.com/adrianhajdin/project_threejs_ai.git`
`cd project_threejs_ai`

## Installation

**Install the project dependencies using npm in both client and server folders:**

`npm install`
Set Up Environment Variables

Create a new file named .env in the root of your project and add the following content:

`OPENAI_API_KEY=**************`
Replace the placeholder values with your actual OpenAI credentials. You can obtain these credentials by signing up on the Open website.

## Running the Project

Server:
`npm start`
Client:
`npm run dev`

**Open http://localhost:5173 in your browser to view the project.**
