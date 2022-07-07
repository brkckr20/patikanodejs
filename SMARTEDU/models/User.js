const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["student", "teacher", "admin"],
        default: "student"
    },
    courses: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Course"
        }
    ]
});

//bcrypt işlemleri
UserSchema.pre("save", function (next) {
    const user = this;
    if (!this.isModified('password')) return next(); //kullanıcının parolasının istem dışı güncellenmesini önlemek için - öğrenci kursa kaydolduğunda parola otomatik olarak değişiyordu
    bcrypt.hash(user.password, 10, (error, hash) => {
        user.password = hash;
        next();
    })
})

const User = mongoose.model("User", UserSchema);

module.exports = User