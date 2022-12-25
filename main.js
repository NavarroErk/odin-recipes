    // after 5 seconds, remove overlay
    let overlay = document.querySelector("#overlay")
    setTimeout(()=> {
        overlay.parentNode.removeChild(overlay)
    }, 4000)