document.addEventListener('DOMContentLoaded', () => {
    const events = [
        { name: 'Coding Challenge', date: '2024-09-18', time: '10:00 AM', teamSize: 3 },
        { name: 'Robotics Competition', date: '2024-09-19', time: '2:00 PM', teamSize: 5 },
        { name: 'Hackathon', date: '2024-09-20', time: '9:00 AM', teamSize: 4 }
    ];

    const eventList = document.getElementById('event-list');

    events.forEach(event => {
        const eventCard = document.createElement('div');
        eventCard.classList.add('event-card');

        eventCard.innerHTML = `
            <h3>${event.name}</h3>
            <p>Date: ${event.date}</p>
            <p>Time: ${event.time}</p>
            <p>Team Size: ${event.teamSize}</p>
        `;

        eventList.appendChild(eventCard);
    });
});
