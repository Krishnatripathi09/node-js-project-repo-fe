# Dev-Tinder 
Created a Vite React Project using Command 
npm create vite@latest my-react-app -- --template react
(souce for command Link --> https://vite.dev/guide/)
In place of my-react-app use your project name

# For Styling We are Using TailWind
So we need to install Tailwind in our project so as we are using vite bundler in our React app we
go to the (https://tailwindcss.com/docs/installation) page and then to the frame-works guide so as we are using vite we select vite and then react and then run the command (npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p ) to install it in our project 
 
# Configure the tailwind.config.js file
After installing the tailWind we configure the tailwind.config.js by  from the installation page
(https://tailwindcss.com/docs/guides/vite) by copying the command from there which will then 
configure the tailwind in our files 

# Configure the index.css File 
By copying the below command in Index.css file we configure it to use as default css

@tailwind base;
@tailwind components;
@tailwind utilities;

# Configuring the Daisy UI 
We are gonna use component design library DaisyUI. It gives us already built Components that we can use in our app instead of building it from scratch.
We can install it in our project with command (https://daisyui.com/docs/install/) 
- Official Documentation Link (https://daisyui.com/docs/install/)
- After installing add the configuration for Daisy UI in tailwind.config.js file
- module.exports = {
  //...
  plugins: [
    require('daisyui'),
  ],
}

In tailwind.config.js file inside plugins we have to just write daisyui and it is ready to use.
- Now we can use the components from Daisy UI in our project.
- From components of __DaisyUi__ in components section we have NavBar section from there we can copy the jsx of any component of in our __App.jsx__ and then it will displayed on our page