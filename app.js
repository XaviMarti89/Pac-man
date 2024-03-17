document.addEventListener('DOMContentLoaded', () => {

    const scoreDisplay = document.getElementById('score');
    const width = 28;
    let score = 0;
    const grid = document.querySelector('.grid');

    const layout = [
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 3, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 3, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 2, 2, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        4, 4, 4, 4, 4, 4, 0, 0, 0, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 0, 0, 0, 4, 4, 4, 4, 4, 4,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 3, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 3, 1,
        1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
        1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
    ]

    // 0 - pac-dots
    // 1 - wall
    // 2 - ghost-lair
    // 3 - power-pellet
    // 4 - empty

    const squares = [];
    //create your board
    function createBoard() {
        for (let i = 0; i < layout.length; i++) {
            const square = document.createElement('div');
            square.id = i
            grid.appendChild(square);
            squares.push(square);

            //add layout to the board
            if (layout[i] === 0) {
                squares[i].classList.add('pac-dot');
            }
            if (layout[i] === 1) {
                squares[i].classList.add('wall');
            }
            if (layout[i] === 2) {
                squares[i].classList.add('ghost-lair');
            }
            if (layout[i] === 3) {
                squares[i].classList.add('power-pellet');
            }
        }
    }

    createBoard();

    //Create PAC-MAN

    let pacmanIndex = 490;
    squares[pacmanIndex].classList.add('pac-man');

    //move PacMan
    function movePacman(e) {
        squares[pacmanIndex].classList.remove('pac-man')
        console.log(e.key)
        switch (e.key) {
            case 'ArrowLeft':
                if (!squares[pacmanIndex - 1].classList.contains("wall")) {
                    pacmanIndex -= 1
                }
                if (pacmanIndex == 364) {
                    pacmanIndex = 390
                }
                break
            case 'ArrowRight':
                if (!squares[pacmanIndex + 1].classList.contains("wall")) {
                    pacmanIndex += 1
                }
                if (pacmanIndex == 391) {
                    pacmanIndex = 365
                }
                break
            case 'ArrowUp':
                if (!squares[pacmanIndex - width].classList.contains("wall")) {
                    pacmanIndex -= width
                }
                break
            case 'ArrowDown':
                if (!squares[pacmanIndex + width].classList.contains("wall")) {
                    pacmanIndex += width
                }
                break
        }
        squares[pacmanIndex].classList.add('pac-man')
        comePastilla();
        superPoder();
    }

    document.addEventListener('keyup', movePacman);


    function comePastilla() {
        console.log(squares[pacmanIndex])
        if (squares[pacmanIndex].classList.contains('pac-dot')) {
            score++;
            scoreDisplay.innerHTML = score;

            squares[pacmanIndex].classList.remove('pac-dot');
        }
    }

    function superPoder() {
        console.log(squares[pacmanIndex])
        if (squares[pacmanIndex].classList.contains('power-pellet')) {
            score += 10;
            scoreDisplay.innerHTML = score;

            ghosts.forEach(ghost => ghost.isScared=true);
            setTimeout(relax,10000);

            squares[pacmanIndex].classList.remove('power-pellet');
        }
    }

    function relax(){
        ghosts.forEach(ghost => ghost.isScared=false);
    }

    class Ghost {
        constructor(className, startIndex, speed) {
            this.className = className;
            this.startIndex = startIndex;
            this.speed = speed;
            this.ghostIndex = startIndex;
            this.isScared = false;
            this.timerId = NaN
        }
    }

    ghosts = [
        new Ghost('blinky', 348, 250),
        new Ghost('pinky', 351, 400),
        new Ghost('inky', 379, 500),
        new Ghost('clyde', 376, 300),
    ]

    console.log(ghosts)


    ghosts.forEach(ghost => {
        squares[ghost.ghostIndex].classList.add(ghost.className);
        squares[ghost.ghostIndex].classList.add('ghost');
    });

    ghosts.forEach(ghost => moveGhost(ghost));

    function moveGhost(ghost) {

        const directions = [-1, 1, width, -width];
        let direction = directions[Math.floor(Math.random() * directions.length)]

        ghost.timerId = setInterval(function () {

            if (!squares[ghost.ghostIndex + direction].classList.contains('ghost') && 
                !squares[ghost.ghostIndex + direction].classList.contains('wall')) {

                squares[ghost.ghostIndex].classList.remove(ghost.className, 'ghost', 'scared');
                ghost.ghostIndex += direction;
                squares[ghost.ghostIndex].classList.add(ghost.className, 'ghost');

            } else {
                direction = directions[Math.floor(Math.random() * directions.length)]
            }

            if(ghost.isScared){
                squares[ghost.ghostIndex].classList.add('scared');
            }

            if(ghost.isScared && squares[ghost.ghostIndex].classList.contains('pac-man')){
                squares[ghost.ghostIndex].classList.remove('ghost', 'scared', ghost.className)
                ghost.ghostIndex = ghost.startIndex;
                score+=100;
                scoreDisplay.innerHTML=score;
                squares[ghost.ghostIndex].classList.add('ghost', ghost.className)
            }

        }, ghost.speed)


    }
})




