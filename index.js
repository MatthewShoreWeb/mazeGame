// Generates the user controlled node.
function generateNode() {
    let node = document.createElement('div');
    node.style.backgroundColor = 'red';
    node.style.position = 'relative';
    node.style.height = 100;
    node.style.width = 100;
    node.style.top = '0px';
    node.style.left = '0px';
    document.querySelector('body').append(node);
    return node;
};

// Generates maze depending on level.
function generateMaze() {

};

function updateTimer() {
    let time = parseInt(document.querySelector('#timer').textContent.split(' ').pop()) - 1;
    if (time >= 0) {
    document.querySelector('#timer').textContent = 'Time: ' + time;
    } else {
        console.log('Times up!');
    }
};

setInterval(updateTimer, 1000);

let node = generateNode();

document.addEventListener('keydown', function (event) {
    let key = event.key, top = parseInt(node.style.top), left = parseInt(node.style.left);
    if (key === 'w' && top >= 0) {
        node.style.top = (top - 7.5) + 'px';
    } else if (key === 'a' && left >= 0) {
        node.style.left = (left - 7.5) + 'px';
    } else if (key === 's') {
        node.style.top = (top + 7.5) + 'px';
    } else if (key === 'd') {
        node.style.left = (left + 7.5) + 'px';
    }
});
