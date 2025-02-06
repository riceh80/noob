document.addEventListener('DOMContentLoaded', () => {
    const yesButton = document.querySelector('.valentine-button-yes');
    const noButton = document.querySelector('.valentine-button-no');
    const centerContainer = document.querySelector('.center-container');

    const handleYesButtonClick = () => {
        centerContainer.style.animation = 'fadeout 800ms ease-in-out';
        setTimeout(() => {
            centerContainer.innerHTML = `
                <div class="section centered-message">
                    <h2 class="smaller-font"> Annyeong! Happy Valentine day! Thxs for being my valentine you cutie! Really appearaciate it! (even though there isn't a choice hehe). </h2>
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
                <div class="section centered-message">
                    <h2 class="smaller-font"> Sorry you might think I'm kinda annoying with the spam when the truth is I'm just a really clingy person
                    when it comes to being with someone like you. I really miss you, you know. Even 1 day feels like a year so knowing that, everytime you text me makes me feel happy hehe.
                    It helps me with my stress and knowing that you are safe and happy makes me extremely happy. </h2>
                    <button class="next-button">Next</button>
                </div>`;
            centerContainer.style.animation = 'fade 800ms ease-in-out';

            const nextButton = document.querySelector('.next-button');
            nextButton.addEventListener('click', handleNextButtonClick2);
        }, 800);
    };

    const handleNextButtonClick2 = () => {
        centerContainer.style.animation = 'fadeout 800ms ease-in-out';
        setTimeout(() => {
            centerContainer.innerHTML = `<div class="section centered-message">
                    <h2 class="smaller-font"> Even though I won't be here for Valentine Day... I promise that I will make it up by setting us up on nice places for my entire spring break when I come back and when you are free.
                    Can't wait to see your smile and your cute face again just really makes me happy just being beside you. My favorite and first Valentine gift that be given hehe. I hope I see you sooner, but I do go to buffalo so might take a while.
                    Who knows maybe we can do something in call too if you like hehe. Miss you cupcake and have a Happy Valentine Day. <3 </h2>
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


