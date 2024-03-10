function follower(follower) {
    let mouseX = 0;
    let mouseY = 0;
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        follower?.classList.remove('invisible');
        moveFollower(follower, mouseX, mouseY);
    });
    scaleFollower(follower);
}
function moveFollower(follower, x, y) {
    if (follower != null) {
        follower.style.transform = `translate(${x}px, ${y}px)`;
    }
}
function scaleFollower(follower) {
    const targets = document.querySelectorAll('.scaleFollower');
    console.log(targets);
    targets.forEach(target => {
        target.addEventListener('mouseover', () => {
            follower?.classList.add('h-20', 'w-20', 'duration-300', '-top-9', '-left-9');
            console.log('over');
        });
        target.addEventListener('mouseout', () => {
            follower?.classList.remove('h-20', 'w-20', '-top-9', '-left-9');
        });
    });
}
export default follower;
