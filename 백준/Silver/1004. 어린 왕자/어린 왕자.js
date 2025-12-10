const fs = require('fs');

const input = fs.readFileSync(0, 'utf8').trim().split('\n');

let inputIndex = 0;
const T = parseInt(input[inputIndex++].trim(), 10);
function isInside(px, py, cx, cy, r) {
    const dist_squared = Math.pow(px - cx, 2) + Math.pow(py - cy, 2);
    const r_squared = Math.pow(r, 2);
    return dist_squared < r_squared;
}
const results = [];
for (let t = 0; t < T; t++) {
    const [x1, y1, x2, y2] = input[inputIndex++].trim().split(' ').map(Number);
    const n = parseInt(input[inputIndex++].trim(), 10);
    let required_path_count = 0;
    for (let i = 0; i < n; i++) {
        const [cx, cy, r] = input[inputIndex++].trim().split(' ').map(Number);
        
        const start_in = isInside(x1, y1, cx, cy, r);
        const end_in = isInside(x2, y2, cx, cy, r);
        if (start_in !== end_in) {
            required_path_count++;
        }
    }
    
    results.push(required_path_count);
}

console.log(results.join('\n'));