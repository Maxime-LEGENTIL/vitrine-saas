const btns_free_test = document.querySelectorAll('#free_btn');

function handleClickFreeBtn(e) {
    console.log('ok')
    window.location.href = "http://localhost:5173/inscription";
}

for (let index = 0; index < btns_free_test.length; index++) {
    //const element = array[index];
    btns_free_test[index].addEventListener('click', handleClickFreeBtn);
    
}