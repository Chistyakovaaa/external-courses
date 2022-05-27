// book

const books = [
  {
    id: 1,
    src: 'assets/img/book-cover_1.png',
    title: 'Jewels of Nizam',
    author: 'Geeta Devi',
    stars: 5,
  },

  {
    id: 2,
    src: 'assets/img/book-cover_2.png',
    title: 'Cakes & Bakes',
    author: 'Sanjeev Kapoor',
    stars: 5,
  },

  {
    id: 3,
    src: 'assets/img/book-cover_3.png',
    title: "Jemie's Kitchen",
    author: 'Jamie Oliver',
    stars: 4,
  },

  {
    id: 4,
    src: 'assets/img/book-cover_4.png',
    title: 'Inexpensive Family Meals',
    author: 'Simon Holst',
    stars: 4,
  },

  {
    id: 5,
    src: 'assets/img/book-cover_5.png',
    title: 'Paleo Slow Cooking',
    author: 'Chrissy Gower',
    stars: 3,
  },

  {
    id: 6,
    src: 'assets/img/book-cover_6.png',
    title: 'Cook Like an Italian',
    author: 'Tobie Puttock',
    stars: 4,
  },

  {
    id: 7,
    src: 'assets/img/book-cover_7.png',
    title: 'Suneeta Vaswani',
    author: 'Geeta Devi',
    stars: 5,
  },

  {
    id: 8,
    src: 'assets/img/book-cover_8.png',
    title: 'Jamie Does',
    author: 'Jamie Oliver',
    stars: 4,
  },

  {
    id: 9,
    src: 'assets/img/book-cover_9.png',
    title: "Jamie's Italy",
    author: 'Jamie Oliver',
    stars: 5,
  },

  {
    id: 10,
    src: 'assets/img/book-cover_10.png',
    title: 'Vegetables Cookbook',
    author: 'Matthew Biggs',
    stars: 3,
  },
];

// cards

const generatorStars = (value, id) => {
  const item = document.getElementById(id);
  const ratingContainer = item.querySelector('.rating');

  for (let i = 1; i <= value; i += 1) {
    ratingContainer.querySelector(`.star_${i}`).classList.add('active');
  }
};

const generator = (id, src, title, author, stars) => {
  const booksWrapper = document.querySelector('.books_wrapper');
  const book = document.createElement('div');

  book.innerHTML = `
          <img src="${src}" alt="image">
          <p class="title">${title}</p>
          <p class="author">${author}</p>
          <div class="rating">
          <span class="star_1"></span>
          <span class="star_2"></span>
          <span class="star_3"></span>
          <span class="star_4"></span>
          <span class="star_5"></span>
          </div>
        `;

  book.className = 'book_item';
  book.setAttribute('id', `${id}`);
  booksWrapper.appendChild(book);
  generatorStars(stars, id);
};

const items = (content) => {
  content.map((item) => generator(item.id, item.src, item.title, item.author, item.stars));
};

items(books);

// modal window

const addBookButton = document.getElementById('butt_open_win');

const closeWin = () => {
  document.querySelector('.modal_win').remove();
};

const modalWindow = () => {
  const div = document.createElement('div');
  div.className = 'modal_win';
  div.innerHTML = `
        <div class="modal_win_container">
        <div class="modal_win_body" >
        <h4>Add book</h4>
        <form action="#">
        <input type="text" placeholder="Title" class="form_add_book">
        <input type="text" placeholder="Author" class="form_add_book">
        <div class="add_cover_container">
        <label class="label_img">Add cover<input name="cover" type="file" class="input_img"></label>
        </div>
        <button class="create_new_book">ADD BOOK</button>
        </form>
        <div id="win_close">&times</div>
      </div>
      </div>
    `;
  document.querySelector('body').append(div);
  document.querySelector('.create_new_book').addEventListener('click', closeWin);
  document.getElementById('win_close').addEventListener('click', closeWin);
};

addBookButton.addEventListener('click', modalWindow);

// rating

const changeRating = (e) => {
  const target = e.target;
  const starValue = target.className.split('')[4];
  const allStars = target.parentNode;
  if (allStars.className === 'rating') {
    allStars.innerHTML = `
    <span class="star_1"></span>
    <span class="star_2"></span>
    <span class="star_3"></span>
    <span class="star_4"></span>
    <span class="star_5"></span>
    `;
    const id = allStars.parentNode.id;
    generatorStars(starValue, id);
  }
};

document.querySelector('.books_wrapper').addEventListener('click', changeRating);

// most popular

const button = document.getElementById('most_popular');

const generatePopular = () => {
  const result = [];
  console.log(result);

  for (let i = 0; i < books.length; i += 1) {
    if (books[i].stars >= 5) {
      result.push(books[i]);
    }
  }

  document.querySelector('.books_wrapper').innerHTML = '';
  items(result);
};

const refreshButton = (e) => {
  const target = e.target;
  const allBooks = document.getElementById('all_books');

  if (!target.classList.contains('filter_onclick')) {
    allBooks.classList.remove('filter_onclick');
    target.classList.add('filter_onclick');
    generatePopular();
  } else {
    target.classList.remove('filter_onclick');
    allBooks.classList.add('filter_onclick');
    document.querySelector('.books_wrapper').innerHTML = '';
    items(books);
  }
};

button.addEventListener('click', refreshButton);

// search

const input = document.querySelector('.search_books');

const userInput = () => {
  const userData = input.value;
  const regexp = new RegExp(`${userData}`, 'i');
  const data = [];

  for (let i = 0; i < books.length; i += 1) {
    if (regexp.test(`${books[i].title}`)) {
      data.push(books[i]);
    }
  }

  document.querySelector('.books_wrapper').innerHTML = '';
  items(data);
};

input.addEventListener('input', userInput);
