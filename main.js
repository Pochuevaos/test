var teamAcc = document.getElementsByTagName('h');
// var teamAccordeonG = document.querySelectorAll('.accordeon__trigger_grey');
// var teamAccordeon = document.querySelectorAll('.accordeon__trigger');




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



// for (let i = 0; i < teamAcc.length; i++) {
//     teamAcc[i].addEventListener("click", function() {
        // if (teamAcc[i].className === 'accordeon__trigger_grey') {
        //     console.log('g');
        //     for (let j; j < teamAcc.length; j++) {
        //         teamAcc[j].className = "accordeon__trigger_grey";
        //     }
        // teamAcc[i].className += " accordeon__trigger_grey--active";    
        // } 
        // else {
        //     teamAcc[i].className = "accordeon__trigger_grey";
        //     console.log('стал грей');
        // }


        // if (teamAcc[i].className === "accordeon__trigger") {
        //     console.log('w');
            
        //     for (let j; j < teamAcc.length; j++) {
        //         teamAcc[j].className = "accordeon__trigger";
        //     }
        // teamAcc[i].className += " accordeon__trigger--active";    
        // } 
        // else {
        //     teamAcc[i].className = "accordeon__trigger";
        //     console.log('стал вайт');
        // }
//     });
//   }



// rabotaet
// function accordeon__trigger() {
//     for (let j = 0; j < teamAccordeonG.length; j++) {
//         teamAccordeonG[j].className = "accordeon__trigger_grey";
//       }
//       for (let j = 0; j < teamAccordeon.length; j++) {
//           teamAccordeon[j].className = "accordeon__trigger";
//       }
// }

//     for (let i = 0; i < teamAccordeonG.length; i++) {
//         teamAccordeonG[i].addEventListener("click", function() {
//           if (teamAccordeonG[i].className === "accordeon__trigger_grey") {
//             accordeon__trigger();
//             teamAccordeonG[i].className += " accordeon__trigger_grey--active";
//           } else {
//             teamAccordeonG[i].className = "accordeon__trigger_grey";
//           }
//         });
//       }
      
//       for (let i = 0; i < teamAccordeon.length; i++) {
//         teamAccordeon[i].addEventListener("click", function() {
//           if (teamAccordeon[i].className === "accordeon__trigger") {
//             accordeon__trigger();
//             teamAccordeon[i].className += " accordeon__trigger--active";
//           } else {
//             teamAccordeon[i].className = "accordeon__trigger";
//           }
//         });
//       }




// big var

// for (let i = 0; i < teamAccordeonG.length; i++ ) {
//     teamAccordeonG[i].addEventListener('click', function() {
//          if (teamAccordeonG[i].className === 'accordeon__trigger_grey') {
//             for (let j = 0; j < teamAccordeonG.length; j++) {
//                 teamAccordeonG[j].className = 'accordeon__trigger_grey';
//             }
//            teamAccordeonG[i].className += " accordeon__trigger--active";
//                 } else {
//             teamAccordeonG[i].className = "accordeon__trigger_grey"; 
//         }
//     })   
// };

// for (let i = 0; i < teamAccordeon.length; i++ ) {
//     teamAccordeon[i].addEventListener('click', function() {
//          if (teamAccordeon[i].className === 'accordeon__trigger') {
//             for (let j = 0; j < teamAccordeon.length; j++) {
//                 teamAccordeon[j].className = 'accordeon__trigger';
//             }
//            teamAccordeon[i].className += " accordeon__trigger--active";
//                 } else {
//             teamAccordeon[i].className = "accordeon__trigger"; 
//         }
//     })   
// };

