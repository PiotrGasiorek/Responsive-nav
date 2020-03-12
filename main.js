let links = document.querySelector('.nav__right').innerHTML; 
let sideNav = document.querySelector('.sideNav');
let darkOverlay = document.querySelector('.darkOverlay');
let body = document.querySelector('body');

sideNav.innerHTML += links;

function toggleScroll(turn) {
    if(turn === 'on'){
        body.style.overflow = 'auto';
    }else{
        body.style.overflow = 'hidden';
    }
}

function checkIfSmallDevice() {
    if(self.innerWidth < 736){
        this.document.querySelector('.nav__right').innerHTML = "<button class='btnCircle nav__btn btnCircle--open'></button>";
        this.document.querySelector('.nav__btn').addEventListener('click', () => {
            sideNav.classList.add('showSideNav');
            darkOverlay.style.display = 'block';
            toggleScroll('off');
        })
        document.querySelector('.sideNav__btn').addEventListener("click", () => {
            sideNav.classList.remove('showSideNav');
            darkOverlay.style.display = 'none';
            body.style.overflow = 'auto';
        })
    }else{
        sideNav.classList.remove('showSideNav');
        darkOverlay.style.display = 'none';
        document.querySelector('.nav__right').innerHTML = links;
        toggleScroll('on');
    }
}

checkIfSmallDevice();

window.addEventListener("resize", function() {
    checkIfSmallDevice();
})
