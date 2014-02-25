function draw()
{
        var canvas = document.getElementById('game');
        if (canvas.getContext) {
                ctx = canvas.getContext('2d');
                ctx.fillStyle = "#C96A1B";
                ctx.fillRect(0, 530, 800, 70);
                image = new Image();
                image.onload = function() {
                        ctx.drawImage(image,
                                        0, 270, 75, 125, 0, 0, 250, 470);
                        ctx.drawImage(image,
                                        0, 720, 900, 180, 0, 350, 800, 180);
                        ctx.drawImage(image,
                                        0, 0, 65, 45, 200, 450, 150, 90);
                        ctx.drawImage(image,
                                        0, 120, 35, 25, 350, 200, 70, 50);
                        ctx.drawImage(image,
                                        170, 120, 40, 20, 525, 55, 80, 40);
                        ctx.drawImage(image,
                                        340, 115, 35, 35, 150, 30, 70, 70);
                        ctx.drawImage(image,
                                        210, 155, 30, 35, 715, 315, 65, 70);
                        ctx.drawImage(image,
                                        0, 155, 30, 35, 570, 165, 65, 70);
                }
                image.src = 'assets/duckhunt.png';
        }
        else {
                alert('Sorry, canvas is not supported on your browser!');
        }
}
