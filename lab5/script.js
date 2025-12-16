document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("authForm");

    const loginInput = document.getElementById("loginInput");
    const passwordInput = document.getElementById("passwordInput");
    const agreeInput = document.getElementById("agreeInput");

    const loginHint = document.getElementById("loginHint");
    const passwordHint = document.getElementById("passwordHint");
    const agreeHint = document.getElementById("agreeHint");

    const output = document.getElementById("serverOutput");

    // ====== ВАЛИДАЦИЯ ======
    loginInput.addEventListener("input", () => {
        if (loginInput.value.length < 3) {
            loginHint.textContent = "Минимум 3 символа.";
        } else {
            loginHint.textContent = "";
        }
    });

    passwordInput.addEventListener("input", () => {
        if (passwordInput.value.length < 5) {
            passwordHint.textContent = "Минимум 5 символов.";
        } else {
            passwordHint.textContent = "";
        }
    });

    agreeInput.addEventListener("change", () => {
        agreeHint.textContent = agreeInput.checked
            ? ""
            : "Необходимо согласие.";
    });

    // ====== ОТПРАВКА POST ======
    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        if (loginInput.value.length < 3 ||
            passwordInput.value.length < 5 ||
            !agreeInput.checked) {

            output.textContent = "Исправьте ошибки формы!";
            return;
        }

        const data = {
            login: loginInput.value,
            password: passwordInput.value,
            agree: agreeInput.checked
        };

        try {
            const response = await fetch("http://localhost:8000/users", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(data)
            });

            const json = await response.json();
            output.textContent = JSON.stringify(json, null, 2);

        } catch (err) {
            output.textContent = "Ошибка подключения к серверу.";
            console.error(err);
        }
    });

    // ====== КНОПКА ЗАГРУЗКИ ДАННЫХ (GET) ======
    document.getElementById("loadDataBtn").addEventListener("click", async () => {
        try {
            const response = await fetch("http://localhost:8000/users");
            const json = await response.json();

            output.textContent = JSON.stringify(json, null, 2);

        } catch (err) {
            output.textContent = "Ошибка получения данных.";
        }
    });
});
