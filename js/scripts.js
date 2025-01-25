document.addEventListener('DOMContentLoaded', () => {
    const yesButton = document.querySelector('.valentine-button-yes');
    const noButton = document.querySelector('.valentine-button-no');
    const centerContainer = document.querySelector('.center-container');

    const handleYesButtonClick = () => {
        centerContainer.style.animation = 'fadeout 800ms ease-in-out';
        setTimeout(() => {
            centerContainer.innerHTML = `
                <div class="section centered-message">
                    <h2 class="smaller-font"> Annyeong! Happy Valentine day! Thxs for being my valentine you cutie (Vivian Yang)! Really appearaciate it! (even though there isn't a choice hehe). 
                    Sorry you might think I'm kinda annoying with the spam when the truth is I'm just a really clingy person
                    when it comes to being with someone like you. Sorry I'm not there to physically be there for you during valentine however I can make it up as I've given you a gift... the labubu
                    and a very nice date when I'm back hehe (ofc im paying so u dont have to since it is a date). I promise that I will make it all up for you and have fun with the website! Make sure if you need anything I am here for you even though we are 404 miles away, I will always support you! 
                    Miss you cupcake <3</h2>
                    <button class="next-button">Next</button>
                </div>`;
            centerContainer.style.animation = 'fade 800ms ease-in-out';

            const nextButton = document.querySelector('.next-button');
            nextButton.addEventListener('click', handleNextButtonClick);
        }, 800);
    };



    const handleNextButtonClick = () => {
        centerContainer.style.animation = 'fadeout 800ms ease-in-out';
        setTimeout(() => {
            centerContainer.innerHTML = `
                <div class="new-page">
                    <h2>Where would you like to go on a date?</h2>
                    <div class="location-container">
                        <div class="location-item">
                            <input type="radio" id="location1" name="location" value="shooting range">
                            <label for="location1">Shooting Range</label>
                        </div>
                        <div class="location-item">
                            <input type="radio" id="location2" name="location" value="park">
                            <label for="location2">Park</label>
                        </div>
                        <div class="location-item">
                            <input type="radio" id="location3" name="location" value="cafe">
                            <label for="location3">Cafe</label>
                        </div>
                        <div class="location-item">
                            <input type="radio" id="location4" name="location" value="axe throwing">
                            <label for="location4">Axe Throwing</label>
                        </div>
                        <div class="location-item">
                            <input type="radio" id="location5" name="location" value="other">
                            <label for="location5">Other:</label>
                            <input type="text" id="other-location" name="other-location" placeholder="Enter location">
                        </div>
                    </div>
                    <button class="next-button">Next</button>
                </div>`;
            centerContainer.style.animation = 'fade 800ms ease-in-out';

            const nextButton = document.querySelector('.next-button');
            nextButton.addEventListener('click', handleNextButtonClick3);
        }, 800);
    };

    const handleNextButtonClick3 = () => {
        centerContainer.style.animation = 'fadeout 800ms ease-in-out';
        setTimeout(() => {
            centerContainer.innerHTML = `
                <div class="next-page">
                    <h2>Since I'm not home... what day should our date be?</h2>
                    <div class="date-container">
                        <label for="date">Choose a date:</label>
                        <input type="date" id="date" name="date">
                    </div>
                    <div class="time-container">
                        <label for="time">Choose a time:</label>
                        <input type="time" id="time" name="time">
                    </div>
                    <button class="next-button">Submit</button>
                </div>`;
            centerContainer.style.animation = 'fade 800ms ease-in-out';

            const nextButton = document.querySelector('.next-button');
            nextButton.addEventListener('click', handleNextButtonClick4);
        }, 800);
    };

    const handleNextButtonClick4 = () => {
        centerContainer.style.animation = 'fadeout 800ms ease-in-out';
        setTimeout(() => {
            centerContainer.innerHTML = `
                <div class="final-page">
                    <h2>Thank you for being my valetine 😘! Please give me a 5 star review in yelp and tell me your experience hehe.</h2>
                </div>`;
            centerContainer.style.animation = 'fade 800ms ease-in-out';
        }, 800);
    };

    yesButton.addEventListener('click', handleYesButtonClick);

    noButton.addEventListener('click', () => {
        noButton.textContent = 'Yes';
        noButton.classList.remove('valentine-button-no');
        noButton.classList.add('valentine-button-yes');
        noButton.addEventListener('click', handleYesButtonClick);
    });
});


