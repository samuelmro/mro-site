// MRO Advocacy · scripts compartilhados
document.addEventListener('DOMContentLoaded', function () {
  // menu mobile
  var burger = document.querySelector('.burger');
  var menu = document.getElementById('menu');
  if (burger && menu) {
    burger.addEventListener('click', function () { menu.classList.toggle('open'); });
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { menu.classList.remove('open'); });
    });
  }
  // reveal on scroll
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) e.target.classList.add('in'); });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });

  // formulário de contato
  var form = document.getElementById('contato-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      var msg = document.getElementById('form-msg');
      var check = document.getElementById('aceite');
      if (check && !check.checked) {
        e.preventDefault();
        if (msg) msg.textContent = 'É necessário aceitar os Termos de Uso e a Política de Privacidade.';
        return;
      }
      // Se ainda não houver backend configurado (action=#), evita recarregar a página
      if (form.getAttribute('action') === '#') {
        e.preventDefault();
        if (msg) msg.textContent = 'Formulário pronto. Configure o serviço de envio (ver instruções) para ativar.';
      }
    });
  }
});
