import { useState, useEffect, FormEvent } from 'react';
import { Reservation } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Users, Clock, MessageSquare, Phone, Mail, User, CheckCircle2, AlertCircle, Trash2 } from 'lucide-react';

export default function ReservationSection() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [guests, setGuests] = useState('2');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('19:00');
  const [requests, setRequests] = useState('');

  // Manage booked reservations locally
  const [myReservations, setMyReservations] = useState<Reservation[]>([]);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Load existing reservations on mount
  useEffect(() => {
    const saved = localStorage.getItem('hawa_beirut_reservations');
    if (saved) {
      try {
        setMyReservations(JSON.parse(saved));
      } catch (err) {
        console.error(err);
      }
    }
  }, []);

  // Save reservations on update
  const saveToLocal = (newReservations: Reservation[]) => {
    localStorage.setItem('hawa_beirut_reservations', JSON.stringify(newReservations));
    setMyReservations(newReservations);
  };

  const handleBookTable = (e: FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    // Basic Validation
    if (!name.trim()) {
      setErrorMsg('Please enter your full name for the reservation.');
      return;
    }
    if (!phone.trim()) {
      setErrorMsg('Please enter your contact phone number.');
      return;
    }
    if (!email.trim()) {
      setErrorMsg('Please provide your email address for confirmations.');
      return;
    }
    if (!date) {
      setErrorMsg('Please select a date for your dining experience.');
      return;
    }

    const newBooking: Reservation = {
      id: `HB-${Math.floor(100000 + Math.random() * 900000)}`,
      name: name.trim(),
      phone: phone.trim(),
      email: email.trim(),
      guests: parseInt(guests),
      date: date,
      time: time,
      specialRequests: requests.trim() || undefined,
      status: 'confirmed',
      createdAt: new Date().toLocaleDateString()
    };

    const updated = [newBooking, ...myReservations];
    saveToLocal(updated);

    // Show success & reset fields
    setIsSuccess(true);
    setName('');
    setPhone('');
    setEmail('');
    setGuests('2');
    setDate('');
    setTime('19:00');
    setRequests('');

    setTimeout(() => {
      setIsSuccess(false);
    }, 6000);
  };

  const cancelReservation = (id: string) => {
    const remaining = myReservations.filter((res) => res.id !== id);
    saveToLocal(remaining);
  };

  return (
    <section id="reservations" className="py-24 bg-brand-charcoal text-white relative overflow-hidden">
      {/* Background aesthetics */}
      <div className="absolute inset-0 pattern-arabic opacity-[0.03] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-emerald/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-gold/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title elements */}
        <div className="text-center space-y-4 mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-bold tracking-widest text-brand-gold uppercase font-mono block"
          >
            Table Reservation System
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white"
          >
            Book Your <span className="italic font-serif text-brand-gold">Dining Sanctuary</span>
          </motion.h2>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-[1px] bg-brand-gold mx-auto mt-4"
          />
          <p className="max-w-xl mx-auto text-sm text-brand-cream/70">
            Secure your preferred seating on our beautiful jasmine terrace or inside our elegant dining halls. Instant booking confirmations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left / Booking Form Column (7 cols) */}
          <div className="lg:col-span-7 bg-white/5 border border-white/10 p-6 sm:p-10 rounded-3xl shadow-2xl backdrop-blur-md">
            
            <h3 className="font-serif text-2xl font-bold mb-6 text-brand-gold">
              Make A Reservation
            </h3>

            {/* Error notifications */}
            <AnimatePresence>
              {errorMsg && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mb-6 p-4 bg-red-900/40 border border-red-500/40 rounded-xl flex items-center space-x-2 text-red-200 text-xs"
                >
                  <AlertCircle size={16} />
                  <span>{errorMsg}</span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Success notifications */}
            <AnimatePresence>
              {isSuccess && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="mb-6 p-5 bg-brand-emerald/90 border border-brand-gold/30 rounded-2xl text-center space-y-3 shadow-xl"
                >
                  <div className="flex justify-center text-brand-gold">
                    <CheckCircle2 size={40} />
                  </div>
                  <h4 className="font-serif font-bold text-lg text-white">
                    Table Successfully Reserved!
                  </h4>
                  <p className="text-xs text-brand-cream leading-relaxed">
                    Your table at Hawa Beirut has been secured and confirmed. We have sent a detailed visual receipt to your email address. Feel free to preview or manage your active bookings on the side panel.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Form */}
            <form onSubmit={handleBookTable} className="space-y-6 text-brand-charcoal">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Full Name */}
                <div className="space-y-2">
                  <label className="block text-xs uppercase tracking-widest text-brand-cream/95 font-medium">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-cream/60" size={16} />
                    <input
                      type="text"
                      placeholder="e.g. Salim Maalouf"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 text-white rounded-xl border border-white/10 focus:outline-none focus:ring-2 focus:ring-brand-gold/40 focus:border-brand-gold text-sm"
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div className="space-y-2">
                  <label className="block text-xs uppercase tracking-widest text-brand-cream/95 font-medium">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-cream/60" size={16} />
                    <input
                      type="tel"
                      placeholder="e.g. +961 3 123 456"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 text-white rounded-xl border border-white/10 focus:outline-none focus:ring-2 focus:ring-brand-gold/40 focus:border-brand-gold text-sm"
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div className="space-y-2">
                  <label className="block text-xs uppercase tracking-widest text-brand-cream/95 font-medium">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-cream/60" size={16} />
                    <input
                      type="email"
                      placeholder="e.g. salim@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 text-white rounded-xl border border-white/10 focus:outline-none focus:ring-2 focus:ring-brand-gold/40 focus:border-brand-gold text-sm"
                    />
                  </div>
                </div>

                {/* Number of Guests */}
                <div className="space-y-2">
                  <label className="block text-xs uppercase tracking-widest text-brand-cream/95 font-medium">
                    Guests count
                  </label>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-cream/60" size={16} />
                    <select
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-brand-charcoal text-white rounded-xl border border-white/10 focus:outline-none focus:ring-2 focus:ring-brand-gold/40 focus:border-brand-gold text-sm"
                    >
                      <option value="1">1 Person</option>
                      <option value="2">2 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="6">6 Guests</option>
                      <option value="8">8 Guests</option>
                      <option value="10">10+ Guests (Group Event)</option>
                    </select>
                  </div>
                </div>

                {/* Date */}
                <div className="space-y-2">
                  <label className="block text-xs uppercase tracking-widest text-brand-cream/95 font-medium">
                    Date
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-cream/60" size={16} />
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 text-white rounded-xl border border-white/10 focus:outline-none focus:ring-2 focus:ring-brand-gold/40 focus:border-brand-gold text-sm"
                    />
                  </div>
                </div>

                {/* Time */}
                <div className="space-y-2">
                  <label className="block text-xs uppercase tracking-widest text-brand-cream/95 font-medium">
                    Time
                  </label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-cream/60" size={16} />
                    <select
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-brand-charcoal text-white rounded-xl border border-white/10 focus:outline-none focus:ring-2 focus:ring-brand-gold/40 focus:border-brand-gold text-sm"
                    >
                      <option value="09:00">09:00 AM (Breakfast)</option>
                      <option value="11:00">11:00 AM</option>
                      <option value="13:00">01:00 PM (Lunch)</option>
                      <option value="15:00">03:00 PM</option>
                      <option value="18:00">06:00 PM (Sunset Dinner)</option>
                      <option value="19:00">07:00 PM</option>
                      <option value="20:00">08:00 PM</option>
                      <option value="21:00">09:00 PM</option>
                    </select>
                  </div>
                </div>

              </div>

              {/* Special Requests */}
              <div className="space-y-2">
                <label className="block text-xs uppercase tracking-widest text-brand-cream/95 font-medium">
                  Special Requests / Notes
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 text-brand-cream/60" size={16} />
                  <textarea
                    rows={3}
                    placeholder="e.g. Birthday celebration, prefer jasmine courtyard seating, vegetarian accommodations..."
                    value={requests}
                    onChange={(e) => setRequests(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 text-white rounded-xl border border-white/10 focus:outline-none focus:ring-2 focus:ring-brand-gold/40 focus:border-brand-gold text-sm"
                  />
                </div>
              </div>

              {/* Reserve Button */}
              <button
                type="submit"
                className="w-full py-4 bg-brand-gold hover:bg-brand-gold/90 text-brand-emerald font-bold uppercase tracking-widest text-sm rounded-xl transition-all duration-300 transform active:scale-95 shadow-xl shadow-brand-gold/15 hover:shadow-brand-gold/30 cursor-pointer"
              >
                Reserve Table Now
              </button>

            </form>
          </div>

          {/* Right / Live Bookings Tracker Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-brand-emerald/90 border border-brand-gold/30 p-6 rounded-3xl space-y-4 shadow-xl">
              <h4 className="font-serif text-lg font-bold text-brand-gold flex items-center space-x-2">
                <span>📍 Opening Hours</span>
              </h4>
              <p className="text-xs text-brand-cream/90 leading-relaxed font-light">
                Our Ashrafieh courtyard restaurant and breezy terrace welcome you every day with authentic Levant flavor.
              </p>
              <div className="space-y-2 text-xs divide-y divide-white/10">
                <div className="flex justify-between py-1.5">
                  <span className="font-medium text-brand-gold">Cafe Counter & Pastry</span>
                  <span>Daily: 08:00 AM - 11:30 PM</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="font-medium text-brand-gold">Main Kitchen & Grill</span>
                  <span>Daily: 11:30 AM - 11:30 PM</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="font-medium text-brand-gold">Traditional Breakfast</span>
                  <span>Sat - Sun: 09:00 AM - 01:00 PM</span>
                </div>
              </div>
            </div>

            {/* Active Bookings list */}
            <div className="bg-white/5 border border-white/10 p-6 rounded-3xl space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-serif text-lg font-bold text-white">
                  Your Local Bookings
                </h4>
                <span className="text-xs font-mono bg-brand-gold/20 text-brand-gold px-2.5 py-1 rounded-full">
                  {myReservations.length} Active
                </span>
              </div>

              <div className="space-y-4 max-h-[280px] overflow-y-auto pr-1">
                {myReservations.length > 0 ? (
                  myReservations.map((res) => (
                    <div
                      key={res.id}
                      className="bg-white/5 border border-white/10 p-4 rounded-2xl flex items-center justify-between gap-3 text-xs"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <span className="font-bold text-brand-gold uppercase">{res.id}</span>
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                          <span className="text-[10px] text-green-400 capitalize">{res.status}</span>
                        </div>
                        <p className="text-white font-medium">{res.name}</p>
                        <p className="text-brand-cream/70 text-[10px]">
                          👥 {res.guests} guests • 📅 {res.date} at {res.time}
                        </p>
                      </div>

                      <button
                        onClick={() => cancelReservation(res.id)}
                        className="p-2.5 rounded-xl bg-red-900/20 hover:bg-red-900/50 text-red-300 hover:text-red-100 transition-colors cursor-pointer"
                        title="Cancel Reservation"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-10 text-brand-cream/40 space-y-2">
                    <p className="text-xs">No active bookings found in this device browser session.</p>
                    <p className="text-[10px] italic">Fill out the reservation form to see your real active sessions appear here!</p>
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
