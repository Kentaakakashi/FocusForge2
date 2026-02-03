// utils/database.js
const StudyDB = {
    // Save data
    save(key, data) {
        localStorage.setItem(`sz_${key}`, JSON.stringify(data));
    },
    // Get data
    get(key) {
        const data = localStorage.getItem(`sz_${key}`);
        return data ? JSON.parse(data) : null;
    },
    // User specific stats
    updateUserStats(username, newStats) {
        let stats = this.get(`stats_${username}`) || { hours: 0, streak: 0, points: 0 };
        stats = { ...stats, ...newStats };
        this.save(`stats_${username}`, stats);
    }
};
