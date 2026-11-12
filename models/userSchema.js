const fs = require('fs');
const path = require('path');

// ব্যাকএন্ড ফোল্ডারের বাইরে বা ভেতরে users.json ফাইলের পাথ ডিফাইন করা
const FILE = path.join(__dirname, '..', 'users.json');

// ফাইল থেকে সব ইউজার রিড করার ফাংশন
const readAll = () => {
    try {
        return JSON.parse(fs.readFileSync(FILE, 'utf8'));
    } catch (err) {
        return [];
    }
};

class UserSchema {
    constructor({ name, email, password }) {
        this._id = Date.now().toString() + Math.floor(Math.random() * 1000);
        this.name = name;
        this.email = email;
        this.password = password;
    }

    // ইমেইল দিয়ে ইউজার খোঁজার জন্য (Mongoose-এর find এর মতো কাজ করবে)
    static async find({ email }) {
        const users = readAll();
        return users.filter((user) => user.email === email);
    }

    // নতুন ইউজার users.json ফাইলে সেভ করার জন্য
    async save() {
        const users = readAll();
        users.push({ ...this });
        fs.writeFileSync(FILE, JSON.stringify(users, null, 2));
        return this;
    }
}

module.exports = UserSchema;