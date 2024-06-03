let createGrid = width => {
    for (let i = 0; i < width; i++) {
        let tt = document.createElement('div')
        tt.setAttribute('class', 'col');
        for (let j = 0; j < width; j++)
            {
                let t = document.createElement('div')
                t.setAttribute('class', 'cell');
                t.addEventListener('mouseenter', e => {e.target.style.backgroundColor = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`})
                tt.appendChild(t);
            }

        document.querySelector('.container').appendChild(tt);
    }
}

let newGrid = () => {
    let a = parseInt(prompt("Enter size of new grid:"))
    if (a > 100 || a < 0) {
        alert('Invalid');
        return;
    }
    document.querySelector('.container').textContent = ''; //Remove all children!!!!
    createGrid(a);
}

createGrid(16)
