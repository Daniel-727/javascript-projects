let toggle_btn = document.querySelector('.sidebar-toggle');

let close_btn = document.querySelector('.close-btn');

let sidebar = document.querySelector('.sidebar');

toggle_btn.addEventListener('click', () =>{

    /*MORE CODE*/
    /* if (sidebar.classList.contains('show-sidebar')){
        sidebar.classList.remove('show-sidebar');
    } else {
        sidebar.classList.add('show-sidebar');
    } */

    /*LESS CODE*/
    sidebar.classList.toggle('show-sidebar');
});

close_btn.addEventListener('click', () => {
    sidebar.classList.remove('show-sidebar');
})