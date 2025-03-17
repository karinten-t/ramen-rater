// Sample data for ramen details (replace with actual data if needed)
const ramens = [
  {
    name: 'Gyukotsu Ramen',
    restaurant: 'Ramen House',
    image: './gyukotsu.jpg',
    rating: '10',
    comment: 'jameni tamu!',
  },
  {
    name: 'Kojiro Ramen',
    restaurant: 'Noodle World',
    image: './kojiro.jpg',
    rating: '6',
    comment: 'sio mbaya!',
  },
  {
    name: 'Naruto Ramen',
    restaurant: 'Ichiraku Ramen',
    image: './naruto.jpg',
    rating: '9',
    comment: 'tamu sana!',
  },
  {
    name: 'Nirvana Ramen',
    restaurant: 'Zen Noodles',
    image: './nirvana.jpg',
    rating: '7',
    comment: ' maajabu kumbe tamu.',
  },
  {
    name: 'Shoyu Ramen',
    restaurant: 'Tokyo Ramen',
    image: './shoyu.jpg',
    rating: '8',
    comment: 'not really my thing!',
  },
];

// Function to display ramen details when an image is clicked
function handleClick(ramen) {
  const detailImage = document.querySelector('#place .holder');
  const detailName = document.querySelector('#place .name');
  const detailRestaurant = document.querySelector('#place .restaurant');
  const ratingDisplay = document.querySelector('#rating-display');
  const commentDisplay = document.querySelector('#comment-display');

  detailImage.src = ramen.image;
  detailImage.alt = ramen.name;
  detailName.textContent = ramen.name;
  detailRestaurant.textContent = ramen.restaurant;
  ratingDisplay.textContent = ramen.rating;
  commentDisplay.textContent = ramen.comment;
}

// Function to add click event listeners to ramen images
function addClickListeners() {
  const ramenImages = document.querySelectorAll('#ramen img');
  ramenImages.forEach((img, index) => {
    img.addEventListener('click', () => handleClick(ramens[index]));
  });
}

// Function to handle form submission for adding new ramen
function addSubmitListener() {
  const form = document.querySelector('#new-ramen');
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const newRamen = {
      name: e.target.name.value,
      restaurant: e.target.restaurant.value,
      image: e.target.image.value,
      rating: e.target.rating.value,
      comment: e.target['new-comment'].value,
    };

    // Add the new ramen to the ramens array
    ramens.push(newRamen);

    // Create a new image element and add it to the ramen menu
    const ramenMenu = document.querySelector('#ramen');
    const img = document.createElement('img');
    img.src = newRamen.image;
    img.alt = newRamen.name;
    ramenMenu.appendChild(img);

    // Add click event listener to the new image
    img.addEventListener('click', () => handleClick(newRamen));

    // Reset the form
    form.reset();
  });
}

// Initialize the app
function main() {
  addClickListeners();
  addSubmitListener();
}

// Run the app after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', main);