const stars = document.querySelectorAll('.star');
const ratingInput = document.querySelector('#rating');
    function setStars(ratingValue) {
    const stars = document.querySelectorAll('.star');
    console.log(stars);
    stars.forEach(star => {
     if (parseInt(star.dataset.value) <= ratingValue) {
       star.classList.add('active');
       } else {
       star.classList.remove('active');
       }

    });
    ratingInput.value = ratingValue;
    }
    stars.forEach(star => {
    star.addEventListener('click', function () {
    const ratingValue = parseInt(this.dataset.value);
    setStars(ratingValue);
    });
    });
