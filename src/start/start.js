let html = document.body
let deg = 0
let tick = () => {
    html.style.background = `background linear-gradient(${deg+=0.3}deg, #F1C40F, #E74C3C)`
    requestAnimationFrame(tick)
}
requestAnimationFrame(tick)