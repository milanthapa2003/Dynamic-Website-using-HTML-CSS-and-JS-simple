function search() {
    var searchTerm = document.getElementById('searchInput').value;
    // Perform search functionality here
    alert("Searching for: " + searchTerm);
}

// Smooth scrolling to sections on click
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});





// js program for scrollable upward arrow


window.onscroll = function() {scrollFunction()};
  
function scrollFunction() {
  var arrowUpButton = document.querySelector('.arrow-up');
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    arrowUpButton.classList.add('show');
  } else {
    arrowUpButton.classList.remove('show');
  }
}

function scrollToTop() {
  var currentPosition = document.documentElement.scrollTop || document.body.scrollTop;
  if (currentPosition > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, currentPosition - currentPosition / 8);
  }
}