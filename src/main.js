import './style.css'

const townName = "Townname"

document.querySelector('#app').innerHTML =
    /** @lang html */
    `
    <div class="mainContainer">
        <div class="descriptionContainer">
            <div class="townNameContainer"><h1 class="townName">Visit ${townName}</h1></div>
            <div class="townNameDescription"><p class="townDescription">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam</p></div>
        </div>
        <div class="highlightsContainer">
            <h2 id="activitiesHeader">Top three activities to do at ${townName}</h2>
            <div class="activitiesContainer">
                <div class="activities">
                    <img src="src/assets/skyline.png" alt="Beatiful skyline of ${townName}" class="activityPicture">
                    <h3>Lorem ipsum dolor sit amet</h3>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt</p>
                </div>  
                <div class="activities">
                    <img src="src/assets/foodCulture.png" alt="Food culture of ${townName}" class="activityPicture">
                    <h3>Lorem ipsum dolor sit amet</h3>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt</p>
                </div> 
                <div class="activities">
                    <img src="src/assets/cityTour.png" alt="city tours of ${townName}" class="activityPicture">
                    <h3>Lorem ipsum dolor sit amet</h3>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt</p>
                </div> 
            </div>
            <div class="tourGuideContainer">
                <div class="tourGuideCard">
                    <img src="src/assets/TourGuide.png" alt="Tour-guide smiling at the camera" class="tourguidePicture">
                    <div class="tourGuideCardContent">
                        <h2>Your Guide</h2>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam</p>
                        <h3>Mrs. Erika Musterfrau</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
`
