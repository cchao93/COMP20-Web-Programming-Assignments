function drawGameBG()
{
        var canvas = document.getElementById('game');
        if (canvas.getContext) {
                ctx = canvas.getContext('2d');
                ctx.fillStyle = "#87CEEB";
                ctx.fillRect(0, 0, 800, 600);
                image = new Image();
                image.onload = function() {
                        ctx.drawImage(image,
                                        0, 720, 900, 180, 0, 350, 800, 180);
                }
                image.src = 'assets/duckhunt.png';
        }
        else {
                alert('Sorry, canvas is not supported on your browser!');
        }
}
