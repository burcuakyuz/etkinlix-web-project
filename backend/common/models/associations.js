
const User = require('./User');
const Category = require('./Category');
const Location = require('./Location');
const Event = require('./Event');
const Ticket = require('./Ticket');
const Registration = require('./Registration');
const Payment = require('./Payment');

// Kullanıcı - Etkinlik
User.hasMany(Event, {
  foreignKey: 'organizer_id',
  as: 'organizedEvents'
});

Event.belongsTo(User, {
  foreignKey: 'organizer_id',
  as: 'organizer'
});

// Kategori - Etkinlik
Category.hasMany(Event, {
  foreignKey: 'category_id',
  as: 'events'
});

Event.belongsTo(Category, {
  foreignKey: 'category_id',
  as: 'category'
});

// Konum - Etkinlik
Location.hasMany(Event, {
  foreignKey: 'location_id',
  as: 'events'
});

Event.belongsTo(Location, {
  foreignKey: 'location_id',
  as: 'location'
});

// Etkinlik - Bilet
Event.hasMany(Ticket, {
  foreignKey: 'event_id',
  as: 'tickets'
});

Ticket.belongsTo(Event, {
  foreignKey: 'event_id',
  as: 'event'
});

// Kullanıcı - Kayıt
User.hasMany(Registration, {
  foreignKey: 'user_id',
  as: 'registrations'
});

Registration.belongsTo(User, {
  foreignKey: 'user_id',
  as: 'user'
});

// Etkinlik - Kayıt
Event.hasMany(Registration, {
  foreignKey: 'event_id',
  as: 'registrations'
});

Registration.belongsTo(Event, {
  foreignKey: 'event_id',
  as: 'event'
});

// Bilet - Kayıt
Ticket.hasMany(Registration, {
  foreignKey: 'ticket_id',
  as: 'registrations'
});

Registration.belongsTo(Ticket, {
  foreignKey: 'ticket_id',
  as: 'ticket'
});

// Kayıt - Ödeme
Registration.hasMany(Payment, {
  foreignKey: 'registration_id',
  as: 'payments'
});

Payment.belongsTo(Registration, {
  foreignKey: 'registration_id',
  as: 'registration'
});

module.exports = {
  User,
  Category,
  Location,
  Event,
  Ticket,
  Registration,
  Payment
};
