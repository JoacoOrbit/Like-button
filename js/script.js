const botonLike = document.querySelectorAll(".like");

for (let i = 0; i < botonLike.length; i++){
    botonLike[i].addEventListener("click", function () {
        let likeNumber = this.closest(".likes-container").querySelector(".like-number");
        console.log(likeNumber);
        let likeCounter = parseInt(likeNumber.textContent);
        console.log(likeCounter)
        likeCounter++;
        console.log(likeCounter)
        likeNumber.textContent = likeCounter;
        console.log(likeNumber)
    });
}