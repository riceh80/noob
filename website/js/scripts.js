document.addEventListener('DOMContentLoaded', () => {
    const yesButton = document.querySelector('.valentine-button-yes');
    const centerContainer = document.querySelector('.center-container');

    yesButton.addEventListener('click', () => {
        centerContainer.style.animation = 'fadeout 2s ease-in-out';
        setTimeout(() => {
            centerContainer.innerHTML = `
                <div class="new-section">
                    <h2>Which one do you like the most</h2>
                    <div class="image-container">
                        <div class="image-item">
                            <img src="https://img4.dhresource.com/webp/m/0x0/f3/albu/jc/m/03/52192df9-03b2-4bfc-b476-c483cfe812df.jpg" alt="Image 1">
                            <input type="checkbox" id="image1" name="image1">
                            <label for="image1">labubu</label>
                        </div>
                        <div class="image-item">
                            <img src="https://www.aitaikuji.com/media/catalog/product/cache/777e28f39a0fa26056b4f7a0d5935fb0/0/0/00094781836_12.jpg" alt="Image 2">
                            <input type="checkbox" id="image2" name="image2">
                            <label for="image2">emmas</label>
                        </div>
                        <div class="image-item">
                            <img src="https://ae01.alicdn.com/kf/S4b0b24cb15c543be912759728d346ed66.jpg" alt="Image 3">
                            <input type="checkbox" id="image3" name="image3">
                            <label for="image3">sembo</label>
                        </div>
                        <div class="image-item">
                            <img src="https://www.sanrio.com/cdn/shop/files/ecomm-CHGAL-50TH_367x353px_01-HK_1000x.png?v=1706834552" alt="Image 4">
                            <input type="checkbox" id="image4" name="image4">
                            <label for="image4">hello kitty</label>
                        </div>
                    </div>
                    <button class="next-button">Next</button>
                </div>`;
            centerContainer.style.animation = 'fade 2s ease-in-out';

            const nextButton = document.querySelector('.next-button');
            nextButton.addEventListener('click', () => {
                centerContainer.style.animation = 'fadeout 2s ease-in-out';
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
                    </div>
                    <button class="next-button">Next</button>
                </div>`;
                centerContainer.style.animation = 'fade 2s ease-in-out';
                }, 2000);
            });
        }, 2000); 
    });
});
