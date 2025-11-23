// ====== КЛАСС ДЛЯ ХРАНЕНИЯ ДАННЫХ ФОРМЫ ======
class UserFormData {
    constructor(login, password, agree) {
        this.login = login;
        this.password = password;
        this.agree = agree;
    }

    printToConsole() {
        console.log("=== Данные формы ===");
        console.log("Логин:", this.login);
        console.log("Пароль:", this.password);
        console.log("Согласие на обработку:", this.agree);
        console.log("====================");
    }
}

// ====== ОБРАБОТКА ФОРМЫ ======
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".form");

    if (!form) return;

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const login = form.querySelector(".form__login").value.trim();
        const password = form.querySelector(".form__password").value.trim();
        const agree = form.querySelector(".form__agree").checked;

        // Создаём объект
        const userData = new UserFormData(login, password, agree);

        // Выводим в консоль (имитация отправки на сервер)
        userData.printToConsole();

        // Простая имитация получения ответа сервера
        alert("Данные успешно отправлены!");
    });
});
