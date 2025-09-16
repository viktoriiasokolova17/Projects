/* Blog, maxLength 200 ********************************************************** */

document.addEventListener("DOMContentLoaded", function() {
    const maxLength = 200;
    const summaries = document.querySelectorAll(".article-summary");
    const readMoreLinks = document.querySelectorAll(".read-more, .show-more");
  
    summaries.forEach(function(summary, index) {
        const fullText = summary.textContent;
        if (fullText.length > maxLength) {
            summary.textContent = fullText.slice(0, maxLength) + '...';
            readMoreLinks[index].style.display = 'inline'; 
        } else {
            readMoreLinks[index].style.display = 'none'; 
        }
  
        readMoreLinks[index].addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = this.getAttribute('href'); 
        });
    });
  });