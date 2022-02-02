import '@scssFolder/'

const layoutFolder = './async';


function switchPage(){
    let whatPage = document.querySelector('html').dataset.page;
    switch (whatPage) {
        case 'accordion':
            importLayout('accordionLayout');
            importLayout('standardLayout');
            break;
        default:
            importLayout('standardLayout');
    }
}

function importLayout(whatLayout){
    import( /* webpackChunkName:`jsmodule-[request]` */ /* webpackMode: "lazy" */ `${layoutFolder}/${whatLayout}.js` )
        .then(({default: layout}) => {
            console.log(`imported ${whatLayout}`);
        })
        .catch(error => {
            console.error('Failed to load async js');
            console.dir(error, error.stack);
        });
}

switchPage();


// document.querySelector('.async-loader__cta').addEventListener('click', () => {

//     let jsModule = './async/productLayout.js';
//     import( /* webpackChunkName:`jsmodule-[request]` */ /* webpackMode: "lazy" */ `${jsModule}` )
//         .then(({default: layout}) => {
//             console.log(`imported ${jsModule}`);
//         })
//         .catch(error => {
//             console.error('Failed to load async js');
//             console.dir(error, error.stack);
//         });
// });
