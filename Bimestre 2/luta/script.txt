function lutar(){
    document.getElementById('monstro').src = './imgs/monstrolutar.jpg'
    document.getElementById('msg1').style.display = 'none'
    document.getElementById('msg2').innerHTML = 'Parabens! Com muito esforco, voce conseguiu enfrentar do monstro!'
    document.getElementById('ipt1').style.display = 'none'
    document.getElementById('ipt2').style.display = 'none'
    document.getElementById('retry').style.display = 'block'
}


function fugir(){
    document.getElementById('monstro').src = './imgs/monstrofugir.jpg'
    document.getElementById('msg1').style.display = 'none'
    document.getElementById('msg2').innerHTML = 'Parabens! Com muito esforco, voce conseguiu fugir do monstro!'
    document.getElementById('ipt1').style.display = 'none'
    document.getElementById('ipt2').style.display = 'none'
    document.getElementById('retry').style.display = 'block'
}

function tentar() {
    document.getElementById('monstro').src = './imgs/monstro1.jpg'
    document.getElementById('msg1').style.display = 'inline'
    document.getElementById('msg2').innerHTML = 'Um monstro aparece no seu caminho pela floresta.'
    document.getElementById('ipt1').style.display = 'inline'
    document.getElementById('ipt2').style.display = 'inline'
    document.getElementById('retry').style.display = 'none'
}