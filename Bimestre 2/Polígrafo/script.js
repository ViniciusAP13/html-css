var sims = 0
var resps = 1

function clique(verify) {
    let p1 = document.getElementById("p1")
    let p2 = document.getElementById("p2")
    let p3 = document.getElementById("p3")
    let p4 = document.getElementById("p4")
    let p5 = document.getElementById("p5")
    // p1.style.display = "none" 
    // p2.style.display = "none" 
    // p3.style.display = "none" 
    // p4.style.display = "none" 
    // p5.style.display = "none" 
    if (verify == 'sim') {
        sims ++
    }
    resps ++
    
    switch (resps) {
        case 1:
            // p1.style.display = "flex"
            break;
    
        case 2:
            p1.style.left = "-100%"
            // p2.style.display = "flex"
            break;
    
        case 3:
            p2.style.left = "-100%"
            // p3.style.display = "flex"
            break;
    
        case 4:
            p3.style.left = "-100%"
            // p4.style.display = "flex"
            break;
    
        case 5:
            p4.style.left = "-100%"
            p5.innerHTML = "Sample text"
            // p5.style.display = "flex"
            break;
    
        default:
            break;
    }
}

// function clique(verify) {
//     let p1 = document.getElementById("p1")
//     let p2 = document.getElementById("p2")
//     let p3 = document.getElementById("p3")
//     let p4 = document.getElementById("p4")
//     let p5 = document.getElementById("p5")
//     p1.style.display = "none" 
//     p2.style.display = "none" 
//     p3.style.display = "none" 
//     p4.style.display = "none" 
//     p5.style.display = "none"
    

//     if (resps == 0) {
//         document.getElementById("p1").style.display = "block"
//     } else {
//         document.getElementById("p1").style.display = "none"
//     }

//     if (resps == 1) {
//         document.getElementById("p2").style.display = "block"
//     } else {
//         document.getElementById("p2").style.display = "none"
//     }

//     if (resps == 2) {
//         document.getElementById("p3").style.display = "block"
//     } else {
//         document.getElementById("p3").style.display = "none"
//     }

//     if (resps == 3) {
//         document.getElementById("p4").style.display = "block"
//     } else {
//         document.getElementById("p4").style.display = "none"
//     }

//     if (resps == 4) {
//         document.getElementById("p5").style.display = "block"
//     } else {
//         document.getElementById("p5").style.display = "none"
//     }
// }

function teste(teste) {
    if(teste == "teste")
    {
        alert("teste!")
    }
    else
    {
        alert("no teste :( ")
    }
}