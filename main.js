let links = document.querySelector('.nav__right').innerHTML; 
let sideNav = document.querySelector('.sideNav');
let darkOverlay = document.querySelector('.darkOverlay');
let body = document.querySelector('body');
let html = document;

sideNav.innerHTML += links;

document.querySelector('.sideNav__btn').addEventListener("click", () => {
    sideNav.classList.remove('showSideNav');
    darkOverlay.style.display = 'none';
    toggleScroll('on');
})

window.addEventListener("resize", function() {
    if(self.innerWidth < 736){
        this.document.querySelector('.nav__right').innerHTML = "<button class='btnCircle nav__btn btnCircle--open'></button>";
        this.document.querySelector('.nav__btn').addEventListener('click', () => {
            sideNav.classList.add('showSideNav');
            darkOverlay.style.display = 'block';
            toggleScroll('off');
        })
    }else{sideNav.classList.remove('showSideNav');
        darkOverlay.style.display = 'none';
        this.document.querySelector('.nav__right').innerHTML = links;
    }

})

toggleScroll = (turn) => {
    if(turn === 'on'){
        body.style.overflow = 'auto';
        body.style.position = 'fixed';
    }else{
        body.style.overflow = 'hidden';
        body.style.position = 'static';
    }
}