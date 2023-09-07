let books;
async function renderBooks(filter) {  //becos of the new promise
const bookwrapper = document.querySelector(".books")
bookwrapper.classList += ' books__loading'

if (!books) {
  books = await getBooks();  //becos of the new promise
}

bookwrapper.classList.remove('books__loading')
if (filter === "LOW_TO_HIGH"){
 books.sort((a, b)=> (a.salePrice || a.originalPrice) - (b.salePrice || b.originalPrice))
}else if (filter === "HIGH_TO_LOW"){
  books.sort((a, b)=> (b.salePrice || b.originalPrice) - (a.salePrice || a.originalPrice))
}else if (filter === "Rating"){
  books.sort((a, b)=> b.rating - a.rating)
}

const bookshell = books.map(book => {
  return ` <div class="book">
  <figure class="book_img--wrapper">
      <img class="book__img" src="${book.url}" alt="">
  </figure>
  <div class="book__title">
      ${book.title}
  </div>
  <div class="book__rating">
     ${ratingsBook(book.rating)}
  </div>
  <div class="price">
    ${priceHTML(book.originalPrice, book.salePrice)}
  </div>
  </div>`
}).join("")
// console.log(bookshell)
      // <span>$${book.originalPrice.toFixed(2)}</span> 
bookwrapper.innerHTML = bookshell

}
//(toFixed(2) changes it to 2 decimal places)

function priceHTML(originalPrice, salePrice){
  // console.log(originalPrice, salePrice)
  // <span class="book__price">$59</span> $13
  if (salePrice){
    return `<span class="book__price">${originalPrice.toFixed(2)}</span> $${salePrice.toFixed(2)}`
  }else {
    return `$${originalPrice}`
  }

}
function ratingsBook(rating){
  let ratings = ""
  for (let i = 0; i < Math.floor(rating); i++){
    ratings += `  <i class="fa-sharp fa-solid fa-star"></i>`
  }
  if (!Number.isInteger(rating)){
    ratings += ` <i class="fa-regular fa-star-half-stroke"></i>`
  }
  return ratings
}

function filterBooks(event){
// if (event.target.value === "LOW_TO_HIGH"){
//   console.log("best rating")
//   renderBooks(event.target.value);
// }
renderBooks(event.target.value)

}

setTimeout(() => {
  renderBooks()  
});
// FAKE DATA
function getBooks() {
 return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          title: "The villain's sisiter suffers Today",
           url: "asset/The Villain's Sister Suffers Today.png",
          originalPrice: 49.95,
          salePrice: 14.95,
          rating: 4.5,
        },
        {
          id: 2,
          title: "The Detective of Muiella",
          url: "asset/The Detective of Muiella.jpg",
          originalPrice: 69,
          salePrice: null,
          rating: 3,
        },
        {
          id: 3,
          title: "Solo Leveling",
          url: "asset/solo leveling.jpg",
          originalPrice: 29,
          salePrice: 12,
          rating: 5,
        },
        {
          id: 4,
          title: "Regressor Instruction Manual",
          url: "asset/How To Use a Returner.jpg",
          originalPrice: 44,
          salePrice: 19,
          rating: 4.5,
        },
        {
          id: 5,
          title: "The return of the *th class Mage",
          url: "asset/The Return of the 8th Class Mage.jpg",
          originalPrice: 32,
          salePrice: 17,
          rating: 4,
        },
        {
          id: 6,
          title: "My school Life Pretending To Be a Worthless Person",
          url: "asset/My School Life Pretending To Be a Worthless Person.jpg",
          originalPrice: 70,
          salePrice: 12.5,
          rating: 5,
        },
        {
          id: 7,
          title: "Omnniscient Reader",
          url: "asset/Volume 3 (1).jpg",
          originalPrice: 11,
          salePrice: 10,
          rating: 4,
        },
        {
          id: 8,
          title: "i Obtained a Mysthic item",
          url: "asset/I Obtained a Mythic Item.jpg",
          originalPrice: 38,
          salePrice: 17.95,
          rating: 4.5,
        },
        {
          id: 9,
          title: "I am possed by the sword God",
          url: "asset/I am possessed by the Sword God.jpg",
          originalPrice: 35,
          salePrice: null,
          rating: 4,
        },
        {
          id: 10,
          title: "i Reincarnated As the Crazed Heir",
          url: "asset/I Reincarnated As The Crazed Heir.jpg",
          originalPrice: 40,
          salePrice: null,
          rating: 4,
        },
        {
          id: 11,
          title: "Lies Become you",
          url: "asset/Lies Become You _ official manhwa cover _ @raicemrrty.jpg",
          originalPrice: 30,
          salePrice: null,
          rating: 4.5,
        },
        {
          id: 12,
          title: "I Need Someone to Stop My Older Brothers",
          url: "asset/I Need Someone to Stop My Older Brothers.jpg",
          originalPrice: 38,
          salePrice: null,
          rating: 4.5,
        },
      ])
    }, 1000);

  })
   
  }
  
