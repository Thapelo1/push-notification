let notificationBtn = document.querySelector(".btn-send-notification");

notificationBtn.addEventListener("click", () => {
    Notification.requestPermission().then(permission => {
        if (permission == "granted"){

            let notification = new Notification("Notification Title",
            {
                body: "Notification information",
                data: {
                    closingInformation: "Sad to see you close"
                }
            })

            notification.addEventListener("close", (e) => {
                console.log(e)
            })
        }
    })
})