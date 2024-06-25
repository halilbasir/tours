document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Ваше сообщение отправлено! Мы свяжемся с вами в ближайшее время.');
    // Здесь вы можете добавить AJAX запрос для отправки данных на сервер
});
