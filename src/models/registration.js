const bcrypt = require('bcrypt');
const userSchema = new Schema({
    firstName: {type: String, required: [true, 'first name is required']},
    lastName: {type: String, required: [true, 'last name is required']},
    email: { type: String, required: [true, 'email address is required'], 
             unique: [true, 'this email address has been used'] },
    password: { type: String, required: [true, 'password is required'] },
}
);

userSchema.pre('save', function(next){
    let user = this;
    if (!user.isModified('password'))
        return next();
    bcrypt.hash(user.password, 4)
    .then(hash => {
      user.password = hash;
      next();
    })
    .catch(err => next(error));
  });
  
  //implement a method to compare to login password and the hash stored in the database
  userSchema.methods.comparePassword = function(loginPassword) {
    let user = this;
    return bcrypt.compare(loginPassword, this.password);
  }



module.exports = PostgreSQL.model('user', userSchema);