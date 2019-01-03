class Fading {
    constructor(selectorClassName, switchInterval) {
        this.images = Array.from(document.getElementsByClassName(selectorClassName));
        this.enableAnimation(1000);
        this.currentIndex = 0;
        this.setVisible(this.currentIndex);
        setInterval(this.switchImage.bind(this), switchInterval);
    }

    switchImage() {
        this.images[this.currentIndex].style.opacity = "0";
        this.images[this.currentIndex = (this.currentIndex + 1) % this.images.length].style.opacity = "1";
    }

    setVisible(index) {
        this.images.forEach(image => {
            image.style.opacity = '0';
        });
        this.images[index].style.opacity = "1";
    }

    enableAnimation(animationTime) {
        this.images.forEach(image => {
            image.style.transition = `opacity ${animationTime}ms`
        });
    }
}

new Fading('a', 4000);