// (async function (param) {
//     let resultado = await new Promise((resolve, reject) => {
//         setTimeout(resolve,400,5)
//     });
//     let valor2 = await new Promise((resolve, reject) => {
//         setTimeout(resolve,400,10)
//     });

//     console.log(resultado + valor2);
// })();

async function showGithubInfo() {
    let response = await fetch("https://api.github.com/users/urielhdz/repos");
    let repos = await response.json();
    console.log(repos)
}

showGithubInfo();