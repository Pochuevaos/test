var teamAcc = document.getElementsByTagName('h');

for (let i = 0; i < teamAcc.length; i++) {
    teamAcc[i].addEventListener("click", function() {
        if (teamAcc[i].className.indexOf('--active') + 1) {
            teamAcc[i].className = teamAcc[i].className.substr(0, teamAcc[i].className.length - 8);
        } else {
            for (let j = 0; j < teamAcc.length; j++) {
                if (teamAcc[j].className.indexOf('--active') + 1) {
                    teamAcc[j].className = teamAcc[j].className.substr(0, teamAcc[j].className.length - 8);
                } 
            }
            teamAcc[i].className += "--active";
        }
    });
}


