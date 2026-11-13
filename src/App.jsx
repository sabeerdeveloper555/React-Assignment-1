import './App.css'
import naturalWonder from './assets/image.jpg'
import nationalPark from './assets/image2.avif'

function App() {

  return (
    <>
      <h1>Exploring Natural Wonders</h1>
      <p>Discover the awe-inspiring beauty of natural landscapes across the globe, from the <b>Victoria Falls</b> in Zimbabwe to the captivating <b>Aurora Borealis</b> visible in various countries.</p>

      <h2>Natural Wonders</h2>
      <ul>
        <li>Victoria Falls, Zimbabwe</li>
        <li>Aurora Borealis, Various Countries</li>
        <li>Grand Canyon, USA</li>
        <li>Great Barrier Reef, Australia</li>
        <li>Mount Everest, Nepal</li>
      </ul>

      <p><q>Nature always wears the colors of the spirit.</q> - <i>Ralph Waldo Emerson</i></p>

      <h2>Benefits of Experiencing Natural Beauty</h2>
      <ul>
        <li>Fostering a sense of wonder</li>
        <li>Deepening appreciation of the planet</li>
        <li>Creating lasting memories</li>
      </ul>

      <h2>Discover More</h2>
      <img src={naturalWonder} alt="Natural Wonder" />
      <p>The Majestic Victoria Falls</p>

      <a href="https://www.nationalgeographic.com/travel/article/10-natural-wonders-of-the-world" target="_blank" rel="noopener noreferrer">Explore more natural wonders</a>

      <h2>Beautiful places in Zimbabwe</h2>
      <img src={nationalPark} alt="National Park" />
      <p>Hwange National Park, Zimbabwe</p>
    </>
  )
}

export default App
