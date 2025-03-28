    const FORM_DATA = document.querySelector('.form-data');
    const FORM_BTN = document.querySelector('.form-btn')
    const ERROR_MESSAGE = 'Some error occupied!';
    const SUCCESS_MESSAGE = 'Sent successfuly!';

    FORM_DATA.addEventListener('submit', formSend);

    async function formSend(event) {
        event.preventDefault();
        const ENCODED_TOKEN = 'NzY0MTYyMDU4OTpBQUUxODFWUEg3djNLOVgzcnpKWGwxUUtGTUxjOHBKamdDSQ==';
        const TOKEN = atob(ENCODED_TOKEN);
        const CHAT_ID = '-1002669102693';
        const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

        let message = `
        <b>Новий відгук!</b>
        <b>Ім'я:</b> ${this.name.value}
        <b>Номер телефону:</b> ${this.number.value}
        <b>Коротка інформація:</b> ${this.message.value}
        `;

        let response = await fetch(URL_API, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(
                {chat_id: CHAT_ID,
                text: message,
                parse_mode: 'html',}
            ),
        })

        let result = await response.json();

        if(result.ok){
            FORM_BTN.textContent = 'Дякуємо за Ваш відгук!';
            FORM_BTN.disabled = true;
            console.log(SUCCESS_MESSAGE)
        } else {
            console.log(ERROR_MESSAGE)
        }
    }