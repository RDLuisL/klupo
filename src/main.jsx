import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Heart, PawPrint, Stethoscope, Scissors, House, ShoppingBasket, Menu, X, ArrowRight, CheckCircle2, MapPin, Clock3, Phone, Instagram, Facebook, MessageCircle, ShieldCheck, Sparkles, ChevronDown } from 'lucide-react';
import './styles.css';

// CONFIGURACIÓN: reemplazar con los datos reales antes de publicar.
const CONFIG = {
  whatsapp: '', // Ejemplo: '525512345678' (sin + ni espacios)
  instagram: '',
  facebook: '',
  address: 'Ciudad de México · Ubicación por confirmar',
  hours: 'Horario por confirmar',
};
const services = [
  { icon: House, title: 'Pensión y guardería', detail: 'Un espacio pensado para acompañar, cuidar y consentir a tu mejor amigo.', tag: 'Cuidado y compañía' },
  { icon: Scissors, title: 'Grooming', detail: 'Baño, estética y cuidados para perros y gatos, con atención personalizada.', tag: 'Belleza y bienestar' },
  { icon: Stethoscope, title: 'Veterinaria', detail: 'Atención y orientación profesional para cuidar su salud en cada etapa.', tag: 'Salud y prevención' },
  { icon: ShoppingBasket, title: 'Tienda de mascotas', detail: 'Productos y accesorios seleccionados para la vida diaria de tu mascota.', tag: 'Todo en un lugar' },
];
const faqs = [
  ['¿Cómo puedo solicitar información o reservar?', 'Puedes escribirnos por WhatsApp mediante los botones de contacto. Confirmaremos disponibilidad, horarios y condiciones de cada servicio.'],
  ['¿Atienden perros y gatos?', 'Nuestra propuesta incluye servicios para perros y gatos. La disponibilidad específica se confirmará al abrir cada área.'],
  ['¿Dónde se encuentran?', 'El proyecto está pensado para Ciudad de México. Publicaremos la dirección exacta y los horarios cuando estén confirmados.'],
];
function whatsappLink(message) {
  if (!CONFIG.whatsapp) return '#contacto';
  return `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(message)}`;
}
function Logo({ light = false }) {
  return <a className={`logo ${light ? 'logo-light' : ''}`} href="#inicio" aria-label="Klupho Pet Vet, ir al inicio"><span className="logo-symbol"><Heart size={31} strokeWidth={2.8}/><PawPrint className="logo-paw" size={15}/></span><span className="logo-words"><strong>Klupho</strong><small>Pet Vet</small></span></a>;
}
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const closeMenu = () => setMenuOpen(false);
  return <>
    <header className="site-header"><div className="container nav"><Logo/><nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Navegación principal"><a onClick={closeMenu} href="#inicio">Inicio</a><a onClick={closeMenu} href="#servicios">Servicios</a><a onClick={closeMenu} href="#nosotros">Nosotros</a><a onClick={closeMenu} href="#preguntas">Preguntas</a><a onClick={closeMenu} href="#contacto">Contacto</a><a className="button button-small nav-cta" onClick={closeMenu} href={whatsappLink('Hola, quiero información sobre Klupho Pet Vet.')}><MessageCircle size={17}/> Escríbenos</a></nav><button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={menuOpen}>{menuOpen ? <X/> : <Menu/>}</button></div></header>
    <main>
      <section id="inicio" className="hero"><div className="container hero-grid"><div className="hero-copy"><span className="eyebrow"><PawPrint size={16}/> BIENVENIDOS A KLUPHO PET VET</span><h1>Su felicidad es <em>nuestro corazón.</em></h1><p>Un lugar para consentir, cuidar y acompañar a quienes llenan tu vida de amor. Veterinaria, grooming, guardería y mucho más.</p><div className="hero-actions"><a className="button" href={whatsappLink('Hola, quiero conocer los servicios de Klupho Pet Vet.')}><MessageCircle size={19}/> Quiero información</a><a className="button button-outline" href="#servicios">Explorar servicios <ArrowRight size={18}/></a></div><div className="hero-note"><span className="note-icon"><ShieldCheck size={22}/></span><span>Atención con cariño, respeto y compromiso</span></div></div><div className="hero-visual"><div className="hero-visual-circle"></div><img src="/klupho-logo-original.png" alt="Logo de Klupho Pet Vet con perro, gato y corazón"/><span className="float-label float-label-one"><Heart size={16} fill="currentColor"/> Amor por ellos</span><span className="float-label float-label-two"><Sparkles size={16}/> Bienestar integral</span></div></div><div className="hero-wave" aria-hidden="true"></div></section>
      <section id="servicios" className="section services"><div className="container"><div className="section-heading"><span className="overline">LO QUE HACEMOS</span><h2>Todo lo que necesitan, <span>en un solo lugar</span></h2><p>Servicios pensados para que cada mascota se sienta querida, segura y bien cuidada.</p></div><div className="service-grid">{services.map(({icon:Icon,title,detail,tag},i)=><article className="service-card" key={title}><div className={`service-icon tone-${i}`}><Icon size={30} strokeWidth={1.9}/></div><span className="service-tag">{tag}</span><h3>{title}</h3><p>{detail}</p><a href={whatsappLink(`Hola, quiero información sobre ${title} en Klupho Pet Vet.`)}>Consultar servicio <ArrowRight size={17}/></a></article>)}</div></div></section>
      <section id="nosotros" className="section about"><div className="container about-grid"><div className="about-art"><div className="about-card"><PawPrint size={84} strokeWidth={1.3}/><Heart size={50} fill="currentColor"/><span>Porque son familia.</span></div><div className="about-bubble">Cuidado con amor <Heart size={17} fill="currentColor"/></div></div><div><span className="overline">NUESTRA ESENCIA</span><h2>Más que mascotas, <span>son parte de la familia.</span></h2><p>En Klupho Pet Vet creemos que cada compañero merece atención cercana, trato respetuoso y momentos felices.</p><div className="feature"><CheckCircle2/><div><strong>Trato cálido y personalizado</strong><p>Cada mascota tiene una personalidad y necesidades únicas.</p></div></div><div className="feature"><CheckCircle2/><div><strong>Bienestar en cada servicio</strong><p>Queremos unir salud, cuidado y diversión en una misma experiencia.</p></div></div><div className="feature"><CheckCircle2/><div><strong>Una comunidad que ama a los animales</strong><p>Un espacio para compartir información, consejos y buenos momentos.</p></div></div></div></div></section>
      <section className="section callout"><div className="container callout-inner"><div><span className="overline">HABLEMOS DE TU MASCOTA</span><h2>El primer paso para cuidarlos mejor empieza aquí.</h2><p>Cuéntanos qué necesita tu compañero y te orientaremos.</p></div><a className="button button-yellow" href={whatsappLink('Hola Klupho Pet Vet, me gustaría recibir orientación.')}><MessageCircle size={20}/> Contactar ahora</a></div></section>
      <section id="preguntas" className="section faq"><div className="container faq-grid"><div><span className="overline">RESOLVEMOS TUS DUDAS</span><h2>Preguntas <span>frecuentes</span></h2><p>Información útil antes de visitar o reservar.</p></div><div className="faq-items">{faqs.map(([q,a],i)=><div className="faq-item" key={q}><button aria-expanded={openFaq===i} onClick={()=>setOpenFaq(openFaq===i ? -1 : i)}>{q}<ChevronDown size={19} className={openFaq===i ? 'rotated' : ''}/></button>{openFaq===i && <p>{a}</p>}</div>)}</div></div></section>
      <section id="contacto" className="section contact"><div className="container"><div className="section-heading"><span className="overline">ESTAMOS PARA AYUDARTE</span><h2>¡Hablemos de tu <span>mejor amigo!</span></h2><p>Pronto compartiremos todos nuestros datos de atención. Mientras tanto, puedes preparar tu consulta.</p></div><div className="contact-grid"><div className="contact-card"><MapPin/><h3>Ubicación</h3><p>{CONFIG.address}</p></div><div className="contact-card"><Clock3/><h3>Horarios</h3><p>{CONFIG.hours}</p></div><div className="contact-card"><Phone/><h3>Contacto</h3><p>{CONFIG.whatsapp ? `WhatsApp: +${CONFIG.whatsapp}` : 'WhatsApp pendiente de configurar'}</p></div></div><a className="button contact-button" href={whatsappLink('Hola, quisiera conocer más sobre Klupho Pet Vet.')}><MessageCircle size={20}/> {CONFIG.whatsapp ? 'Enviar mensaje por WhatsApp' : 'Consultar información'}</a></div></section>
    </main>
    <footer className="footer"><div className="container footer-top"><div><Logo light/><p>Amor, salud y bienestar para quienes más quieres.</p></div><div><strong>Explora</strong><a href="#servicios">Servicios</a><a href="#nosotros">Nuestra esencia</a><a href="#preguntas">Preguntas frecuentes</a></div><div><strong>Conecta</strong><span>Ciudad de México</span><div className="socials">{CONFIG.instagram && <a href={CONFIG.instagram} aria-label="Instagram"><Instagram/></a>}{CONFIG.facebook && <a href={CONFIG.facebook} aria-label="Facebook"><Facebook/></a>}<a href={whatsappLink('Hola, Klupho Pet Vet.')} aria-label="Contacto"><MessageCircle/></a></div></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Klupho Pet Vet. Todos los derechos reservados.</span><span>Hecho con <Heart size={13} fill="currentColor"/> para ellos</span></div></footer>
    {CONFIG.whatsapp && <a className="floating-whatsapp" href={whatsappLink('Hola, Klupho Pet Vet.')} aria-label="Escribir por WhatsApp"><MessageCircle size={26}/></a>}
  </>;
}
createRoot(document.getElementById('root')).render(<App/>);
