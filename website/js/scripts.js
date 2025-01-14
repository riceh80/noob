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
                            <img src="https://www.kikagoods.com/cdn/shop/files/DS220100-3896-00-main-img-02.jpg?v=1723037752&width=770" alt="Image 2">
                            <input type="checkbox" id="image2" name="image2">
                            <label for="image2">lucky emma</label>
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
                alert('Next button clicked!');
                // Add your logic for the next button here
            });
        }, 2000); 
    });
});
