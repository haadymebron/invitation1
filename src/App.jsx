import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Music, MapPin, Heart } from 'lucide-react';

const Hero = ({ onOpen, isOpened }) => {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-multiply"
        style={{ backgroundImage: `url('/assets/hero_bg_1789488873243.png')` }}
      />
      <div className="absolute inset-0 bg-texture opacity-30"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="relative z-10 flex flex-col items-center text-center px-4"
      >
        <p className="text-sm md:text-base font-inter tracking-[0.2em] text-primary mb-6 uppercase">
          With the blessings of our families
        </p>
        <h2 className="text-lg md:text-xl font-playfair italic text-text-muted mb-4">
          We are getting married
        </h2>
        
        <h1 className="text-4xl md:text-7xl lg:text-8xl font-great-vibes text-primary my-6 leading-tight">
          Harsha KP <span className="font-cinzel text-2xl md:text-5xl mx-4 text-secondary">&</span> Farhan
        </h1>
        
        <div className="gold-divider my-8 max-w-xs mx-auto"></div>
        
        <p className="text-lg md:text-xl font-cinzel text-primary tracking-widest mb-2">
          27th September 2026
        </p>
        <p className="text-sm md:text-base font-inter text-text-muted uppercase tracking-wider mb-10">
          Kerala, India
        </p>
        
        {!isOpened && (
          <button 
            onClick={onOpen}
            className="px-8 py-3 border border-secondary text-primary font-cinzel tracking-widest hover:bg-primary hover:text-surface transition-all duration-500 rounded-sm hover-shimmer shadow-lg"
          >
            Open Invitation
          </button>
        )}
      </motion.div>
    </section>
  );
};

const Couple = () => {
  return (
    <section id="couple-section" className="py-24 px-4 bg-surface relative">
      <div className="absolute inset-0 bg-texture opacity-10 pointer-events-none"></div>
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-cinzel text-primary mb-4">The Couple</h2>
          <p className="font-playfair italic text-text-muted text-lg">Two hearts, two stories, one beautiful beginning.</p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div className="w-64 h-80 md:w-80 md:h-[28rem] relative mb-6 p-2 border border-secondary rounded-t-full">
              <img 
                src="/assets/portrait_bride_1789488897215.png" 
                alt="Aparna" 
                className="w-full h-full object-cover rounded-t-full shadow-lg"
              />
            </div>
            <h3 className="text-3xl font-great-vibes text-primary mb-2">Harsha KP</h3>
            <p className="font-inter uppercase tracking-widest text-sm text-text-muted">The Bride</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div className="w-64 h-80 md:w-80 md:h-[28rem] relative mb-6 p-2 border border-secondary rounded-t-full">
              <img 
                src="/assets/portrait_groom_1789488916538.png" 
                alt="Sarath" 
                className="w-full h-full object-cover rounded-t-full shadow-lg"
              />
            </div>
            <h3 className="text-3xl font-great-vibes text-primary mb-2">Farhan</h3>
            <p className="font-inter uppercase tracking-widest text-sm text-text-muted">The Groom</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const WelcomeMessage = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-texture opacity-20"></div>
      <div className="relative z-10 max-w-3xl mx-auto text-center space-y-12">
        <p className="font-cinzel text-sm md:text-base tracking-[0.4em] text-primary uppercase">
          In the Name of the Almighty
        </p>
        <div className="gold-divider mx-auto max-w-[100px]"></div>
        <p className="font-inter text-lg md:text-2xl text-text-muted leading-[2.2] md:leading-[2.5] px-6 md:px-12 max-w-2xl mx-auto">
          The families cordially invite you and your family to attend the wedding ceremony. We request your gracious presence and blessings on this joyous occasion.
        </p>
      </div>
    </section>
  );
};

const FormalInvite = () => {
  return (
    <section className="py-20 md:py-24 px-4 bg-background relative text-center" id="formal-invite">
      <div className="absolute inset-0 bg-texture opacity-20 pointer-events-none"></div>
      <div className="max-w-4xl mx-auto gold-border-double p-6 md:p-16 shadow-2xl relative bg-surface z-10">
        {/* Decorative corner borders */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-secondary m-4"></div>
        <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-secondary m-4"></div>
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-secondary m-4"></div>
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-secondary m-4"></div>
        
        <div className="flex flex-col items-center justify-center gap-8 md:gap-4 mb-12 mt-8">
          <div className="text-center">
            <h3 className="text-4xl md:text-5xl font-great-vibes text-primary mb-3">Harsha KP</h3>
            <p className="font-cinzel text-xs tracking-widest text-text-muted mb-2 uppercase">Daughter Of</p>
            <p className="font-inter font-medium text-sm text-primary mb-1">Mr. Abdul Latheef KP & Mrs. Sameera</p>
            <p className="font-inter text-xs text-text-muted italic mt-1">KavungaParambil(H), Mavumkunnu, Tirur</p>
          </div>
        </div>
        
        <div className="flex flex-col items-center border-t border-secondary/30 pt-8 pb-2 gap-6">
          <div className="text-center">
            <p className="font-cinzel text-xs tracking-[0.2em] text-primary uppercase mb-2">Date & Time</p>
            <p className="font-inter font-medium text-sm mb-1 uppercase">Sunday, 27 September 2026</p>
            <p className="font-inter text-xs text-text-muted">Guests Assemble: 11:00 AM</p>
          </div>
          
          <div className="text-center">
            <p className="font-cinzel text-xs tracking-[0.2em] text-primary uppercase mb-2">Venue</p>
            <p className="font-inter font-medium text-sm uppercase">KR Auditorium</p>
            <p className="font-inter text-xs text-text-muted uppercase mt-1">BP Angadi</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('September 27, 2026 10:00:00').getTime();
    
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-primary text-surface relative overflow-hidden">
      <div className="absolute inset-0 bg-texture opacity-10"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-cinzel mb-12 text-surface">Counting Down to Forever</h2>
        
        <div className="grid grid-cols-2 md:flex justify-center gap-8 md:gap-12 max-w-sm md:max-w-full mx-auto">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="flex flex-col items-center">
              <span className="text-4xl md:text-6xl font-cinzel text-secondary mb-2">{value}</span>
              <span className="text-xs md:text-sm font-inter uppercase tracking-[0.2em]">{unit}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Events = () => {
  return (
    <section className="py-24 px-4 bg-background relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-cinzel text-primary mb-4">The Celebration</h2>
          <div className="gold-divider max-w-xs mx-auto"></div>
        </div>
        
        <div className="max-w-md mx-auto px-2">
          <div className="p-8 md:p-12 border border-secondary bg-surface relative text-center flex flex-col items-center group hover:-translate-y-2 transition-transform duration-500 shadow-xl hover:shadow-2xl">
            <h3 className="text-2xl font-cinzel text-primary mb-4">Wedding Ceremony</h3>
            <div className="space-y-3 font-inter text-sm mb-8">
              <p className="text-primary font-medium tracking-widest uppercase">27 September 2026</p>
              <p className="text-text-muted">11:00 AM Onwards</p>
              <p className="text-text-muted">
                KR AUDITORIUM<br />
                BP ANGADI
              </p>
            </div>
            <a 
              href="https://maps.app.goo.gl/EKVELjqQcZakQo7T8" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-2 border border-secondary text-primary font-cinzel text-sm tracking-wider hover:bg-primary hover:text-surface transition-colors duration-300"
            >
              <MapPin size={16} />
              View Location
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const RSVP = () => {
  return (
    <section className="py-24 px-4 bg-surface">
      <div className="max-w-2xl mx-auto text-center border border-secondary p-8 md:p-16 shadow-2xl relative">
        <div className="absolute inset-0 bg-texture opacity-5"></div>
        <div className="relative z-10">
          <Heart className="mx-auto text-secondary mb-6" size={32} strokeWidth={1} />
          <h2 className="text-3xl font-cinzel text-primary mb-4">We would love to celebrate with you</h2>
          <p className="font-inter text-text-muted mb-10 text-sm">Please let us know if you can make it to our special day.</p>
          
          <form className="space-y-6 text-left" onSubmit={(e) => { e.preventDefault(); alert('Thank you for celebrating this beautiful moment with us.'); }}>
            <div>
              <input type="text" placeholder="Full Name" required className="w-full p-4 bg-transparent border-b border-primary/30 font-inter focus:outline-none focus:border-primary transition-colors placeholder:text-text-muted/70" />
            </div>
            <div>
              <input type="number" placeholder="Number of Guests" min="1" max="10" className="w-full p-4 bg-transparent border-b border-primary/30 font-inter focus:outline-none focus:border-primary transition-colors placeholder:text-text-muted/70" />
            </div>
            <div className="flex gap-4 font-inter text-sm pt-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="attend" value="yes" className="accent-primary" defaultChecked />
                <span>Yes, with joy</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="attend" value="no" className="accent-primary" />
                <span>Sorry, can't make it</span>
              </label>
            </div>
            <div>
              <textarea placeholder="Leave a wish..." rows="3" className="w-full p-4 bg-transparent border-b border-primary/30 font-inter focus:outline-none focus:border-primary transition-colors placeholder:text-text-muted/70 mt-4"></textarea>
            </div>
            
            <button type="submit" className="w-full py-4 mt-8 bg-primary text-surface font-cinzel tracking-widest hover:bg-primary-light transition-colors duration-300">
              RSVP
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-primary text-surface text-center py-12 relative">
    <h2 className="font-great-vibes text-4xl mb-4">And so, our forever begins...</h2>
    <p className="font-inter text-xs tracking-widest opacity-60">Harsha KP & Farhan • 2026</p>
  </footer>
);

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  const [isOpened, setIsOpened] = useState(false);

  const handleOpen = () => {
    setIsOpened(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background font-inter selection:bg-secondary/30">
      <AnimatePresence>
        {showSplash && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-primary"
          >
            <div className="absolute inset-0 bg-texture opacity-20"></div>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 2 }}
              className="text-center relative z-10"
            >
              <h2 className="text-secondary font-cinzel text-xl md:text-2xl tracking-[0.3em] uppercase mb-6">
                The Beginning of Forever
              </h2>
              <h1 className="text-4xl md:text-7xl font-great-vibes text-surface">
                Harsha KP & Farhan
              </h1>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>


      {!showSplash && (
        <AnimatePresence mode="wait">
          {!isOpened ? (
            <motion.div
              key="hero"
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8 }}
            >
              <Hero onOpen={handleOpen} isOpened={isOpened} />
            </motion.div>
          ) : (
            <motion.div
              key="invitation"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <WelcomeMessage />
              <FormalInvite />
              <Countdown />
              <Events />
              <Footer />
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
}

export default App;
