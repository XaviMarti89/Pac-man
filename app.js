document.addEventListener("DOMContentLoaded", () => {

    const scoreDisplay = document.getElementById("score");
    const grid = document.querySelector('.grid');
    const width = 28;
    let score = 0;

    // 0 - puntets
    // 1 - muro
    // 2 - fantasma
    // 3 - poder
    // 4 - buit

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
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
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

    
    const cuadrados = [];

    function createBoard() {
        for (let i = 0; i < layout.length; i++) {
            const cuadro = document.createElement('div');
            cuadro.id = i
            grid.appendChild(cuadro);
            cuadrados.push(cuadro);

            if (layout[i] === 0) {
                cuadrados[i].classList.add('puntets');
            }
            if (layout[i] === 1) {
                cuadrados[i].classList.add('muro');
            }
            if (layout[i] === 2) {
                cuadrados[i].classList.add('fantasma');
            }
            if (layout[i] === 3) {
                cuadrados[i].classList.add('poder');
            }

        }
    }

    createBoard();
  

    //Create PAC-MAN

    let pacmanIndex = 490;
    cuadrados[pacmanIndex].classList.add('pac-man');

    function movePacman(tecla) {
        cuadrados[pacmanIndex].classList.remove('pac-man');
        if (tecla.key === 'ArrowUp' && !cuadrados[pacmanIndex - width].classList.contains('muro')) {
            pacmanIndex -= width
        }
        if (tecla.key === 'ArrowDown' && !cuadrados[pacmanIndex + width].classList.contains('muro')) {
            pacmanIndex += width
        }
        if (tecla.key === 'ArrowLeft' && !cuadrados[pacmanIndex - 1].classList.contains('muro')) {
            pacmanIndex -= 1
            if (pacmanIndex == 364) {
                pacmanIndex = 391
            }
        }
        if (tecla.key === 'ArrowRight' && !cuadrados[pacmanIndex + 1].classList.contains('muro')) {
            pacmanIndex += 1
            if (pacmanIndex == 391) {
                pacmanIndex = 364
            }
        }
        cuadrados[pacmanIndex].classList.add('pac-man');

        comePipas();
        superPoder();
        win();
        gameOver();
    }


    function comePipas() {
        if (cuadrados[pacmanIndex].classList.contains('puntets')) {
            score++;
            scoreDisplay.innerHTML = score;
            cuadrados[pacmanIndex].classList.remove('puntets')
        }
    }

    function superPoder() {
        if (cuadrados[pacmanIndex].classList.contains('poder')) {
            score += 10;
            scoreDisplay.innerHTML = score;

            ghosts.forEach(fantasma => fantasma.asustat = true);
            setTimeout(relax,10000);

            cuadrados[pacmanIndex].classList.remove('poder')
        }
    }

    function relax(){
        ghosts.forEach(f => f.asustat = false);
    }

    class Ghost {
        constructor(className, startIndex, vel) {
            this.className = className;
            this.startIndex = startIndex;
            this.vel = vel;
            this.velAsustat = 800;
            this.ghostIndex = startIndex;
            this.asustat = false;
            this.timerId = NaN
        }
    }

    ghosts = [
        new Ghost('pepe', 348, 250),
        new Ghost('paco', 351, 400),
        new Ghost('pepa', 379, 500),
        new Ghost('paca', 376, 300),
        new Ghost('kibili', 377, 150),
    ]



    ghosts.forEach(ghost => {
        cuadrados[ghost.ghostIndex].classList.add(ghost.className);
        cuadrados[ghost.ghostIndex].classList.add('ghost');
    });

    ghosts.forEach(ghost => moveGhost(ghost));

    function moveGhost(ghost){
        console.log(ghost);
        const directions = [-1, 1, width, -width];

        let direction = directions[Math.floor(Math.random()*directions.length)]
    
        ghost.timerId = setInterval(function(){
            
            if(!cuadrados[ghost.ghostIndex+direction].classList.contains('muro') 
            && !cuadrados[ghost.ghostIndex+direction].classList.contains('ghost')){

                cuadrados[ghost.ghostIndex].classList.remove(ghost.className,'ghost','fasustado');
                ghost.ghostIndex += direction;
                cuadrados[ghost.ghostIndex].classList.add(ghost.className,'ghost');

            }else{
                direction = directions[Math.floor(Math.random()*directions.length)]
            }

            if(ghost.asustat){
                cuadrados[ghost.ghostIndex].classList.add('fasustado');
                //baixar vel
            }

            if(ghost.asustat && cuadrados[ghost.ghostIndex].classList.contains('pac-man')){
                cuadrados[ghost.ghostIndex].classList.remove('fasustado', 'ghost', ghost.className);
                ghost.ghostIndex = ghost.startIndex;
                ghost.asustat=false;
                //score += 100;
                //scoreDisplay.innerHTML = score;
                cuadrados[ghost.ghostIndex].classList.add('ghost', ghost.className);
            }
            gameOver();
        },ghost.vel)


        
    }

    document.addEventListener('keyup', movePacman);

    function gameOver(){
        if(cuadrados[pacmanIndex].classList.contains('ghost') &&
        !cuadrados[pacmanIndex].classList.contains('fasustado')){
            ghosts.forEach(pau => clearInterval(pau.timerId))
            document.removeEventListener('keyup', movePacman);
            setTimeout(function(){
                alert("Has Perdut")
            },500)
        }
    }

    function win(){
        if(score == 274){
            ghosts.forEach(paula => clearInterval(paula.timerId))
            document.removeEventListener('keyup', movePacman);
            setTimeout(function(){
                alert("Has Guanyat")
            },500)
        }
    }

})