let ctx;
let ctx2;
let ctx3;
let ctx4;

document.addEventListener('DOMContentLoaded', (event) => {
    let canvas = document.getElementById('quad1');
    let canvas2 = document.getElementById('quad2');
    let canvas3 = document.getElementById('quad3');
    let canvas4 = document.getElementById('quad4');

    ctx = canvas.getContext('2d');
    ctx2 = canvas2.getContext('2d');
    ctx3 = canvas3.getContext('2d');
    ctx4 = canvas4.getContext('2d');

    let scale = 10;  // Adjust the scaling factor as needed
    
    ctx.scale(scale, scale);
    ctx2.scale(scale, scale);
    ctx3.scale(scale, scale);
    ctx4.scale(scale, scale);
});

function drawRam(ctx, ramAddress) {
    
    for (let rpl = 0; rpl < 16; rpl++) {
        for (let rpm = 0; rpm < 4; rpm++) {
            let value = ramdata[ramAddress][rpm][rpl];  // Access the data
            
            // Check that ctx is defined before trying to use it
            if(ctx) {
                for (let i = 0; i < 4; i++) {
                    // Extract bit value by shifting and masking
                    let pixelState = (value >> i) & 1; // Changed the shift index

                    // Choose color based on bit value
                    ctx.fillStyle = pixelState ? 'rgba(8, 180, 13,1)' : 'rgba(255,255,255,1)'; // black or white

                    // Draw the pixel
                    ctx.fillRect(rpm * 4 + i, rpl, 1, 1);
                }
            } else {
                console.error("Context not initialized!");
            }
        }
    }
}