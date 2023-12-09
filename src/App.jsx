import './App.css';
// import lake from "./image/lake.JPG";
import GallaryFooter from './components/GallaryFooter';
import GallaryHeader from './components/GallaryHeader';
import GallaryBody from './components/GallaryBody';
// import imageData from './components/lakeIamage';
import lake from "./image/lake.JPG";
const imageData = [
    {
      id:1,
      img:lake 
    },
    {
      id:2,
      img:lake
    },
    {
      id:3,
      img:lake
    },
    {
      id:4,
      img:lake
    }
  ]


function App() {
  return (
    <div>
      <GallaryHeader/>
      <div>
      <GallaryBody imageData={imageData}/>
      </div>
      {/* adding footer component */}
      <GallaryFooter/> 
    </div>
  )
}

export default App;
