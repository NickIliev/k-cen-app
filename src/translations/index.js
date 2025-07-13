// translations/index.js - Translation data for the website

export const translations = {
  en: {
    // Navigation
    nav: {
      home: "Home",
      gallery: "Gallery", 
      pricing: "Pricing",
      contact: "Contact",
      reservations: "Reservations",
      language: "Language"
    },

    // Home Page
    home: {
      hero: {
        title: "Happy Kids Center",
        subtitle: "Premium Party Venue with Two Amazing Spaces",
        description: "Create unforgettable celebrations in our dedicated Kids Playroom or Adult Recreation Room. Perfect for birthdays, family gatherings, and special events.",
        cta: "Book Your Event"
      },
      about: {
        title: "About Our Venue",
        description: "We've transformed from a traditional kids center into Sofia's premier party venue, offering two distinct spaces designed for different types of celebrations.",
        kidsRoom: {
          title: "Kids Playroom",
          description: "A vibrant, safe space filled with age-appropriate toys, games, and activities. Perfect for children's birthday parties and family events."
        },
        adultRoom: {
          title: "Adult Recreation Room",
          description: "An elegant space designed for adult gatherings, corporate events, and sophisticated celebrations."
        }
      },
      features: {
        title: "Why Choose Us?",
        safety: {
          title: "Safety First",
          description: "All equipment is regularly maintained and safety-checked"
        },
        flexible: {
          title: "Flexible Booking",
          description: "Choose your preferred time slot and duration"
        },
        affordable: {
          title: "Competitive Pricing",
          description: "Transparent pricing with options for every budget"
        }
      },
      testimonials: {
        title: "What Our Clients Say",
        testimonial1: {
          text: "Amazing venue for my daughter's 8th birthday! The kids had a blast and the staff was incredibly helpful.",
          author: "Maria Petrova"
        },
        testimonial2: {
          text: "Perfect space for our company team building event. Professional setup and great atmosphere.",
          author: "Ivan Georgiev"
        },
        testimonial3: {
          text: "Highly recommend for any celebration. Clean, safe, and the kids absolutely loved it!",
          author: "Elena Dimitrova"
        }
      }
    },

    // Gallery Page
    gallery: {
      title: "Gallery",
      subtitle: "Take a virtual tour of our amazing spaces",
      kidsPlayroom: "Kids Playroom Overview",
      adultRoom: "Adult Recreation Room",
      loading: "Loading images..."
    },

    // Pricing Page
    pricing: {
      title: "Pricing",
      subtitle: "Transparent pricing for your perfect event",
      kidsRoom: {
        title: "Kids Playroom",
        description: "Perfect for children's parties and family gatherings",
        features: [
          "Age-appropriate toys and games",
          "Safe play equipment",
          "Colorful, engaging environment",
          "Suitable for ages 3-12"
        ]
      },
      adultRoom: {
        title: "Adult Recreation Room", 
        description: "Elegant space for adult events and celebrations",
        features: [
          "Sophisticated atmosphere",
          "Comfortable seating areas",
          "Perfect for corporate events",
          "Adults only environment"
        ]
      },
      duration: "Duration",
      hours: "hours",
      guests: "guests",
      adults: "adults",
      perPerson: "per person",
      adultsOnly: "adults only",
      bookNow: "Book Now",
      mostPopular: "Most Popular"
    },

    // Contact Page
    contact: {
      title: "Contact Us",
      subtitle: "Get in touch for inquiries and bookings",
      form: {
        title: "Send us a message",
        name: "Full Name",
        email: "Email Address", 
        phone: "Phone Number",
        subject: "Subject",
        message: "Message",
        send: "Send Message",
        success: "Thank you for your message! We'll get back to you soon.",
        namePlaceholder: "Enter your full name",
        emailPlaceholder: "Enter your email address",
        phonePlaceholder: "Enter your phone number",
        subjectPlaceholder: "Enter message subject",
        messagePlaceholder: "Enter your message here..."
      },
      info: {
        title: "Contact Information",
        address: "Address",
        addressValue: "123 Happy Street, Sofia, Bulgaria",
        phone: "Phone",
        phoneValue: "+359 2 123 4567",
        email: "Email",
        emailValue: "info@happykidscenter.bg",
        hours: "Operating Hours",
        hoursValue: "Monday - Sunday: 9:00 AM - 10:00 PM"
      },
      staff: {
        title: "Our Team",
        manager: {
          name: "Anna Petrov",
          role: "Venue Manager",
          description: "With 8 years of experience in event management, Anna ensures every celebration is perfect."
        },
        coordinator: {
          name: "Stefan Georgiev", 
          role: "Event Coordinator",
          description: "Stefan specializes in creating memorable experiences for both kids and adults."
        }
      },
      faq: {
        title: "Frequently Asked Questions",
        q1: {
          question: "What is included in the venue rental?",
          answer: "The venue rental includes access to the selected room, basic furniture, and cleaning after your event. Additional services can be arranged separately."
        },
        q2: {
          question: "Can I bring my own decorations?",
          answer: "Yes! You're welcome to bring decorations. We just ask that you avoid anything that might damage the walls or equipment."
        },
        q3: {
          question: "Is there parking available?",
          answer: "Yes, we have dedicated parking spaces available for our guests at no additional charge."
        },
        q4: {
          question: "What is your cancellation policy?",
          answer: "Cancellations made 48 hours before the event receive a full refund. Cancellations within 48 hours are subject to a 50% fee."
        }
      }
    },

    // Reservations Page
    reservations: {
      title: "Book Your Event",
      subtitle: "Complete the form below to reserve your perfect celebration space",
      steps: {
        details: "Event Details",
        guests: "Guest Information", 
        preferences: "Preferences",
        review: "Review & Confirm",
        confirmation: "Booking Confirmed"
      },
      form: {
        eventType: "Event Type",
        eventTypeOptions: {
          birthday: "Birthday Party",
          corporate: "Corporate Event",
          family: "Family Gathering",
          other: "Other Celebration"
        },
        venue: "Select Venue",
        venueOptions: {
          kids: "Kids Playroom",
          adult: "Adult Recreation Room"
        },
        date: "Event Date",
        startTime: "Start Time", 
        duration: "Duration",
        durationOptions: {
          2: "2 hours",
          3: "3 hours", 
          4: "4 hours",
          5: "5 hours"
        },
        guestCount: "Number of Guests",
        contactName: "Contact Name",
        contactEmail: "Email Address",
        contactPhone: "Phone Number",
        specialRequests: "Special Requests",
        cateringNeeded: "Catering Needed",
        decorationNeeded: "Decoration Needed",
        previous: "Previous",
        next: "Next",
        confirm: "Confirm Booking",
        placeholders: {
          eventType: "Select event type",
          venue: "Choose your venue",
          date: "Select date",
          startTime: "Select start time",
          duration: "Select duration",
          guestCount: "Enter number of guests",
          contactName: "Enter your full name",
          contactEmail: "Enter your email",
          contactPhone: "Enter your phone number",
          specialRequests: "Any special requests or requirements..."
        }
      },
      review: {
        title: "Review Your Booking",
        eventDetails: "Event Details",
        contactDetails: "Contact Details", 
        priceBreakdown: "Price Breakdown",
        basePricePerHour: "Base price per hour",
        guestFee: "Guest fee",
        totalEstimate: "Total Estimated Price",
        note: "Final price will be confirmed after booking review"
      },
      confirmation: {
        title: "Booking Confirmed!",
        message: "Thank you for choosing Happy Kids Center! Your booking has been submitted and is pending confirmation.",
        bookingId: "Booking ID",
        nextSteps: "What's Next?",
        step1: "We'll review your booking within 24 hours",
        step2: "You'll receive a confirmation email with payment details", 
        step3: "Final confirmation will be sent 48 hours before your event",
        newBooking: "Make Another Booking"
      },
      validation: {
        required: "This field is required",
        email: "Please enter a valid email address",
        phone: "Please enter a valid phone number",
        date: "Please select a future date",
        endTime: "Events cannot end after 10:00 PM"
      }
    },

    // Footer
    footer: {
      tagline: "Creating magical moments for families in Sofia",
      quickLinks: "Quick Links",
      contact: "Contact Info",
      address: "123 Happy Street, Sofia, Bulgaria",
      phone: "+359 2 123 4567",
      email: "info@happykidscenter.bg",
      hours: "Operating Hours",
      hoursValue: "Monday - Sunday: 9:00 AM - 10:00 PM",
      rights: "All rights reserved."
    },

    // Common
    common: {
      yes: "Yes",
      no: "No",
      loading: "Loading...",
      error: "An error occurred",
      success: "Success!",
      cancel: "Cancel",
      save: "Save",
      edit: "Edit",
      delete: "Delete",
      back: "Back",
      continue: "Continue",
      submit: "Submit"
    }
  },

  bg: {
    // Navigation
    nav: {
      home: "Начало",
      gallery: "Галерия",
      pricing: "Цени", 
      contact: "Контакти",
      reservations: "Резервации",
      language: "Език"
    },

    // Home Page
    home: {
      hero: {
        title: "Център Щастливи Деца",
        subtitle: "Премиум място за празници с два невероятни помещения",
        description: "Създайте незабравими празници в нашата специализирана детска стая за игра или стая за възрастни. Перфектно за рождени дни, семейни събирания и специални събития.",
        cta: "Резервирайте събитието си"
      },
      about: {
        title: "За нашето място",
        description: "Трансформирахме се от традиционен детски център в най-добрата площадка за празници в София, предлагаща два различни помещения, проектирани за различни типове празненства.",
        kidsRoom: {
          title: "Детска стая за игра",
          description: "Жизнено, безопасно място, пълно с подходящи за възрастта играчки, игри и дейности. Перфектно за детски рождени дни и семейни събития."
        },
        adultRoom: {
          title: "Стая за възрастни",
          description: "Елегантно пространство, проектирано за събирания на възрастни, корпоративни събития и изискани празненства."
        }
      },
      features: {
        title: "Защо да ни изберете?",
        safety: {
          title: "Безопасност на първо място",
          description: "Цялото оборудване се поддържа редовно и се проверява за безопасност"
        },
        flexible: {
          title: "Гъвкави резервации",
          description: "Изберете предпочитаната от вас времева зона и продължителност"
        },
        affordable: {
          title: "Конкурентни цени",
          description: "Прозрачно ценообразуване с опции за всеки бюджет"
        }
      },
      testimonials: {
        title: "Какво казват нашите клиенти",
        testimonial1: {
          text: "Невероятно място за 8-ия рожден ден на дъщеря ми! Децата се забавляваха страхотно и персоналът беше изключително полезен.",
          author: "Мария Петрова"
        },
        testimonial2: {
          text: "Перфектно пространство за нашето корпоративно събитие. Професионална организация и страхотна атмосфера.",
          author: "Иван Георгиев"
        },
        testimonial3: {
          text: "Горещо препоръчвам за всеки празник. Чисто, безопасно и децата го обожаваха!",
          author: "Елена Димитрова"
        }
      }
    },

    // Gallery Page
    gallery: {
      title: "Галерия",
      subtitle: "Направете виртуална обиколка на нашите невероятни помещения",
      kidsPlayroom: "Преглед на детската стая за игра",
      adultRoom: "Стая за възрастни",
      loading: "Зареждане на изображения..."
    },

    // Pricing Page
    pricing: {
      title: "Цени",
      subtitle: "Прозрачно ценообразуване за вашето перфектно събитие",
      kidsRoom: {
        title: "Детска стая за игра",
        description: "Перфектна за детски партита и семейни събирания",
        features: [
          "Играчки и игри подходящи за възрастта",
          "Безопасно оборудване за игра",
          "Цветна, ангажираща среда",
          "Подходяща за възраст 3-12 години"
        ]
      },
      adultRoom: {
        title: "Стая за възрастни",
        description: "Елегантно пространство за събития и празненства за възрастни",
        features: [
          "Изискана атмосфера",
          "Удобни зони за сядане",
          "Перфектна за корпоративни събития",
          "Среда само за възрастни"
        ]
      },
      duration: "Продължителност",
      hours: "часа",
      guests: "гости",
      adults: "възрастни",
      perPerson: "на човек",
      adultsOnly: "само възрастни",
      bookNow: "Резервирайте сега",
      mostPopular: "Най-популярно"
    },

    // Contact Page
    contact: {
      title: "Свържете се с нас",
      subtitle: "Свържете се с нас за запитвания и резервации",
      form: {
        title: "Изпратете ни съобщение",
        name: "Пълно име",
        email: "Имейл адрес",
        phone: "Телефонен номер",
        subject: "Тема",
        message: "Съобщение",
        send: "Изпрати съобщение",
        success: "Благодарим за съобщението! Ще се свържем с вас скоро.",
        namePlaceholder: "Въведете пълното си име",
        emailPlaceholder: "Въведете имейл адреса си",
        phonePlaceholder: "Въведете телефонния си номер",
        subjectPlaceholder: "Въведете тема на съобщението",
        messagePlaceholder: "Въведете съобщението си тук..."
      },
      info: {
        title: "Информация за контакт",
        address: "Адрес",
        addressValue: "ул. Щастлива 123, София, България",
        phone: "Телефон",
        phoneValue: "+359 2 123 4567",
        email: "Имейл",
        emailValue: "info@happykidscenter.bg",
        hours: "Работно време",
        hoursValue: "Понеделник - Неделя: 9:00 - 22:00"
      },
      staff: {
        title: "Нашият екип",
        manager: {
          name: "Анна Петров",
          role: "Мениджър на площадката",
          description: "С 8 години опит в управлението на събития, Анна гарантира, че всеки празник е перфектен."
        },
        coordinator: {
          name: "Стефан Георгиев",
          role: "Координатор на събития",
          description: "Стефан се специализира в създаването на незабравими преживявания както за деца, така и за възрастни."
        }
      },
      faq: {
        title: "Често задавани въпроси",
        q1: {
          question: "Какво е включено в наема на помещението?",
          answer: "Наемът на помещението включва достъп до избраната стая, основни мебели и почистване след събитието ви. Допълнителни услуги могат да бъдат организирани отделно."
        },
        q2: {
          question: "Мога ли да донеса собствени декорации?",
          answer: "Да! Добре дошли сте да донесете декорации. Просто молим да избягвате всичко, което може да повреди стените или оборудването."
        },
        q3: {
          question: "Има ли достъпен паркинг?",
          answer: "Да, имаме специализирани паркоместа, достъпни за нашите гости без допълнителна такса."
        },
        q4: {
          question: "Каква е вашата политика за отменяне?",
          answer: "Отменянията, направени 48 часа преди събитието, получават пълно възстановяване. Отменянията в рамките на 48 часа са обект на такса от 50%."
        }
      }
    },

    // Reservations Page
    reservations: {
      title: "Резервирайте събитието си",
      subtitle: "Попълнете формуляра по-долу, за да резервирате вашето перфектно място за празнуване",
      steps: {
        details: "Детайли за събитието",
        guests: "Информация за гостите",
        preferences: "Предпочитания",
        review: "Преглед и потвърждение",
        confirmation: "Резервацията е потвърдена"
      },
      form: {
        eventType: "Тип събитие",
        eventTypeOptions: {
          birthday: "Рожден ден",
          corporate: "Корпоративно събитие",
          family: "Семейно събиране",
          other: "Друго празнуване"
        },
        venue: "Изберете място",
        venueOptions: {
          kids: "Детска стая за игра",
          adult: "Стая за възрастни"
        },
        date: "Дата на събитието",
        startTime: "Начален час",
        duration: "Продължителност",
        durationOptions: {
          2: "2 часа",
          3: "3 часа",
          4: "4 часа", 
          5: "5 часа"
        },
        guestCount: "Брой гости",
        contactName: "Име за контакт",
        contactEmail: "Имейл адрес",
        contactPhone: "Телефонен номер",
        specialRequests: "Специални заявки",
        cateringNeeded: "Нужно ли е кетъринг",
        decorationNeeded: "Нужна ли е декорация",
        previous: "Назад",
        next: "Напред",
        confirm: "Потвърди резервацията",
        placeholders: {
          eventType: "Изберете тип събитие",
          venue: "Изберете място",
          date: "Изберете дата",
          startTime: "Изберете начален час",
          duration: "Изберете продължителност",
          guestCount: "Въведете брой гости",
          contactName: "Въведете пълното си име",
          contactEmail: "Въведете имейла си",
          contactPhone: "Въведете телефонния си номер",
          specialRequests: "Някакви специални заявки или изисквания..."
        }
      },
      review: {
        title: "Прегледайте резервацията си",
        eventDetails: "Детайли за събитието",
        contactDetails: "Данни за контакт",
        priceBreakdown: "Разбивка на цената",
        basePricePerHour: "Базова цена на час",
        guestFee: "Такса за гости",
        totalEstimate: "Обща предполагаема цена",
        note: "Окончателната цена ще бъде потвърдена след преглед на резервацията"
      },
      confirmation: {
        title: "Резервацията е потвърдена!",
        message: "Благодарим, че избрахте Център Щастливи Деца! Вашата резервация е изпратена и очаква потвърждение.",
        bookingId: "ID на резервацията",
        nextSteps: "Следващи стъпки?",
        step1: "Ще прегледаме резервацията ви в рамките на 24 часа",
        step2: "Ще получите имейл за потвърждение с детайли за плащане",
        step3: "Окончателното потвърждение ще бъде изпратено 48 часа преди събитието ви",
        newBooking: "Направете нова резервация"
      },
      validation: {
        required: "Това поле е задължително",
        email: "Моля, въведете валиден имейл адрес",
        phone: "Моля, въведете валиден телефонен номер",
        date: "Моля, изберете бъдеща дата",
        endTime: "Събитията не могат да завършват след 22:00"
      }
    },

    // Footer
    footer: {
      tagline: "Създаваме магически моменти за семействата в София",
      quickLinks: "Бързи връзки",
      contact: "Информация за контакт",
      address: "ул. Щастлива 123, София, България",
      phone: "+359 2 123 4567",
      email: "info@happykidscenter.bg", 
      hours: "Работно време",
      hoursValue: "Понеделник - Неделя: 9:00 - 22:00",
      rights: "Всички права запазени."
    },

    // Common
    common: {
      yes: "Да",
      no: "Не",
      loading: "Зареждане...",
      error: "Възникна грешка",
      success: "Успех!",
      cancel: "Отмени",
      save: "Запази",
      edit: "Редактирай",
      delete: "Изтрий",
      back: "Назад",
      continue: "Продължи",
      submit: "Изпрати"
    }
  }
};
