let createGrid = width => {
    for (let i = 0; i < width; i++) {
        let tt = document.createElement('div')
        tt.setAttribute('class', 'col');
        for (let j = 0; j < width; j++)
            {
                let t = document.createElement('div')
                t.setAttribute('class', 'cell');
                t.addEventListener('mouseenter', e => {e.target.style.backgroundColor = 'green'})
                tt.appendChild(t);
            }

        document.querySelector('.container').appendChild(tt);
    }
}
