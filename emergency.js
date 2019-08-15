class Emergency {
  constructor(
    name,
    age,
    location,
    phone,
    time,
    safeBool,
    priority,
    description,
    referral
  ) {
    this.name = name;
    this.age = age;
    this.location = location;
    this.phone = phone;
    this.time = time;
    this.safe = safeBool;
    this.priority = priority;
    this.description = description;
    this.referral = referral;
  }
}
module.exports = Emergency;
