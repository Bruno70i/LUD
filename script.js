
var foto = document.getElementById('foto-wallpaper')
foto.addEventListener('mouseover', () => {
    foto.src = 'img/wallpaper/foto_wallpaper_intro_black.jpg';

    
    foto.addEventListener('mouseout', () => {
        foto.src = 'img/wallpaper/foto_wallpaper_intro_white.jpg';
    });

})
