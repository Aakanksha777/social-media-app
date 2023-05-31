import Posts from "./components/Posts/Posts";
import Feed from "./components/feed/Feed";
import Login from "./components/login/Login";
import Register from "./components/register/Register";

//images
import Post1 from "./components/Assets/post1.avif"
import Post2 from "./components/Assets/post2.avif"
import Post3 from "./components/Assets/post3.avif"
import Post4 from "./components/Assets/post4.avif"
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Login/>
     <Register/>
     <Posts/>
     <Feed name="Aakanksha Malothia" time="now" postImg={Post1} desc="What you need to remember is Breathe..."/>
     <Feed name="Annu" time="12 mins ago" postImg={Post2} desc="You can't dull my sparkle ✨"/>
     <Feed name="Surya saini" time="1 day ago" postImg={Post3} desc="Life is the biggest party you'll ever be at."/>
     <Feed name="Himanshu" time="2 mins ago" postImg={Post4} desc="No need of Caption"/>
    </div>
  );
}

export default App;
