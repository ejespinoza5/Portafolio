import React, { useState, useEffect, useCallback } from 'react';
import { Mail, Phone, Github, Linkedin, Instagram, Facebook, MapPin, Calendar, Code, Database, Briefcase, GraduationCap, Languages, Download, Menu, X, Globe, ExternalLink, Image as ImageIcon, ChevronLeft, ChevronRight, Award, ArrowUp } from 'lucide-react';
import { motion, AnimatePresence, animate } from 'framer-motion';
import emailjs from '@emailjs/browser';

type Language = 'es' | 'en' | 'pt';

const translations = {
  es: {
    name: 'Edgar Espinoza',
    nav: {
      home: 'Inicio',
      about: 'Sobre Mí',
      experience: 'Experiencia',
      projects: 'Proyectos',
      skills: 'Habilidades',
      technicalSkills: 'Habilidades Técnicas',
      softSkills: 'Habilidades Blandas',
      contact: 'Contacto'
    },
    hero: {
      title: 'Edgar Josué',
      subtitle: 'Espinoza Zambrano',
      description: 'Ingeniero en Tecnologías de la Información especializado en desarrollo de software y automatización de procesos',
      cta: '¡Contáctame!',
      downloadCV: 'Descargar CV'
    },
    about: {
      title: 'Sobre Mí',
      text1: 'Graduado en Ingeniería en Tecnologías de la Información con experiencia práctica en desarrollo de software y automatización de procesos. Mi pasión por la tecnología me ha llevado a especializarme en desarrollo web full-stack y automatización empresarial.',
      text2: 'Durante mis contratos profesionales, logré reducir en un 50% el tiempo de elaboración de informes mediante la implementación de macros en Excel, demostrando mi capacidad para identificar oportunidades de mejora y aplicar soluciones tecnológicas efectivas.',
      education: 'Educación',
      languages: 'Idiomas'
    },
    softSkills: {
      title: 'Habilidades Blandas',
      skills: [
        'Trabajo en equipo',
        'Adaptabilidad',
        'Aprendizaje continuo',
        'Flexibilidad'
      ]
    },
    certificates: {
      title: 'Certificados',
      subtitle: 'Formación continua y especialización'
    },
    contact: {
      title: 'Contáctame',
      subtitle: '¡Trabajemos juntos!',
      description: 'Estoy disponible para nuevas oportunidades laborales y proyectos interesantes. Si tienes una propuesta o simplemente quieres conversar sobre tecnología, no dudes en contactarme.',
      social: 'Sígueme en redes sociales',
      whatsapp: 'Contactar por WhatsApp',
      form: {
        name: 'Nombre completo',
        email: 'Correo electrónico',
        subject: 'Asunto',
        message: 'Mensaje',
        send: 'Enviar Mensaje'
      }
    }
  },
  en: {
    name: 'Edgar Espinoza',
    nav: {
      home: 'Home',
      about: 'About Me',
      experience: 'Experience',
      projects: 'Projects',
      skills: 'Skills',
      technicalSkills: 'Technical Skills',
      softSkills: 'Soft Skills',
      contact: 'Contact'
    },
    hero: {
      title: 'Edgar Josué',
      subtitle: 'Espinoza Zambrano',
      description: 'Information Technology Engineer specialized in software development and process automation',
      cta: 'Contact Me!',
      downloadCV: 'Download CV'
    },
    about: {
      title: 'About Me',
      text1: 'I am a recent graduate in Information Technology Engineering with practical experience in software development and process automation. My passion for technology has led me to specialize in full-stack web development and business automation.',
      text2: 'During my professional internships, I managed to reduce report preparation time by 50% through the implementation of Excel macros, demonstrating my ability to identify improvement opportunities and apply effective technological solutions.',
      education: 'Education',
      languages: 'Languages'
    },
    softSkills: {
      title: 'Soft Skills',
      skills: [
        'Teamwork',
        'Adaptability',
        'Continuous learning',
        'Flexibility'
      ]
    },
    certificates: {
      title: 'Certificates',
      subtitle: 'Continuous training and specialization'
    },
    contact: {
      title: 'Contact Me',
      subtitle: 'Let\'s work together!',
      description: 'I am available for new job opportunities and interesting projects. If you have a proposal or simply want to talk about technology, feel free to contact me.',
      social: 'Follow me on social media',
      whatsapp: 'Contact via WhatsApp',
      form: {
        name: 'Full name',
        email: 'Email address',
        subject: 'Subject',
        message: 'Message',
        send: 'Send Message'
      }
    }
  },
  pt: {
    name: 'Edgar Espinoza',
    nav: {
      home: 'Início',
      about: 'Sobre Mim',
      experience: 'Experiência',
      projects: 'Projetos',
      skills: 'Habilidades',
      technicalSkills: 'Habilidades Técnicas',
      softSkills: 'Habilidades Interpessoais',
      contact: 'Contato'
    },
    hero: {
      title: 'Edgar Josué',
      subtitle: 'Espinoza Zambrano',
      description: 'Engenheiro em Tecnologias da Informação especializado em desenvolvimento de software e automação de processos',
      cta: 'Entre em Contato!',
      downloadCV: 'Baixar CV'
    },
    about: {
      title: 'Sobre Mim',
      text1: 'Sou um recém-formado em Engenharia em Tecnologias da Informação com experiência prática em desenvolvimento de software e automação de processos. Minha paixão pela tecnologia me levou a me especializar em desenvolvimento web full-stack e automação empresarial.',
      text2: 'Durante meus estágios profissionais, consegui reduzir em 50% o tempo de elaboração de relatórios através da implementação de macros no Excel, demonstrando minha capacidade de identificar oportunidades de melhoria e aplicar soluções tecnológicas eficazes.',
      education: 'Educação',
      languages: 'Idiomas'
    },
    softSkills: {
      title: 'Habilidades Interpessoais',
      skills: [
        'Trabalho em equipe',
        'Adaptabilidade',
        'Aprendizagem contínua',
        'Flexibilidade'
      ]
    },
    certificates: {
      title: 'Certificados',
      subtitle: 'Formação contínua e especialização'
    },
    contact: {
      title: 'Entre em Contato',
      subtitle: 'Vamos trabalhar juntos!',
      description: 'Estou disponível para novas oportunidades de trabalho e projetos interessantes. Se você tem uma proposta ou simplesmente quer conversar sobre tecnologia, não hesite em me contatar.',
      social: 'Siga-me nas redes sociais',
      whatsapp: 'Contatar via WhatsApp',
      form: {
        name: 'Nome completo',
        email: 'Endereço de email',
        subject: 'Assunto',
        message: 'Mensagem',
        send: 'Enviar Mensagem'
      }
    }
  }
};

export default function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Theme: dark mode toggle using Tailwind 'dark' class with localStorage persistence
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('darkMode');
      return saved !== null ? JSON.parse(saved) : true;
    }
    return true;
  });

  // Language state
  const [currentLang, setCurrentLang] = useState<Language>('es');
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState<boolean>(false);

  // Skills dropdown state
  const [isSkillsDropdownOpen, setIsSkillsDropdownOpen] = useState<boolean>(false);

  // Mobile menu state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  // Email sending state
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Modal and gallery state
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  // Carousel state
  const [currentCertificateIndex, setCurrentCertificateIndex] = useState<number>(0);

  // Scroll to top state
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);


  const t = translations[currentLang];

  // Certificates array
  const certificates = [
    { src: '/certificados/Administrador de bases de datos.jpg', title: 'Administrador de Bases de Datos' },
    { src: '/certificados/Lógica de programación.jpg', title: 'Lógica de Programación' }
  ];

  // Project images array
  const projectImages = [
    { src: '/gestion horarios evidencias/Login.png', title: 'Sistema de Login' },
    { src: '/gestion horarios evidencias/Inicio.png', title: 'Página de Inicio' },
    { src: '/gestion horarios evidencias/GestionHorarios.png', title: 'Gestión de Horarios' },
    { src: '/gestion horarios evidencias/GestionAulas.png', title: 'Gestión de Aulas' },
    { src: '/gestion horarios evidencias/GestionCoordinadores.png', title: 'Gestión de Coordinadores' },
    { src: '/gestion horarios evidencias/HorarioDocente.png', title: 'Horario de Docentes' },
    { src: '/gestion horarios evidencias/HorarioEstudiante.png', title: 'Horario de Estudiantes' },
    { src: '/gestion horarios evidencias/VerHorarios.png', title: 'Visualización de Horarios' },
    { src: '/gestion horarios evidencias/VerHorariosDocentes.png', title: 'Horarios de Docentes' },
    { src: '/gestion horarios evidencias/InformacionClase.png', title: 'Información de Clases' },
    { src: '/gestion horarios evidencias/GeneracionReportes.png', title: 'Generación de Reportes' },
    { src: '/gestion horarios evidencias/ReporteHorarios.png', title: 'Reporte de Horarios' },
    { src: '/gestion horarios evidencias/ConfiguracionReportes.png', title: 'Configuración de Reportes' }
  ];

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    // Save to localStorage
    localStorage.setItem('darkMode', JSON.stringify(isDark));
  }, [isDark]);

  // Inicializar EmailJS
  useEffect(() => {
    emailjs.init('Z-btbuw9fHjivOh6o'); // Tu Public Key
  }, []);

  // Auto-carousel for certificates
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCertificateIndex((prev) => (prev + 1) % certificates.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [certificates.length]);

  // Scroll to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      const mobileMenuButton = document.querySelector('[data-mobile-menu-button]');
      const mobileMenu = document.querySelector('[data-mobile-menu]');
      
      if (isMobileMenuOpen && 
          !mobileMenu?.contains(target) && 
          !mobileMenuButton?.contains(target)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isMobileMenuOpen]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      
      if (isLangDropdownOpen) {
        const langDropdown = target.closest('[data-lang-dropdown]');
        if (!langDropdown) {
          setIsLangDropdownOpen(false);
        }
      }
      
      if (isSkillsDropdownOpen) {
        const skillsDropdown = target.closest('[data-skills-dropdown]');
        if (!skillsDropdown) {
          setIsSkillsDropdownOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isLangDropdownOpen, isSkillsDropdownOpen]);


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Edgar Espinoza',
        to_email: 'tvjosue090@gmail.com', // Tu email donde recibirás los mensajes
      };

      console.log('Enviando con parámetros:', templateParams);

      const result = await emailjs.send(
        'service_quhyniw',    // Service ID
        'template_qsd55m6',   // Template ID
        templateParams
      );

      console.log('Email enviado exitosamente:', result);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });

    } catch (error) {
      console.error('Error detallado:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    // Versión con Framer Motion - Animación más suave y controlada
    const startY = window.scrollY;
    const duration = Math.min(startY / 3000, 1.5); // Duración basada en distancia, máximo 1.5s
    
    const controls = animate(startY, 0, {
      duration: duration,
      ease: "easeOut",
      onUpdate: (value) => {
        window.scrollTo(0, value);
      },
    });
    
    // El usuario puede cancelar la animación haciendo scroll
    const handleUserScroll = () => {
      controls.stop();
      window.removeEventListener('wheel', handleUserScroll);
      window.removeEventListener('touchmove', handleUserScroll);
    };
    
    window.addEventListener('wheel', handleUserScroll, { passive: true });
    window.addEventListener('touchmove', handleUserScroll, { passive: true });
  };

  // Modal functions
  const openModal = (imageIndex: number = 0) => {
    setCurrentImageIndex(imageIndex);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent background scroll
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset'; // Restore scroll
  };

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev + 1) % projectImages.length);
  }, [projectImages.length]);

  const prevImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev - 1 + projectImages.length) % projectImages.length);
  }, [projectImages.length]);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal();
      } else if (event.key === 'ArrowRight') {
        nextImage();
      } else if (event.key === 'ArrowLeft') {
        prevImage();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen, nextImage, prevImage]);

  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 dark:bg-black/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 z-[100]">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img
                src={isDark ? "/Letra blanca copia.png" : "/Letra negra copia.png"}
                alt="Edgar Espinoza Logo"
                className="h-12 w-auto transition-opacity duration-300"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection('inicio')}
                className="hover:opacity-70 transition-colors"
              >
                {t.nav.home}
              </button>
              <button
                onClick={() => scrollToSection('sobre-mi')}
                className="hover:opacity-70 transition-colors"
              >
                {t.nav.about}
              </button>
              <button
                onClick={() => scrollToSection('experiencia')}
                className="hover:opacity-70 transition-colors"
              >
                {t.nav.experience}
              </button>
              <button
                onClick={() => scrollToSection('proyectos')}
                className="hover:opacity-70 transition-colors"
              >
                {t.nav.projects}
              </button>

              {/* Skills Dropdown */}
              <div className="relative" data-skills-dropdown>
                <button
                  onClick={() => setIsSkillsDropdownOpen(!isSkillsDropdownOpen)}
                  className="hover:opacity-70 transition-colors flex items-center gap-1"
                >
                  {t.nav.skills}
                  <svg className={`w-4 h-4 transition-transform ${isSkillsDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <AnimatePresence>
                  {isSkillsDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg z-50"
                    >
                      <button
                        onClick={() => {
                          scrollToSection('habilidades-tecnicas');
                          setIsSkillsDropdownOpen(false);
                        }}
                        className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                      >
                        {t.nav.technicalSkills}
                      </button>
                      <button
                        onClick={() => {
                          scrollToSection('habilidades-blandas');
                          setIsSkillsDropdownOpen(false);
                        }}
                        className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                      >
                        {t.nav.softSkills}
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <button
                onClick={() => scrollToSection('contacto')}
                className="hover:opacity-70 transition-colors"
              >
                {t.nav.contact}
              </button>
            </div>

            {/* Desktop Controls */}
            <div className="hidden md:flex items-center gap-2">
              {/* Download CV Button */}
              <a
                href="/Edgar Josue Espinoza Zambrano CV.pdf"
                download
                className="inline-flex items-center gap-2 px-3 py-2 h-10 rounded-md border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
                title={t.hero.downloadCV}
              >
                <Download className="w-4 h-4" />
                <span className="hidden lg:inline">{t.hero.downloadCV}</span>
              </a>

              {/* Language Dropdown */}
              <div className="relative" data-lang-dropdown>
                <button
                  onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                  className="inline-flex items-center gap-2 px-3 py-2 h-10 rounded-md border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
                >
                  <Globe className="w-4 h-4" />
                  <span className="text-base leading-none">
                    {currentLang === 'es' ? '🇪🇸' : currentLang === 'en' ? '🇺🇸' : '🇧🇷'}
                  </span>
                </button>

                <AnimatePresence>
                  {isLangDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg py-1"
                    >
                      <button
                        onClick={() => {
                          setCurrentLang('es');
                          setIsLangDropdownOpen(false);
                        }}
                        className={`w-full flex items-center gap-3 px-3 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${currentLang === 'es' ? 'bg-gray-100 dark:bg-gray-800' : ''}`}
                      >
                        <span className="text-lg">🇪🇸</span>
                        <span>Español</span>
                      </button>
                      <button
                        onClick={() => {
                          setCurrentLang('en');
                          setIsLangDropdownOpen(false);
                        }}
                        className={`w-full flex items-center gap-3 px-3 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${currentLang === 'en' ? 'bg-gray-100 dark:bg-gray-800' : ''}`}
                      >
                        <span className="text-lg">🇺🇸</span>
                        <span>English</span>
                      </button>
                      <button
                        onClick={() => {
                          setCurrentLang('pt');
                          setIsLangDropdownOpen(false);
                        }}
                        className={`w-full flex items-center gap-3 px-3 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${currentLang === 'pt' ? 'bg-gray-100 dark:bg-gray-800' : ''}`}
                      >
                        <span className="text-lg">🇧🇷</span>
                        <span>Português</span>
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Animated Theme Toggle */}
              <button
                onClick={() => setIsDark(d => !d)}
                className="relative inline-flex items-center w-16 h-8 rounded-full border-2 border-black dark:border-white bg-white dark:bg-black transition-colors duration-300"
                aria-label="Alternar tema"
              >
                <motion.div
                  className="absolute w-6 h-6 bg-black dark:bg-white rounded-full shadow-md flex items-center justify-center"
                  animate={{
                    x: isDark ? 32 : 4,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 30
                  }}
                >
                  <motion.div
                    animate={{ rotate: isDark ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {isDark ? (
                      <svg className="w-3 h-3" fill="black" viewBox="0 0 24 24">
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                      </svg>
                    ) : (
                      <svg className="w-3 h-3" fill="white" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="5" />
                        <path d="m12 1-1 4h2l-1-4zM12 19l-1 4h2l-1-4zM4.22 4.22l2.83 2.83L8.46 5.64 4.22 4.22zM15.54 18.36l2.83 2.83 1.41-1.41-2.83-2.83-1.41 1.41zM1 11v2h4v-2H1zM19 11v2h4v-2h-4zM4.22 19.78l1.41-1.41 2.83 2.83-1.41 1.41-2.83-2.83zM18.36 8.46l1.41-1.41-2.83-2.83-1.41 1.41 2.83 2.83z" />
                      </svg>
                    )}
                  </motion.div>
                </motion.div>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              data-mobile-menu-button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-md border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              data-mobile-menu
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 border-t border-gray-200 dark:border-gray-800 pt-4"
            >
              <div className="space-y-4">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    scrollToSection('inicio');
                    setIsMobileMenuOpen(false);
                  }}
                  className="block w-full text-left py-2 hover:opacity-70 transition-colors"
                >
                  {t.nav.home}
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    scrollToSection('sobre-mi');
                    setIsMobileMenuOpen(false);
                  }}
                  className="block w-full text-left py-2 hover:opacity-70 transition-colors"
                >
                  {t.nav.about}
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    scrollToSection('experiencia');
                    setIsMobileMenuOpen(false);
                  }}
                  className="block w-full text-left py-2 hover:opacity-70 transition-colors"
                >
                  {t.nav.experience}
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    scrollToSection('proyectos');
                    setIsMobileMenuOpen(false);
                  }}
                  className="block w-full text-left py-2 hover:opacity-70 transition-colors"
                >
                  {t.nav.projects}
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    scrollToSection('habilidades');
                    setIsMobileMenuOpen(false);
                  }}
                  className="block w-full text-left py-2 hover:opacity-70 transition-colors"
                >
                  {t.nav.skills}
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    scrollToSection('contacto');
                    setIsMobileMenuOpen(false);
                  }}
                  className="block w-full text-left py-2 hover:opacity-70 transition-colors"
                >
                  {t.nav.contact}
                </button>

                <div className="border-t border-gray-200 dark:border-gray-800 pt-4 space-y-4">
                  {/* Mobile CV Download */}
                  <a
                    href="/Edgar Josue Espinoza Zambrano CV.pdf"
                    download
                    className="flex items-center gap-2 py-2"
                  >
                    <Download className="w-4 h-4" />
                    <span>{t.hero.downloadCV}</span>
                  </a>

                  {/* Mobile Language Selector */}
                  <div className="space-y-2">
                    <p className="text-sm opacity-70">Idioma:</p>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setCurrentLang('es')}
                        className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${currentLang === 'es' ? 'bg-gray-200 dark:bg-gray-700' : 'hover:bg-gray-100 dark:hover:bg-gray-800'}`}
                      >
                        <span className="text-lg">🇪🇸</span>
                        <span className="text-sm">ES</span>
                      </button>
                      <button
                        onClick={() => setCurrentLang('en')}
                        className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${currentLang === 'en' ? 'bg-gray-200 dark:bg-gray-700' : 'hover:bg-gray-100 dark:hover:bg-gray-800'}`}
                      >
                        <span className="text-lg">🇺🇸</span>
                        <span className="text-sm">EN</span>
                      </button>
                      <button
                        onClick={() => setCurrentLang('pt')}
                        className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${currentLang === 'pt' ? 'bg-gray-200 dark:bg-gray-700' : 'hover:bg-gray-100 dark:hover:bg-gray-800'}`}
                      >
                        <span className="text-lg">🇧🇷</span>
                        <span className="text-sm">PT</span>
                      </button>
                    </div>
                  </div>

                  {/* Mobile Theme Toggle */}
                  <div className="flex items-center justify-between">
                    <span>Tema:</span>
                    <button
                      onClick={() => setIsDark(d => !d)}
                      className="relative inline-flex items-center w-16 h-8 rounded-full border-2 border-black dark:border-white bg-white dark:bg-black transition-colors duration-300"
                    >
                      <motion.div
                        className="absolute w-6 h-6 bg-black dark:bg-white rounded-full shadow-md flex items-center justify-center"
                        animate={{
                          x: isDark ? 32 : 4,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 30
                        }}
                      >
                        <motion.div
                          animate={{ rotate: isDark ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {isDark ? (
                            <svg className="w-3 h-3" fill="black" viewBox="0 0 24 24">
                              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                            </svg>
                          ) : (
                            <svg className="w-3 h-3" fill="white" viewBox="0 0 24 24">
                              <circle cx="12" cy="12" r="5" />
                              <path d="m12 1-1 4h2l-1-4zM12 19l-1 4h2l-1-4zM4.22 4.22l2.83 2.83L8.46 5.64 4.22 4.22zM15.54 18.36l2.83 2.83 1.41-1.41-2.83-2.83-1.41 1.41zM1 11v2h4v-2H1zM19 11v2h4v-2h-4zM4.22 19.78l1.41-1.41 2.83 2.83-1.41 1.41-2.83-2.83zM18.36 8.46l1.41-1.41-2.83-2.83-1.41 1.41 2.83 2.83z" />
                            </svg>
                          )}
                        </motion.div>
                      </motion.div>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <motion.section
        id="inicio"
        className="pt-24 min-h-screen md:h-screen flex items-center relative"
        style={{ 
          overflowX: 'hidden', 
          overflowY: 'visible',
          minHeight: '700px'
        }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
  <div className="max-w-6xl mx-auto px-4 py-16 w-full min-h-0 md:h-full md:flex md:items-center" style={{ overflowX: 'hidden', minHeight: '600px' }}>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative w-full">
      {/* Image First on Mobile, Second on Desktop */}
      <div className="flex justify-center md:order-2 order-1 px-4 sm:px-8 md:px-4 py-12 md:py-8 relative overflow-hidden" style={{ minHeight: '450px' }}>
        <motion.div 
          className="relative group cursor-pointer will-change-transform"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{ backfaceVisibility: 'hidden' }}
        >
          {/* Tech circuit rings - adaptan al tema */}
          <motion.div
            className={`absolute inset-0 -m-2 sm:-m-4 rounded-full border-2 ${
              isDark 
                ? 'border-cyan-400/40 shadow-lg shadow-cyan-400/20' 
                : 'border-blue-600/40 shadow-lg shadow-blue-600/10'
            }`}
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              rotate: { duration: 15, repeat: Infinity, ease: "linear" },
              scale: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
            }}
          />
          <motion.div
            className={`absolute inset-0 -m-4 sm:-m-8 rounded-full border ${
              isDark 
                ? 'border-green-400/30 shadow-md shadow-green-400/10' 
                : 'border-emerald-600/30 shadow-md shadow-emerald-600/10'
            }`}
            animate={{
              rotate: -360,
              scale: [1.1, 1, 1.1],
            }}
            transition={{
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
            }}
          />
          
          {/* Tech particles floating - colores según tema */}
          <motion.div
            className={`absolute -top-2 -right-2 w-3 h-3 rounded-full ${
              isDark ? 'bg-cyan-400 shadow-lg shadow-cyan-400/50' : 'bg-blue-500 shadow-lg shadow-blue-500/30'
            }`}
            animate={{
              y: [-5, -15, -5],
              x: [0, 5, 0],
              scale: [0.8, 1.2, 0.8],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className={`absolute -bottom-4 -left-4 w-2 h-2 rounded-full ${
              isDark ? 'bg-green-400 shadow-md shadow-green-400/50' : 'bg-emerald-500 shadow-md shadow-emerald-500/30'
            }`}
            animate={{
              y: [0, -10, 0],
              x: [0, -3, 0],
              scale: [1, 0.5, 1],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          />
          <motion.div
            className={`absolute top-1/4 -left-6 w-1.5 h-1.5 rounded-full ${
              isDark ? 'bg-purple-400 shadow-sm shadow-purple-400/50' : 'bg-indigo-500 shadow-sm shadow-indigo-500/30'
            }`}
            animate={{
              y: [0, -8, 0],
              x: [-2, 2, -2],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />

          {/* Tech skills floating animation - diferentes posiciones */}
          <motion.div
            className={`absolute -top-4 md:-top-6 left-1/4 text-xs font-mono font-semibold px-2 py-1 rounded-md z-20 ${
              isDark ? 'text-white bg-gray-900/80' : 'text-gray-900 bg-white/80'
            } backdrop-blur-sm border ${isDark ? 'border-gray-700' : 'border-gray-300'}`}
            animate={{
              opacity: [0, 1, 1, 0],
              y: [-3, -15, -20, -25],
              scale: [0.8, 1, 1, 0.8],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeOut",
              delay: 0
            }}
          >
            React
          </motion.div>

          <motion.div
            className={`absolute -top-2 md:-top-4 right-1/4 text-xs font-mono font-semibold px-2 py-1 rounded-md z-20 ${
              isDark ? 'text-white bg-gray-900/80' : 'text-gray-900 bg-white/80'
            } backdrop-blur-sm border ${isDark ? 'border-gray-700' : 'border-gray-300'}`}
            animate={{
              opacity: [0, 1, 1, 0],
              y: [0, -10, -20, -25],
              scale: [0.8, 1, 1, 0.8],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeOut",
              delay: 1
            }}
          >
            JavaScript
          </motion.div>

          <motion.div
            className={`absolute top-1/4 left-0 sm:-left-8 text-xs font-mono font-semibold px-2 py-1 rounded-md z-20 ${
              isDark ? 'text-white bg-gray-900/80' : 'text-gray-900 bg-white/80'
            } backdrop-blur-sm border ${isDark ? 'border-gray-700' : 'border-gray-300'}`}
            animate={{
              opacity: [0, 1, 1, 0],
              x: [0, -10, -15, -20],
              scale: [0.8, 1, 1, 0.8],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeOut",
              delay: 2
            }}
          >
            Python
          </motion.div>

          <motion.div
            className={`absolute top-1/3 right-0 sm:-right-8 text-xs font-mono font-semibold px-2 py-1 rounded-md z-20 ${
              isDark ? 'text-white bg-gray-900/80' : 'text-gray-900 bg-white/80'
            } backdrop-blur-sm border ${isDark ? 'border-gray-700' : 'border-gray-300'}`}
            animate={{
              opacity: [0, 1, 1, 0],
              x: [0, 10, 15, 20],
              scale: [0.8, 1, 1, 0.8],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeOut",
              delay: 3
            }}
          >
            Node.js
          </motion.div>

          <motion.div
            className={`absolute bottom-1/4 left-0 sm:-left-8 text-xs font-mono font-semibold px-2 py-1 rounded-md z-20 ${
              isDark ? 'text-white bg-gray-900/80' : 'text-gray-900 bg-white/80'
            } backdrop-blur-sm border ${isDark ? 'border-gray-700' : 'border-gray-300'}`}
            animate={{
              opacity: [0, 1, 1, 0],
              x: [-5, -15, -20, -25],
              y: [0, 5, 10, 15],
              scale: [0.8, 1, 1, 0.8],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeOut",
              delay: 4
            }}
          >
            MySQL
          </motion.div>

          <motion.div
            className={`absolute bottom-1/3 right-0 sm:-right-8 text-xs font-mono font-semibold px-2 py-1 rounded-md z-20 ${
              isDark ? 'text-white bg-gray-900/80' : 'text-gray-900 bg-white/80'
            } backdrop-blur-sm border ${isDark ? 'border-gray-700' : 'border-gray-300'}`}
            animate={{
              opacity: [0, 1, 1, 0],
              x: [5, 15, 20, 25],
              y: [0, 8, 15, 22],
              scale: [0.8, 1, 1, 0.8],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeOut",
              delay: 5
            }}
          >
            Angular
          </motion.div>

          <motion.div
            className={`absolute -bottom-4 md:-bottom-6 left-1/3 text-xs font-mono font-semibold px-2 py-1 rounded-md z-20 ${
              isDark ? 'text-white bg-gray-900/80' : 'text-gray-900 bg-white/80'
            } backdrop-blur-sm border ${isDark ? 'border-gray-700' : 'border-gray-300'}`}
            animate={{
              opacity: [0, 1, 1, 0],
              y: [3, 15, 25, 30],
              scale: [0.8, 1, 1, 0.8],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeOut",
              delay: 6
            }}
          >
            Spring Boot
          </motion.div>

          <motion.div
            className={`absolute -bottom-2 md:-bottom-4 right-1/3 text-xs font-mono font-semibold px-2 py-1 rounded-md z-20 ${
              isDark ? 'text-white bg-gray-900/80' : 'text-gray-900 bg-white/80'
            } backdrop-blur-sm border ${isDark ? 'border-gray-700' : 'border-gray-300'}`}
            animate={{
              opacity: [0, 1, 1, 0],
              y: [0, 10, 20, 25],
              scale: [0.8, 1, 1, 0.8],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeOut",
              delay: 7
            }}
          >
            PostgreSQL
          </motion.div>

          {/* Binary code animation */}
          <motion.div
            className={`absolute -top-4 md:-top-8 right-1/6 text-xs font-mono z-20 ${
              isDark ? 'text-cyan-400/60' : 'text-blue-600/50'
            }`}
            animate={{
              opacity: [0, 1, 0],
              y: [-3, -8, -12],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeOut",
              delay: 8
            }}
          >
            01001001 01010100
          </motion.div>

          {/* Main image with tech hover effects */}
          <motion.img
            src="/imagen cv editada.png"
            alt="Foto de perfil - Ingeniero en Tecnologías de la Información"
            className="w-56 md:w-64 lg:w-72 h-auto object-cover relative z-10"
            style={{
              filter: isDark 
                ? 'drop-shadow(0 0 20px rgba(34, 211, 238, 0.3))' 
                : 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.3))'
            }}
            whileHover={{
              rotateY: 15,
              rotateX: 5,
              filter: isDark 
                ? 'drop-shadow(0 0 40px rgba(34, 211, 238, 0.8)) brightness(1.15) saturate(1.2)' 
                : 'drop-shadow(0 0 40px rgba(59, 130, 246, 0.6)) brightness(1.1) saturate(1.1)',
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30
            }}
          />

          {/* Tech icons overlay - temática IT */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center pointer-events-none z-30"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {/* Central tech icon */}
            <motion.div
              className={`text-4xl ${isDark ? 'text-cyan-400' : 'text-blue-600'}`}
              initial={{ scale: 0, rotate: 0 }}
              whileHover={{ 
                scale: [0, 1.3, 1.1],
                rotate: [0, -15, 15, 0],
              }}
              transition={{
                duration: 0.8,
                ease: "backOut"
              }}
            >
              �
            </motion.div>
            
            {/* Tech icons burst - específicos para IT */}
            <motion.div
              className={`absolute text-2xl ${isDark ? 'text-green-400' : 'text-emerald-600'}`}
              initial={{ x: 0, y: 0, opacity: 0 }}
              whileHover={{ 
                x: -35, 
                y: -35, 
                opacity: [0, 1, 0.8, 0],
                rotate: 360,
                scale: [0, 1.2, 1, 0.8]
              }}
              transition={{ duration: 2, delay: 0.2 }}
            >
              ⚙️
            </motion.div>
            <motion.div
              className={`absolute text-2xl ${isDark ? 'text-purple-400' : 'text-indigo-600'}`}
              initial={{ x: 0, y: 0, opacity: 0 }}
              whileHover={{ 
                x: 35, 
                y: -25, 
                opacity: [0, 1, 0.8, 0],
                rotate: -360,
                scale: [0, 1.1, 1, 0.7]
              }}
              transition={{ duration: 2, delay: 0.4 }}
            >
              �
            </motion.div>
            <motion.div
              className={`absolute text-xl ${isDark ? 'text-yellow-400' : 'text-amber-600'}`}
              initial={{ x: 0, y: 0, opacity: 0 }}
              whileHover={{ 
                x: -25, 
                y: 45, 
                opacity: [0, 1, 0.8, 0],
                scale: [0, 1.4, 1.1, 0.8]
              }}
              transition={{ duration: 2, delay: 0.6 }}
            >
              🔐
            </motion.div>
            <motion.div
              className={`absolute text-xl ${isDark ? 'text-cyan-300' : 'text-sky-600'}`}
              initial={{ x: 0, y: 0, opacity: 0 }}
              whileHover={{ 
                x: 35, 
                y: 40, 
                opacity: [0, 1, 0.8, 0],
                scale: [0, 1.3, 1, 0.6]
              }}
              transition={{ duration: 2, delay: 0.8 }}
            >
              📡
            </motion.div>
            <motion.div
              className={`absolute text-lg ${isDark ? 'text-green-300' : 'text-green-600'}`}
              initial={{ x: 0, y: 0, opacity: 0 }}
              whileHover={{ 
                x: 0, 
                y: -50, 
                opacity: [0, 1, 0.8, 0],
                scale: [0, 1.2, 1, 0.7]
              }}
              transition={{ duration: 2, delay: 1 }}
            >
              🌐
            </motion.div>
            <motion.div
              className={`absolute text-lg ${isDark ? 'text-red-400' : 'text-red-600'}`}
              initial={{ x: 0, y: 0, opacity: 0 }}
              whileHover={{ 
                x: -35, 
                y: 0, 
                opacity: [0, 1, 0.8, 0],
                scale: [0, 1.1, 1, 0.8]
              }}
              transition={{ duration: 2, delay: 1.2 }}
            >
              🔥
            </motion.div>
          </motion.div>

          {/* Glowing tech border - se adapta al tema */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-transparent z-5"
            whileHover={{
              borderColor: isDark 
                ? ["rgba(34, 211, 238, 0)", "rgba(34, 211, 238, 0.8)", "rgba(16, 185, 129, 0.6)", "rgba(168, 85, 247, 0.4)", "rgba(34, 211, 238, 0)"]
                : ["rgba(59, 130, 246, 0)", "rgba(59, 130, 246, 0.7)", "rgba(16, 185, 129, 0.5)", "rgba(99, 102, 241, 0.4)", "rgba(59, 130, 246, 0)"],
              scale: [1, 1.1, 1.08, 1.05, 1.02],
              boxShadow: isDark
                ? ["0 0 0 rgba(34, 211, 238, 0)", "0 0 30px rgba(34, 211, 238, 0.5)", "0 0 40px rgba(16, 185, 129, 0.3)"]
                : ["0 0 0 rgba(59, 130, 246, 0)", "0 0 25px rgba(59, 130, 246, 0.4)", "0 0 35px rgba(16, 185, 129, 0.2)"]
            }}
            transition={{
              borderColor: { duration: 2, repeat: Infinity },
              scale: { duration: 2, repeat: Infinity },
              boxShadow: { duration: 2, repeat: Infinity }
            }}
          />

          {/* Matrix-style background effect on hover */}
          <motion.div
            className={`absolute inset-0 -m-4 sm:-m-8 rounded-full z-0 ${
              isDark ? 'bg-gradient-to-r from-cyan-900/10 via-green-900/10 to-purple-900/10' 
                     : 'bg-gradient-to-r from-blue-100/20 via-emerald-100/20 to-indigo-100/20'
            }`}
            initial={{ opacity: 0, scale: 0.8 }}
            whileHover={{ 
              opacity: 1, 
              scale: 1.2,
              background: isDark 
                ? "radial-gradient(circle, rgba(34, 211, 238, 0.1) 0%, rgba(16, 185, 129, 0.1) 50%, rgba(168, 85, 247, 0.1) 100%)"
                : "radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, rgba(16, 185, 129, 0.1) 50%, rgba(99, 102, 241, 0.1) 100%)"
            }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>
      </div>

      {/* Text Second on Mobile, First on Desktop */}
      <div className="md:order-1 order-2 text-center md:text-left py-8 md:py-0">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">{t.hero.title}</h1>
        <h2 className="text-2xl md:text-3xl font-light mb-6 opacity-80">{t.hero.subtitle}</h2>
        <p className="text-lg md:text-xl mb-8 opacity-80 max-w-xl mx-auto md:mx-0">
          {t.hero.description}
        </p>
        <div className="space-y-3 mb-8">
          <div className="flex items-center gap-3 justify-center md:justify-start"><MapPin className="w-4 h-4" /><span>Santo Domingo, Ecuador</span></div>
          <div className="flex items-center gap-3 justify-center md:justify-start"><Mail className="w-4 h-4" /><span>tvjosue090@gmail.com</span></div>
          <div className="flex items-center gap-3 justify-center md:justify-start"><Phone className="w-4 h-4" /><span>+593 989559412</span></div>
        </div>
        <div className="flex gap-4 justify-center md:justify-start">
          <button
            onClick={() => scrollToSection('contacto')}
            className="px-8 py-3 rounded-full text-base font-semibold border border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
          >
            {t.hero.cta}
          </button>
          <a
            href="/Edgar Josue Espinoza Zambrano CV.pdf"
            download
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-base font-semibold bg-black text-white dark:bg-white dark:text-black hover:opacity-80 transition-opacity"
          >
            <Download className="w-4 h-4" />
            {t.hero.downloadCV}
          </a>
        </div>
      </div>
    </div>
  </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        id="sobre-mi"
        className="py-20 border-t border-gray-200 dark:border-gray-800"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-4xl font-bold text-center mb-16">
      {t.about.title}
    </h2>
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div>
        <p className="text-lg opacity-80 mb-6 leading-relaxed">
          {t.about.text1}
        </p>
        <p className="text-lg opacity-80 mb-6 leading-relaxed">
          {t.about.text2}
        </p>
      </div>
      <div className="space-y-6">
        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-3 mb-3">
            <GraduationCap className="w-6 h-6" />
            <h3 className="text-xl font-semibold">{t.about.education}</h3>
          </div>
          <p className="opacity-90">
            {currentLang === 'es' ? 'Ingeniería en Tecnologías de la Información' :
              currentLang === 'en' ? 'Information Technology Engineering' :
                'Engenharia em Tecnologias da Informação'}
          </p>
          <p className="opacity-70">
            {currentLang === 'es' ? 'Universidad de las Fuerzas Armadas ESPE' :
              currentLang === 'en' ? 'Armed Forces University ESPE' :
                'Universidade das Forças Armadas ESPE'}
          </p>
          <p className="opacity-70">2020-2025</p>
        </div>
        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-3 mb-3">
            <Languages className="w-6 h-6" />
            <h3 className="text-xl font-semibold">{t.about.languages}</h3>
          </div>
          <p className="opacity-90">
            {currentLang === 'es' ? 'Español (Nativo)' :
              currentLang === 'en' ? 'Spanish (Native)' :
                'Espanhol (Nativo)'}
          </p>
          <p className="opacity-90">
            {currentLang === 'es' ? 'Inglés (B1)' :
              currentLang === 'en' ? 'English (B1)' :
                'Inglês (B1)'}
          </p>
        </div>
      </div>
    </div>
  </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section
        id="experiencia"
        className="py-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-4xl font-bold text-center mb-16">
      Experiencia Laboral
    </h2>
    <div className="space-y-8">
      <div className="p-8 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <div>
            <h3 className="text-xl font-semibold">Desarrollador de Automatización</h3>
            <p className="opacity-80">Edenken Cía. Ltda. (Contrato Temporal)</p>
          </div>
          <div className="flex items-center gap-2 opacity-70">
            <Calendar className="w-4 h-4" />
            <span>02/2025 – 04/2025</span>
          </div>
        </div>
        <ul className="opacity-90 space-y-2">
          <li>• Contratado tras mis prácticas para continuar con la automatización de reportes de tabulación</li>
          <li>• Logré mejorar la eficiencia y precisión en la generación de datos de la empresa</li>
        </ul>
      </div>

      <div className="p-8 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <div>
            <h3 className="text-xl font-semibold">Practicante en Automatización de Procesos</h3>
            <p className="opacity-80">Edenken Cía. Ltda.</p>
          </div>
          <div className="flex items-center gap-2 opacity-70">
            <Calendar className="w-4 h-4" />
            <span>09/2024 – 02/2025</span>
          </div>
        </div>
        <ul className="opacity-90 space-y-2">
          <li>• Implementé macros en Excel para automatizar tabulación de datos y generación de informes técnicos</li>
          <li>• Reduje significativamente el tiempo de elaboración de informes en un 50%</li>
        </ul>
      </div>

      <div className="p-8 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <div>
            <h3 className="text-xl font-semibold">Practicante en Desarrollo de Software</h3>
            <p className="opacity-80">Idrix – Empresa de Desarrollo de Software</p>
          </div>
          <div className="flex items-center gap-2 opacity-70">
            <Calendar className="w-4 h-4" />
            <span>04/2024 – 07/2024</span>
          </div>
        </div>
        <ul className="opacity-90 space-y-2">
          <li>• Colaboré en el diseño y desarrollo de un módulo SRS para un sistema contable</li>
          <li>• Trabajé en equipo aplicando metodologías de desarrollo ágil</li>
        </ul>
      </div>
      <div className="p-8 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
    <div>
      <h3 className="text-xl font-semibold">Desarrollador Backend</h3>
      <p className="opacity-80">Las Carolinas – Sistema de Tracking</p>
    </div>
    <div className="flex items-center gap-2 opacity-70">
      <Calendar className="w-4 h-4" />
      <span>12/2025 – 02/2026</span>
    </div>
  </div>

  <ul className="opacity-90 space-y-2 mb-4">
    <li>• Desarrollo de servicios backend escalables usando Node.js y Express</li>
    <li>• Diseño e implementación de REST APIs para procesamiento de datos</li>
    <li>• Administración y optimización de bases de datos MySQL</li>
    <li>• Mejora del rendimiento del sistema mediante optimización de consultas y estructura de datos</li>
  </ul>

  <a
    href="https://lascarolinasenvios.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block px-4 py-2 rounded-md bg-black text-white dark:bg-white dark:text-black hover:opacity-80 transition"
  >
    Ver proyecto
  </a>
</div>

    </div>
  </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="proyectos"
        className="py-20 border-t border-gray-200 dark:border-gray-800"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-4xl font-bold text-center mb-16">
      Proyectos Destacados
    </h2>
    <div className="p-8 rounded-lg border border-gray-200 dark:border-gray-700 transition-colors">
      <div className="flex items-center gap-3 mb-4">
        <Code className="w-8 h-8" />
        <h3 className="text-2xl font-semibold">Sistema de Generación de Horarios – ISTLA</h3>
      </div>
      <p className="opacity-70 mb-4">2025 • Trabajo de Titulación</p>
      <p className="opacity-90 mb-6 leading-relaxed">
        Desarrollo de un sistema web integral para la gestión de horarios docentes, implementando algoritmos de asignación automática que evitan colisiones entre materias, aulas y docentes.
      </p>
      <div className="space-y-3">
        <h4 className="text-lg font-semibold">Características principales:</h4>
        <ul className="opacity-90 space-y-2">
          <li>• Asignación automática de materias, aulas y docentes</li>
          <li>• Prevención de colisiones de horarios</li>
          <li>• Interfaz web intuitiva y responsive</li>
          <li>• Base de datos robusta para gestión de información académica</li>
        </ul>
      </div>
      <div className="flex flex-wrap gap-2 mt-6">
        <span className="border px-3 py-1 rounded-full text-sm">Node.js</span>
        <span className="border px-3 py-1 rounded-full text-sm">Angular</span>
        <span className="border px-3 py-1 rounded-full text-sm">MySQL</span>
      </div>

      {/* Project Action Buttons */}
      <div className="flex flex-wrap gap-4 mt-8">
        <button
          onClick={() => openModal(0)}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold bg-black text-white dark:bg-white dark:text-black hover:opacity-80 transition-opacity"
        >
          <ImageIcon className="w-5 h-5" />
          Ver Imágenes del Sistema
        </button>
        <a
          href="https://horarios.istla-sigala.edu.ec/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-lg font-semibold transition-colors"
        >
          <ExternalLink className="w-5 h-5" />
          Visitar Sistema
        </a>
      </div>
    </div>
  </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        id="habilidades-tecnicas"
        className="py-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-4xl font-bold text-center mb-16">
      Habilidades Técnicas
    </h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-3 mb-4">
          <Code className="w-6 h-6" />
          <h3 className="text-xl font-semibold">Lenguajes de Programación</h3>
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span>JavaScript</span>
            <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div className="bg-black dark:bg-white h-2 rounded-full w-20"></div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span>Java</span>
            <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div className="bg-black dark:bg-white h-2 rounded-full w-16"></div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span>PHP</span>
            <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div className="bg-black dark:bg-white h-2 rounded-full w-14"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-3 mb-4">
          <Briefcase className="w-6 h-6" />
          <h3 className="text-xl font-semibold">Frameworks & Herramientas</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          <span className="border px-3 py-1 rounded-full text-sm">Node.js</span>
          <span className="border px-3 py-1 rounded-full text-sm">Angular</span>
          <span className="border px-3 py-1 rounded-full text-sm">React</span>
          <span className="border px-3 py-1 rounded-full text-sm">Express</span>
          <span className="border px-3 py-1 rounded-full text-sm">Spring Boot</span>
        </div>
      </div>

      <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-3 mb-4">
          <Database className="w-6 h-6" />
          <h3 className="text-xl font-semibold">Bases de Datos</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          <span className="border px-3 py-1 rounded-full text-sm">MySQL</span>
          <span className="border px-3 py-1 rounded-full text-sm">PostgreSQL</span>
          <span className="border px-3 py-1 rounded-full text-sm">SQL Server</span>
          <span className="border px-3 py-1 rounded-full text-sm">MongoDB</span>
        </div>
      </div>

      <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-3 mb-4">
          <Code className="w-6 h-6" />
          <h3 className="text-xl font-semibold">Automatización</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          <span className="border px-3 py-1 rounded-full text-sm">Excel VBA</span>
          <span className="border px-3 py-1 rounded-full text-sm">Macros</span>
          <span className="border px-3 py-1 rounded-full text-sm">Office 365</span>
        </div>
      </div>
    </div>
  </div>
      </motion.section>

      {/* Soft Skills Section */}
      <motion.section
        id="habilidades-blandas"
        className="py-20 border-t border-gray-200 dark:border-gray-800"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-4xl font-bold text-center mb-16">
      {t.softSkills.title}
    </h2>
    <div className="max-w-4xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8">
        {t.softSkills.skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex items-center gap-4 p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
          >
            <div className="w-3 h-3 bg-black dark:bg-white rounded-full flex-shrink-0"></div>
            <span className="text-lg font-medium">{skill}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
      </motion.section>

      {/* Certificates Section */}
      <motion.section
        className="py-20 border-t border-gray-200 dark:border-gray-800"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
  <div className="max-w-6xl mx-auto px-4">
    <div className="text-center mb-16">
      <div className="flex items-center justify-center gap-3 mb-4">
        <Award className="w-8 h-8" />
        <h2 className="text-4xl font-bold">{t.certificates.title}</h2>
      </div>
      <p className="text-lg opacity-70">{t.certificates.subtitle}</p>
    </div>

    {/* Carousel Container */}
    <div className="max-w-4xl mx-auto">
      <div className="relative overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-black shadow-lg">
        <div className="relative h-96 md:h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentCertificateIndex}
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 flex items-center justify-center p-4"
            >
              <img
                src={certificates[currentCertificateIndex].src}
                alt={certificates[currentCertificateIndex].title}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </motion.div>
          </AnimatePresence>

          {/* Certificate Title */}
          <div className="absolute bottom-6 left-0 right-0 bg-black/80 text-white p-4">
            <h3 className="text-lg font-semibold text-center">
              {certificates[currentCertificateIndex].title}
            </h3>
          </div>

          {/* Carousel Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            {certificates.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentCertificateIndex(index)}
                className={`w-4 h-4 rounded-full border-2 border-white shadow-lg transition-all ${index === currentCertificateIndex
                    ? 'bg-blue-500'
                    : 'bg-gray-400 hover:bg-gray-300'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mt-6 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1">
        <motion.div
          className="bg-black dark:bg-white h-1 rounded-full"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 4, ease: "linear", repeat: Infinity }}
        />
      </div>
    </div>
  </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contacto"
        className="py-20 border-t border-gray-200 dark:border-gray-800"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
  <div className="max-w-4xl mx-auto px-4">
    <h2 className="text-4xl font-bold text-center mb-16">
      {t.contact.title}
    </h2>
    <div className="grid md:grid-cols-2 gap-12">
      <div>
        <h3 className="text-2xl font-semibold mb-6">{t.contact.subtitle}</h3>
        <p className="opacity-80 mb-8 leading-relaxed">
          {t.contact.description}
        </p>

        <div className="space-y-4 mb-8">
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5" />
            <span>tvjosue090@gmail.com</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5" />
            <span>+593 989559412</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5" />
            <span>Santo Domingo, Ecuador</span>
          </div>
        </div>

        {/* WhatsApp Button */}
        <div className="mb-8">
          <a
            href="https://wa.me/593989559412?text=Hola%20Josue,%20me%20interesa%20contactarte%20sobre%20oportunidades%20laborales"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-full font-semibold transition-colors shadow-lg hover:shadow-xl"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488" />
            </svg>
            {t.contact.whatsapp}
          </a>
        </div>

        {/* Social Media Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">{t.contact.social}</h4>
          <div className="flex space-x-4">
            <a
              href="https://github.com/ejespinoza5"
              target="_blank"
              rel="noopener noreferrer"
              className="border hover:bg-gray-100 dark:hover:bg-gray-900 p-3 rounded-full transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/josue-espinoza-545b363aa"
              className="border hover:bg-gray-100 dark:hover:bg-gray-900 p-3 rounded-full transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/josueespinoza00/"
              target="_blank"
              rel="noopener noreferrer"
              className="border hover:bg-gray-100 dark:hover:bg-gray-900 p-3 rounded-full transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100009498646790"
              target="_blank"
              rel="noopener noreferrer"
              className="border hover:bg-gray-100 dark:hover:bg-gray-900 p-3 rounded-full transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              {t.contact.form.name}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              {t.contact.form.email}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent"
              required
            />
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium mb-2">
              {t.contact.form.subject}
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              {t.contact.form.message}
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={5}
              className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent resize-none"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 rounded-lg font-semibold transition-colors ${isSubmitting
                ? 'bg-gray-400 text-gray-700 cursor-not-allowed'
                : 'border border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black'
              }`}
          >
            {isSubmitting ? 'Enviando...' : t.contact.form.send}
          </button>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg"
            >
              ¡Mensaje enviado exitosamente! Te responderé pronto.
            </motion.div>
          )}

          {submitStatus === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-lg"
            >
              Error al enviar el mensaje. Por favor, intenta de nuevo o contáctame directamente por email.
            </motion.div>
          )}
        </form>
      </div>
    </div>
  </div>
      </motion.section>

      {/* Image Gallery Modal */}
      <AnimatePresence>
        {isModalOpen && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
      onClick={closeModal}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative max-w-4xl max-h-[90vh] w-full"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Navigation Buttons */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Main Image */}
        <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
          <motion.img
            key={currentImageIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
            src={projectImages[currentImageIndex].src}
            alt={projectImages[currentImageIndex].title}
            className="w-full h-auto max-h-[70vh] object-contain"
          />

          {/* Image Info */}
          <div className="p-4 bg-white dark:bg-gray-900">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {projectImages[currentImageIndex].title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {currentImageIndex + 1} de {projectImages.length}
            </p>
          </div>
        </div>

        {/* Thumbnail Navigation */}
        <div className="mt-4 flex gap-2 justify-center overflow-x-auto pb-2">
          {projectImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${index === currentImageIndex
                  ? 'border-blue-500 scale-110'
                  : 'border-gray-300 dark:border-gray-600 hover:border-gray-400'
                }`}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}
      </AnimatePresence >

  {/* Scroll to Top Button */ }
  <AnimatePresence>
{
  showScrollTop && (
    <motion.button
      initial={{ opacity: 0, scale: 0.8, y: 100 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: 100 }}
      whileHover={{
        scale: 1.1,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
      whileTap={{ scale: 0.95 }}
      onClick={scrollToTop}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 17
      }}
      className="fixed bottom-8 right-8 z-40 p-3 bg-black dark:bg-white text-white dark:text-black rounded-full shadow-lg"
      aria-label="Volver al inicio"
    >
      <motion.div
        animate={{ y: [0, -2, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowUp className="w-6 h-6" />
      </motion.div>
    </motion.button>
  )
}
      </AnimatePresence >

  {/* Footer */ }
  < footer className = "bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 py-8" >
    <div className="max-w-6xl mx-auto px-4 text-center">
      <p className="opacity-70">
        2025 - {new Date().getFullYear()} Edgar Josué Espinoza Zambrano.
      </p>
      
    </div>
      </footer >
    </div >
  );
}