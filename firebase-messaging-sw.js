importScripts('https://www.gstatic.com/firebasejs/10.4.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.4.0/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyCU6QD7Lb0kKdswB_FwZwPsVSEvHjVkoOc",
    authDomain: "gwgnworkbord.firebaseapp.com",
    projectId: "gwgnworkbord",
    storageBucket: "gwgnworkbord.firebasestorage.app",
    messagingSenderId: "442223729114",
    appId: "1:442223729114:web:bbb6c00015048158bac8e3",
    measurementId: "G-3XB7X0RD5B"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    const notificationTitle = payload.notification.title || "🏢 GN서비스 광주센터";
    const notificationOptions = {
        body: payload.notification.body,
        icon: 'https://cdn-icons-png.flaticon.com/512/1827/1827504.png'
    };
    self.registration.showNotification(notificationTitle, notificationOptions);
});
