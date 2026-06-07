import './style.css'

const townName = "Mannheim"

document.querySelector('#app').innerHTML =
    /** @lang html */
    `
    <div class="mainContainer">
        <div class="descriptionContainer">
            <div class="townNameContainer"><h1 class="townName">Visit ${townName}</h1></div>
            <div class="townNameDescription"><p class="townDescription">Come to the Town were the Car, the predecessor of the bicle and Mannheimer Dreck was invented</p></div>
            <span id="thanking" style="align-self: start;">Like the picture? Show some <a target="_blank" href="https://www.pexels.com/@marc-schneid-1420615928/">❤️</a></span>
        </div>
        <div class="highlightsContainer">
            <h2 id="activitiesHeader">Top three activities to do at ${townName}</h2>
            <div class="activitiesContainer">
                <div class="activities">
                    <a target="_blank" href="https://www.pexels.com/photo/lively-urban-street-scene-in-mannheim-germany-33316707/"><img src="https://images.pexels.com/photos/33316707/pexels-photo-33316707.jpeg" alt="City life of ${townName}" class="activityPicture"></a>
                    <h3>Visit the city center also called Quadrate (Squares)</h3>
                    <p>The city center has many things to experience. You can go to the city Landmark "Wasserturm" or visit the local restaurants. Mannheim has a great food culture.</p>
                </div>  
                <div class="activities">
                    <a target="_blank" href="https://www.pexels.com/photo/luisenpark-with-the-view-of-fernmeldeturm-mannheim-mannheim-germany-18792354/"><img src="https://images.pexels.com/photos/18792354/pexels-photo-18792354.jpeg" alt="Luisenpark in ${townName}" class="activityPicture"></a>
                    <h3>Discover the town owned parks</h3>
                    <p>Mannheim has many Parks like Luisen park and Herzogenried Park with beautiful gardens which issued in the Bundesgartenschau (Federal Horticultural Show)</p>
                </div> 
                <div class="activities">
                    <a target="_blank" href="https://www.pexels.com/photo/historical-building-of-city-university-5213162/"><img src="https://images.pexels.com/photos/5213162/pexels-photo-5213162.jpeg" alt="Baroque Palace of ${townName}" class="activityPicture"></a>
                    <h3>Show up at the baroque palace and feel like a Count Palatine and Elector</h3>
                    <p>The baroque palace is one of the highlights in Mannheim. See how nobles lived in the 17 and 18th century lived.</p>
                </div> 
            </div>
            <div class="tourGuideContainer">
                <div class="tourGuideCard">
                    <img src="src/assets/profilePicture.JPG" alt="Tour-guide smiling at the camera" class="tourguidePicture">
                    <div class="tourGuideCardContent">
                        <h2>Your Guide</h2>
                        <p>"I have lived at Mannheim for 25 years, so i can show you all of its best parts and hidden secrets."</p>
                        <h3>Marcin Lubaczewski</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
`
