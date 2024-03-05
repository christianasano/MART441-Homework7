class SocialJusticeImage {
    constructor(title, imageUrl, description, author, year) {
      this.title = title;
      this.imageUrl = imageUrl;
      this.description = description;
      this.author = author;
      this.year = year;
    }
}

const images = [
  new SocialJusticeImage(
    "EVERYONES Social Justice Matters",
    "images/world.jpeg",
    "People gathering to support each other and make sure they stick together as one. Rather than dividing, we must share the world..",
    "John Doe",
    "2020"
  ),
  new SocialJusticeImage(
    "Climate Change",
    "images/oil.jpeg",
    "People throwing crap at paintings to show the importance of climate change.",
    "Bill Jeff",
    "2021"
  ),
  new SocialJusticeImage(
    "March to protest black lives",
    "images/march.jpeg",
    "Women and Men marching to protest that color lives matter!.",
    "Jane Doe",
    "2012"
  ),
  new SocialJusticeImage(
    "Justice is what the world needs!",
    "images/justice.jpeg",
    "A sign for people to understand what really causes bad blood, and treat everyone with respect.",
    "George Washington",
    "2010"
  ),
  new SocialJusticeImage(
    "Equality",
    "images/equal.jpeg",
    "People demanding respect and to be treated the same as all people...",
    "Maria lenor",
    "2016"
  )
];

document.addEventListener('DOMContentLoaded', () => {
  const imageContainer = document.getElementById('image-container');
  const titleElement = document.getElementById('title');
  const imageElement = document.getElementById('image');
  const descriptionElement = document.getElementById('description');
  const authorElement = document.getElementById('author');
  const yearElement = document.getElementById('year');
  const nextButton = document.getElementById('next-button');

  nextButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex];

    titleElement.textContent = randomImage.title;
    imageElement.src = randomImage.imageUrl;
    descriptionElement.textContent = randomImage.description;
    authorElement.textContent = `Author: ${randomImage.author}`;
    yearElement.textContent = `Year: ${randomImage.year}`;
  });
});

document.addEventListener('DOMContentLoaded', () => {
    // Existing code...
    
    const homeButton = document.getElementById('home-button');
    homeButton.addEventListener('click', () => {
      window.location.href = 'index.html'; // Change 'index.html' to your home page URL
    });
  });