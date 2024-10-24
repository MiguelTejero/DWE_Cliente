window.onload = function () {
    const table = document.getElementById('canvas');
    const rows = 100;
    const cols = 100;

    for (let i = 0; i < rows; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < cols; j++) {
            const cell = document.createElement('td');
            cell.addEventListener('mousemove', colorCell);
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
};

function colorCell(event) {
    if (event.ctrlKey) {
        event.target.style.backgroundColor = 'red';
    } else if (event.shiftKey) {
        event.target.style.backgroundColor = 'blue';
    }
}
