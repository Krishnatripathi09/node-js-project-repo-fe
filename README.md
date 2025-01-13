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
- From components of __DaisyUi__ in components section we have NavBar section from there we can copy the jsx of any component in our __App.jsx__ and then it will displayed on our page.
- For Now we have added the Navbar in our **App.jsx**

# Created a Separate NavBar file
Now next we created a separte __NavBar.jsx__ file and inside that we added the code for our NavBar 
which was there in __App.jsx__

# Installing the React-Router-Dom
We use Routers in our app to route from one component to another component  easily 
(npm i react-router-dom) Using the command we have installed the React-router-dome in our project 
We will create our Routes in our App.js so we have imported Browser Router,Routes and Route in our 
App.js then we have used them to define our routes to different pages
<BrowserRouter basename="/">
<Routes>
  <Route path="/" element={<>Home Page</>}/>
  <Route path="/login" element={<>Login Page</>}/>
  <Route path="/testPage" element={<>Login Page</>}/>

</Routes>
</BrowserRouter>

Now Inside Our Routes we have created some children components like below 
<BrowserRouter basename="/">
<Routes>
  <Route path="/" element={<Body/>}> 
     <Route path="/login" element={<Login/>}/>
     <Route path="/profile" element={<Profile/>}/>
  </Route>

</Routes>
</BrowserRouter>
Now to Render these Children Components we will use  <Outlet/> which will come from react-router-dom to render children components 

# Calling BAck-End from Front-End 
To call our BE from front-End we need to install a library axios using (npm install axios) then we 
can use it connect our frontEnd using useState Hook Before making the API request make sure that you 
have installed and used cors package in App.js (npm i cors) and (app.use(cors()); in app.js of B.E) so that it allows your FE to make request on Backend Even if it is running on different domain or port

After that using useState() hook in frontEnd we set our State-Variables to be updated with user input of Email 
and  Password  
For eg: const [email,setEmailId] = useState("")
const [password,setPassword]= useState("")

then using axios we make an post request to our BE when we are logging In 
for eg: const handleLogin= async()=>{
try {
    const res = await axios.post("http://localhost:3000/signin",{
    email,
    password
});
}catch (err){
    console.error(err)
}
}


# WhiteListing The IP
The cookies that we are setting when some-User Logs-in through postman will not work when we login from our Front-End as we are making rquests from Different port on our IP 
So to make our IP work we have to Whitelist The IP of our FE system in backend like we have allowed cors in our app.js we have to pass some extra values inside the CORS to make it work for our FE system.
app.use(
  cors({
    origin: "http://localhost:3000",//URL Of Our FrontEnd System
    credentials: true,
  })
); 

and also in our FrontEnd we have to set our handleLogin function in Login.jsx to {withCredentials:true}

const handleLogin= async()=>{
try {
    const res = await axios.post("http://localhost:3000/signin",{
    email,
    password
},{withCredentials:true});
}catch (err){
    console.error(err)
}
}
So to get access to our cookies we have to solve all these things in FE and as well as BE.

# Install  Redux/toolkit and react-redux package in our App
npm install @reduxjs/toolkit react-redux
We can separate two libraries by space and then install them together like above 