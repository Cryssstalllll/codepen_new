//   const items = document.querySelectorAll('.carousel-item');
//   const nextButton = document.querySelector('.next');
//   const prevButton = document.querySelector('.prev');
//   let currentIndex = 0;

//   function showItem(index) {
//     items.forEach((item, i) => {
//       item.style.transform = `translateX(${(i - index) * 100}%)`;
//     });
//   }

//   function nextItem() {
//     currentIndex = (currentIndex + 1) % items.length;
//     showItem(currentIndex);
//   }

//   function prevItem() {
//     currentIndex = (currentIndex - 1 + items.length) % items.length;
//     showItem(currentIndex);
//   }

//   nextButton.addEventListener('click', nextItem);
//   prevButton.addEventListener('click', prevItem);

//   // 自動播放
//   setInterval(nextItem, 5000);

//   // 初始化顯示
//   showItem(currentIndex);


const carousel = document.querySelector('.carousel');
const cards = document.querySelectorAll('.carousel-card');
  const prevButton = document.querySelector('.carousel-btn.prev');
  const nextButton = document.querySelector('.carousel-btn.next');

  let currentIndex = 0;

  function updateCarousel() {
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
  }
  
  function nextSlide() {
      currentIndex = (currentIndex + 1) % cards.length;
      updateCarousel();
    }
    
    function prevSlide() {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        updateCarousel();
    }
    
    
    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);
  // 自動播放
//   setInterval(nextSlide, 2000);
//     console.log(setInterval);
  
  setInterval(() => {
    console.log("自動輪播觸發");
    nextSlide();
  }, 2000);
  
  
