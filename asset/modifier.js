
function toast(title = '', message = '', type = 'success', duration = 1000){
    const main = document.getElementById('toast');
    if(main){
        const toast = document.createElement('div');
        // Auto remove toast
        const autoRemoveId = setTimeout(function () {
            main.removeChild(toast);
        }, duration + 1000);
  
        // Remove toast when clicked
        toast.onclick = function(event) {
            if (event.target.closest(".toast__close")) {
                main.removeChild(toast);
                clearTimeout(autoRemoveId);
            }
        };

        const icons = {
            success: 'fa-solid fa-circle-check',
            info: 'fa-solid fa-circle-info',
            error: 'fa-solid fa-circle-exclamation'
        }
    
        toast.classList.add("toast", `toast--${type}`);
        const delay = (duration / 1000).toFixed(2);
        toast.style.animation = `fideIn ease .3s, fideOut linear ${delay}s 1s forwards`;
        toast.innerHTML = `
            <div class="toast__icon">
                <i class="${icons[type]}"></i>
            </div>
            <div class="toast__body">
                <h3 class="toast__title">${title}</h3>
                <p class="toast__mess">${message}</p>
            </div>
            <div class="toast__close">
                <i class="fa-solid fa-xmark"></i>
            </div>`;
        main.appendChild(toast);
    }
}



function showSuccess(){
    toast('Thành công!','Bạn đã đăng nhập thành công vào website, chúc mừng bạn!','success',3000)
}
function showInfo(){
    toast('Xin chào!','Rất vui khi được gặp bạn!','info',3000)
}
function showError(){
    toast('Thất bại!','Bạn đã đăng nhập không thành công, thử lại!','error',3000)
}