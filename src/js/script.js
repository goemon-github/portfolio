"use strict";
const followerEl = document.getElementById('follower');
function follower(target) {
    document.addEventListener('mousemove', (e) => {
        let mouseX = e.pageX;
        let mouseY = e.pageY;
        if (target != null) {
            target.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
        }
    });
}
follower(followerEl);
