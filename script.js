
(function(){
const b=document.getElementById('menu-toggle'),nav=document.getElementById('navlinks');
if(b&&nav){b.addEventListener('click',()=>{const open=nav.classList.toggle('open');b.setAttribute('aria-expanded',String(open));});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');b.setAttribute('aria-expanded','false');}));}
document.querySelectorAll('form[data-demo-form]').forEach(f=>f.addEventListener('submit',e=>{e.preventDefault();alert('Đây là biểu mẫu thử nghiệm nội bộ. Thông tin KHÔNG được gửi hoặc lưu lại. Chưa có lịch tư vấn/lớp học nào được xác nhận.');}));
})();
