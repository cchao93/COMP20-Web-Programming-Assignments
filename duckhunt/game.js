/* game.js */

/* Chia-Chi (Victor) Chao
 * COMP-20 Assignment 2 Part 1
 * 2/25/14
 */

// function draws the background necessary for the game
// in the JavaScript Canvas element/tag
function draw()
{
        /* canvas tag provided to us */
        var canvas = document.getElementById('game');
        /* error checking */
        if (canvas.getContext) {
                ctx = canvas.getContext('2d');
                /* color of the dirt */
                ctx.fillStyle = "#C96A1B";
                ctx.fillRect(0, 530, 800, 70);
                image = new Image();
                image.onload = function() {
                        /* tree */
                        ctx.drawImage(image,
                                        0, 270, 75, 125, 0, 0, 250, 470);
                        /* dirt and bushes */
                        ctx.drawImage(image,
                                        0, 720, 900, 180, 0, 350, 800, 180);
                        /* dog sniffing */
                        ctx.drawImage(image,
                                        0, 0, 65, 45, 200, 450, 150, 90);
                        /* five birds flying */
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
