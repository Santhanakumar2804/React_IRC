import Home from "./components/HomePage";
import Nav from "./components/Nav";
import img1 from "./Assets/img/bg1.jpg";
import "./App.css";
function App() {
  return (
    <div>
      <Home/>
      <Nav/>
  {/* <img src={img1} className="img1"></img> */}
      
      <nav/>
      <div className="background">

      <base href="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/"></base>
<div class="flip-3d">
  <figure>
    <img src="yacht.jpg" alt></img>
 <figcaption>yacht</figcaption>
</figure>
</div>
<div class="flip-3d">
  <figure>
    <img src="bee.jpg" alt></img>
   <figcaption>Bee</figcaption>
  </figure>
  </div>
<div class="flip-3d">
  <figure>
    <img src="https://unsplash.com/photos/red-and-orange-soccer-ball-on-green-grass-field-F3M8FmvWQo4"alt></img>
 <figcaption>Queenstown</figcaption>
  </figure>
</div>
    </div>
      </div>
  );
}
export default App;
