let details = [
  {
    "id": 1,
    "name": "Eiffel Tower",
    "image": "https://media.istockphoto.com/id/2153347966/photo/eiffel-tower-in-paris-france-on-a-sunny-day.webp?a=1&b=1&s=612x612&w=0&k=20&c=_58owKI2gM5xHxpRD8cSn_CnGw3j9sXzLiwBnn5qX3A=",
    "description": "A wrought-iron lattice tower located in Paris, France, it is one of the most recognizable structures in the world.",
    "country": "France",
    "tourPackage": {
      "hotel": "Hotel Le Meurice",
      "days": 5,
      "priceInINR": 120000,
      "members": 2,
      "rooms": [
        {
          "roomType": "Standard Double Room",
          "features": ["King-size bed", "Wi-Fi", "Mini-bar", "Air conditioning", "Flat-screen TV"],
          "priceInINR": 25000,
          "available": true
        },
        {
          "roomType": "Junior Suite",
          "features": ["King-size bed", "Private balcony", "Wi-Fi", "Mini-bar", "Luxury bath amenities"],
          "priceInINR": 40000,
          "available": true
        },
        {
          "roomType": "Presidential Suite",
          "features": ["King-size bed", "Panoramic city views", "Private living area", "Wi-Fi", "Spa bath", "Butler service"],
          "priceInINR": 70000,
          "available": false
        }
      ]
    }
  },
  {
    "id": 2,
    "name": "Taj Mahal",
    "image": "https://media.istockphoto.com/id/475439030/photo/the-taj-mahal.webp?a=1&b=1&s=612x612&w=0&k=20&c=OiRnAuAWFvyT4YcAUOV9ghAxHynRzKyEK3fPx58BvOY=",
    "description": "An ivory-white marble mausoleum located in Agra, India, built in memory of Mumtaz Mahal.",
    "country": "India",
    "tourPackage": {
      "hotel": "Oberoi Amarvilas",
      "days": 4,
      "priceInINR": 80000,
      "members": 2,
      "rooms": [
        {
          "roomType": "Premier Room",
          "features": ["King-size bed", "Views of the Taj Mahal", "Free Wi-Fi", "Luxury bath amenities", "Mini-bar"],
          "priceInINR": 25000,
          "available": true
        },
        {
          "roomType": "Taj View Suite",
          "features": ["King-size bed", "Panoramic views", "Private balcony", "Free Wi-Fi", "Mini-bar", "Jacuzzi"],
          "priceInINR": 45000,
          "available": true
        },
        {
          "roomType": "Mahal Suite",
          "features": ["King-size bed", "Exclusive Taj Mahal view", "Private terrace", "Jacuzzi", "Butler service"],
          "priceInINR": 75000,
          "available": false
        }
      ]
    }
  },
 
  {
    "id": 3,
    "name": "Machu Picchu",
    "image": "https://media.istockphoto.com/id/1010828398/photo/machu-picchu-inca-ruins-peru.webp?a=1&b=1&s=612x612&w=0&k=20&c=BhqXuzhjmhj6XHde_35QJsuYlDsV9FBPHVltWBkzjaE=",
    "description": "An ancient Incan city located in the Andes mountains of Peru, known for its archaeological significance.",
    "country": "Peru",
    "tourPackage": {
      "hotel": "Belmond Sanctuary Lodge",
      "days": 6,
      "priceInINR": 180000,
      "members": 2,
      "rooms": [
        {
          "roomType": "Deluxe Room",
          "features": ["Queen-size bed", "Private terrace", "Mountain views", "Wi-Fi", "Minibar"],
          "priceInINR": 35000,
          "available": true
        },
        {
          "roomType": "Garden View Suite",
          "features": ["King-size bed", "Panoramic views", "Separate sitting area", "Wi-Fi", "Private garden access"],
          "priceInINR": 50000,
          "available": true
        },
        {
          "roomType": "Royal Suite",
          "features": ["King-size bed", "Luxurious spa bath", "Panoramic views", "Private balcony", "Complimentary spa treatments"],
          "priceInINR": 80000,
          "available": false
        }
      ]
    }
  },
  {
    "id": 4,
    "name": "Colosseum",
    "image": "https://media.istockphoto.com/id/683962492/photo/sunrise-at-colosseum-rome-italy.webp?a=1&b=1&s=612x612&w=0&k=20&c=NUm7Aw7jwsS7QIjkW8I1uro_Lk4eos5G0gzN_MlXb1s=",
    "description": "An ancient amphitheater located in Rome, Italy, known for its grandeur and historical significance.",
    "country": "Italy",
    "tourPackage": {
      "hotel": "Hotel Artemide",
      "days": 4,
      "priceInINR": 100000,
      "members": 3,
      "rooms": [
        {
          "roomType": "Classic Room",
          "features": ["Queen-size bed", "Air conditioning", "Mini-bar", "Flat-screen TV", "Safe box"],
          "priceInINR": 20000,
          "available": true
        },
        {
          "roomType": "Superior Room",
          "features": ["King-size bed", "Balcony with city views", "Mini-bar", "Flat-screen TV", "Wi-Fi"],
          "priceInINR": 35000,
          "available": true
        },
        {
          "roomType": "Penthouse Suite",
          "features": ["King-size bed", "Private terrace", "Jacuzzi", "Panoramic views of Rome", "Concierge service"],
          "priceInINR": 60000,
          "available": false
        }
      ]
    }
  },
  {
    "id": 5,
    "name": "Statue of Liberty",
    "image": "https://media.istockphoto.com/id/623595614/photo/new-york-city-skyline-statue-of-liberty.webp?a=1&b=1&s=612x612&w=0&k=20&c=oSUIsK6uKeNEN60xX3j4SErLXE0iy0HQiSpPhHVxW6I=",
    "description": "A colossal neoclassical sculpture on Liberty Island in New York City, symbolizing freedom and democracy.",
    "country": "United States",
    "tourPackage": {
      "hotel": "The Langham, New York",
      "days": 3,
      "priceInINR": 220000,
      "members": 2,
      "rooms": [
        {
          "roomType": "Deluxe King Room",
          "features": ["King-size bed", "Free Wi-Fi", "Mini-fridge", "Work desk", "Luxury bath amenities"],
          "priceInINR": 45000,
          "available": true
        },
        {
          "roomType": "Executive Suite",
          "features": ["King-size bed", "Separate sitting area", "Panoramic city views", "Wi-Fi", "Complimentary breakfast"],
          "priceInINR": 70000,
          "available": true
        },
        {
          "roomType": "Penthouse Suite",
          "features": ["King-size bed", "Private terrace", "Breathtaking views", "Full kitchen", "Concierge service"],
          "priceInINR": 150000,
          "available": false
        }
      ]
    }
  },
  {
    "id": 6,
    "name": "Great Wall of China",
    "image": "https://media.istockphoto.com/id/534739969/photo/china-great-wall-tele-leaves.webp?a=1&b=1&s=612x612&w=0&k=20&c=MwGCYqA8EXAxIKo7hXAAtuc8ARize9xM2UPGGLQSpTA=",
    "description": "A series of fortifications made of various materials, built to protect Chinese states from invasions.",
    "country": "China",
    "tourPackage": {
      "hotel": "Beijing Marriott Hotel",
      "days": 7,
      "priceInINR": 150000,
      "members": 4,
      "rooms": [
        {
          "roomType": "Superior Room",
          "features": ["Queen-size bed", "Free Wi-Fi", "Mini-fridge", "Air conditioning", "Work desk"],
          "priceInINR": 15000,
          "available": true
        },
        {
          "roomType": "Executive Suite",
          "features": ["King-size bed", "Separate living area", "City views", "Free Wi-Fi", "Mini-bar", "Complimentary breakfast"],
          "priceInINR": 30000,
          "available": true
        },
        {
          "roomType": "Presidential Suite",
          "features": ["King-size bed", "Private terrace", "City skyline views", "Fully-equipped kitchen", "Concierge service", "Spa bath"],
          "priceInINR": 55000,
          "available": false
        }
      ]
    }
  },
  {
    "id": 7,
    "name": "Santorini",
    "image": "https://example.com/santorini.jpg",
    "description": "A picturesque island in the Aegean Sea, known for its stunning sunsets and whitewashed buildings.",
    "country": "Greece",
    "tourPackage": {
      "hotel": "Katikies Hotel",
      "days": 6,
      "priceInINR": 120000,
      "members": 2,
      "rooms": [
        {
          "roomType": "Standard Room",
          "features": ["Queen-size bed", "Sea views", "Wi-Fi", "Private balcony", "Mini-bar"],
          "priceInINR": 30000,
          "available": true
        },
        {
          "roomType": "Honeymoon Suite",
          "features": ["King-size bed", "Private plunge pool", "Sea views", "Wi-Fi", "Complimentary breakfast"],
          "priceInINR": 50000,
          "available": true
        },
        {
          "roomType": "Luxury Suite",
          "features": ["King-size bed", "Private terrace", "Jacuzzi", "Panoramic views", "Butler service"],
          "priceInINR": 80000,
          "available": false
        }
      ]
    }
  },
  {
    "id": 8,
    "name": "Sydney Opera House",
    "image": "https://example.com/sydney_opera_house.jpg",
    "description": "A multi-venue performing arts center in Sydney, Australia, famous for its unique architectural design.",
    "country": "Australia",
    "tourPackage": {
      "hotel": "Park Hyatt Sydney",
      "days": 5,
      "priceInINR": 200000,
      "members": 3,
      "rooms": [
        {
          "roomType": "Harbour Room",
          "features": ["King-size bed", "Harbour views", "Free Wi-Fi", "Luxury bath amenities", "Mini-bar"],
          "priceInINR": 35000,
          "available": true
        },
        {
          "roomType": "Opera House View Room",
          "features": ["King-size bed", "Stunning Opera House views", "Mini-bar", "Wi-Fi", "Private balcony"],
          "priceInINR": 60000,
          "available": true
        },
        {
          "roomType": "Presidential Suite",
          "features": ["King-size bed", "Private terrace", "Opera House views", "Jacuzzi", "Butler service"],
          "priceInINR": 120000,
          "available": false
        }
      ]
    }
  },
  // Repeat similar pattern for next 17 locations.


 
    // Previously listed entries (1 to 8)
    {
      "id": 9,
      "name": "Pyramids of Giza",
      "image": "https://example.com/pyramids_of_giza.jpg",
      "description": "Ancient pyramid structures located in Giza, Egypt, known as one of the Seven Wonders of the Ancient World.",
      "country": "Egypt",
      "tourPackage": {
        "hotel": "Mena House Hotel",
        "days": 6,
        "priceInINR": 150000,
        "members": 4,
        "rooms": [
          {
            "roomType": "Standard Room",
            "features": ["Queen-size bed", "Pyramid views", "Air conditioning", "Mini-bar", "Free Wi-Fi"],
            "priceInINR": 25000,
            "available": true
          },
          {
            "roomType": "Deluxe Suite",
            "features": ["King-size bed", "Pyramid views", "Private balcony", "Luxury bath amenities", "Mini-bar"],
            "priceInINR": 45000,
            "available": true
          },
          {
            "roomType": "Presidential Suite",
            "features": ["King-size bed", "Panoramic pyramid views", "Private terrace", "Butler service", "Jacuzzi"],
            "priceInINR": 75000,
            "available": false
          }
        ]
      }
    },
    {
      "id": 10,
      "name": "Niagara Falls",
      "image": "https://example.com/niagara_falls.jpg",
      "description": "A group of three waterfalls located on the border of Canada and the United States, renowned for their beauty.",
      "country": "Canada",
      "tourPackage": {
        "hotel": "Niagara Falls Marriott",
        "days": 4,
        "priceInINR": 100000,
        "members": 3,
        "rooms": [
          {
            "roomType": "Fallsview Room",
            "features": ["King-size bed", "Falls views", "Free Wi-Fi", "Mini-bar", "Flat-screen TV"],
            "priceInINR": 25000,
            "available": true
          },
          {
            "roomType": "Presidential Suite",
            "features": ["King-size bed", "Panoramic Falls views", "Private terrace", "Jacuzzi", "Complimentary breakfast"],
            "priceInINR": 50000,
            "available": true
          },
          {
            "roomType": "Penthouse Suite",
            "features": ["King-size bed", "Private terrace", "Jacuzzi", "Falls views", "Concierge service"],
            "priceInINR": 80000,
            "available": false
          }
        ]
      }
    },
    {
      "id": 11,
      "name": "Mount Everest",
      "image": "https://example.com/mount_everest.jpg",
      "description": "The highest mountain on Earth, located in the Himalayas on the border between Nepal and China.",
      "country": "Nepal/China",
      "tourPackage": {
        "hotel": "Everest View Hotel",
        "days": 8,
        "priceInINR": 220000,
        "members": 2,
        "rooms": [
          {
            "roomType": "Standard Room",
            "features": ["King-size bed", "Mountain views", "Free Wi-Fi", "Mini-bar", "Heated rooms"],
            "priceInINR": 35000,
            "available": true
          },
          {
            "roomType": "Deluxe Room",
            "features": ["King-size bed", "Panoramic mountain views", "Wi-Fi", "Mini-bar", "Luxury bath amenities"],
            "priceInINR": 60000,
            "available": true
          },
          {
            "roomType": "Everest Suite",
            "features": ["King-size bed", "Private balcony", "Breathtaking views of Everest", "Jacuzzi", "Butler service"],
            "priceInINR": 90000,
            "available": false
          }
        ]
      }
    },
    {
      "id": 12,
      "name": "Christ the Redeemer",
      "image": "https://example.com/christ_the_redeemer.jpg",
      "description": "A giant statue of Jesus Christ located in Rio de Janeiro, Brazil, one of the New Seven Wonders of the World.",
      "country": "Brazil",
      "tourPackage": {
        "hotel": "Copacabana Palace",
        "days": 5,
        "priceInINR": 180000,
        "members": 2,
        "rooms": [
          {
            "roomType": "Ocean View Room",
            "features": ["King-size bed", "Ocean views", "Wi-Fi", "Mini-bar", "Flat-screen TV"],
            "priceInINR": 35000,
            "available": true
          },
          {
            "roomType": "Luxury Suite",
            "features": ["King-size bed", "Private terrace", "Ocean views", "Wi-Fi", "Jacuzzi"],
            "priceInINR": 60000,
            "available": true
          },
          {
            "roomType": "Presidential Suite",
            "features": ["King-size bed", "Private pool", "Ocean views", "Butler service", "Complimentary meals"],
            "priceInINR": 120000,
            "available": false
          }
        ]
      }
    },
    {
      "id": 13,
      "name": "Stonehenge",
      "image": "https://example.com/stonehenge.jpg",
      "description": "A prehistoric monument in Wiltshire, England, consisting of a ring of standing stones, whose purpose remains unclear.",
      "country": "United Kingdom",
      "tourPackage": {
        "hotel": "The Royal Crescent Hotel & Spa",
        "days": 4,
        "priceInINR": 130000,
        "members": 2,
        "rooms": [
          {
            "roomType": "Garden Room",
            "features": ["Queen-size bed", "Garden views", "Wi-Fi", "Mini-bar", "Luxury bath amenities"],
            "priceInINR": 25000,
            "available": true
          },
          {
            "roomType": "Deluxe Suite",
            "features": ["King-size bed", "Panoramic garden views", "Mini-bar", "Wi-Fi", "Private balcony"],
            "priceInINR": 45000,
            "available": true
          },
          {
            "roomType": "Grand Suite",
            "features": ["King-size bed", "Private living room", "Luxury bath amenities", "Butler service", "City views"],
            "priceInINR": 80000,
            "available": false
          }
        ]
      }
    },
    {
      "id": 14,
      "name": "Acropolis of Athens",
      "image": "https://example.com/acropolis_of_athens.jpg",
      "description": "An ancient citadel located on a rocky outcrop above Athens, Greece, known for its Parthenon temple.",
      "country": "Greece",
      "tourPackage": {
        "hotel": "Hotel Grande Bretagne",
        "days": 5,
        "priceInINR": 160000,
        "members": 2,
        "rooms": [
          {
            "roomType": "Standard Room",
            "features": ["Queen-size bed", "City views", "Free Wi-Fi", "Mini-bar", "Luxury bath amenities"],
            "priceInINR": 30000,
            "available": true
          },
          {
            "roomType": "Superior Room",
            "features": ["King-size bed", "Private balcony", "City views", "Complimentary breakfast", "Mini-bar"],
            "priceInINR": 50000,
            "available": true
          },
          {
            "roomType": "Penthouse Suite",
            "features": ["King-size bed", "Panoramic city views", "Private terrace", "Jacuzzi", "Butler service"],
            "priceInINR": 100000,
            "available": false
          }
        ]
      }
    },
    {
      "id": 15,
      "name": "Cologne Cathedral",
      "image": "https://example.com/cologne_cathedral.jpg",
      "description": "A Gothic masterpiece located in Cologne, Germany, known for its towering spires and stained glass windows.",
      "country": "Germany",
      "tourPackage": {
        "hotel": "Excelsior Hotel Ernst",
        "days": 3,
        "priceInINR": 120000,
        "members": 2,
        "rooms": [
          {
            "roomType": "Standard Room",
            "features": ["Queen-size bed", "Free Wi-Fi", "Mini-bar", "Flat-screen TV", "Air conditioning"],
            "priceInINR": 20000,
            "available": true
          },
          {
            "roomType": "Luxury Suite",
            "features": ["King-size bed", "Panoramic views of the Cathedral", "Wi-Fi", "Mini-bar", "Complimentary breakfast"],
            "priceInINR": 40000,
            "available": true
          },
          {
            "roomType": "Presidential Suite",
            "features": ["King-size bed", "Private terrace", "Cathedral views", "Jacuzzi", "Butler service"],
            "priceInINR": 70000,
            "available": false
          }
        ]
      }
    },
    {
      "id": 16,
      "name": "Big Ben",
      "image": "https://example.com/big_ben.jpg",
      "description": "The nickname for the Great Bell of the clock at the Palace of Westminster in London, England.",
      "country": "United Kingdom",
      "tourPackage": {
        "hotel": "The Ritz London",
        "days": 4,
        "priceInINR": 150000,
        "members": 2,
        "rooms": [
          {
            "roomType": "Deluxe Room",
            "features": ["King-size bed", "Big Ben views", "Free Wi-Fi", "Luxury bath amenities", "Mini-bar"],
            "priceInINR": 35000,
            "available": true
          },
          {
            "roomType": "Grand Suite",
            "features": ["King-size bed", "Panoramic views", "Private balcony", "Jacuzzi", "Butler service"],
            "priceInINR": 65000,
            "available": true
          },
          {
            "roomType": "Presidential Suite",
            "features": ["King-size bed", "Private terrace", "Big Ben views", "Jacuzzi", "Private dining room"],
            "priceInINR": 120000,
            "available": false
          }
        ]
      }
    },
    // Continue the rest for 25 locations...
 


      // Previously listed entries (1 to 16)
      {
        "id": 17,
        "name": "Sagrada Familia",
        "image": "https://example.com/sagrada_familia.jpg",
        "description": "An unfinished basilica designed by architect Antoni Gaudí, located in Barcelona, Spain.",
        "country": "Spain",
        "tourPackage": {
          "hotel": "Hotel Arts Barcelona",
          "days": 6,
          "priceInINR": 180000,
          "members": 2,
          "rooms": [
            {
              "roomType": "Deluxe Room",
              "features": ["King-size bed", "City views", "Free Wi-Fi", "Mini-bar", "Luxury bath amenities"],
              "priceInINR": 30000,
              "available": true
            },
            {
              "roomType": "Premium Suite",
              "features": ["King-size bed", "Sea views", "Private terrace", "Jacuzzi", "Complimentary breakfast"],
              "priceInINR": 55000,
              "available": true
            },
            {
              "roomType": "Presidential Suite",
              "features": ["King-size bed", "Panoramic views", "Private terrace", "Butler service", "Jacuzzi"],
              "priceInINR": 90000,
              "available": false
            }
          ]
        }
      },
      {
        "id": 18,
        "name": "Alhambra",
        "image": "https://example.com/alhambra.jpg",
        "description": "A palace and fortress complex located in Granada, Spain, known for its Islamic architecture.",
        "country": "Spain",
        "tourPackage": {
          "hotel": "Parador de Granada",
          "days": 5,
          "priceInINR": 160000,
          "members": 2,
          "rooms": [
            {
              "roomType": "Standard Room",
              "features": ["Queen-size bed", "Garden views", "Free Wi-Fi", "Mini-bar", "Private balcony"],
              "priceInINR": 25000,
              "available": true
            },
            {
              "roomType": "Superior Room",
              "features": ["King-size bed", "Alhambra views", "Mini-bar", "Complimentary breakfast", "Wi-Fi"],
              "priceInINR": 40000,
              "available": true
            },
            {
              "roomType": "Suite",
              "features": ["King-size bed", "Private terrace", "Alhambra views", "Jacuzzi", "Butler service"],
              "priceInINR": 75000,
              "available": false
            }
          ]
        }
      },
      {
        "id": 19,
        "name": "The Louvre Museum",
        "image": "https://example.com/louvre_museum.jpg",
        "description": "The world's largest art museum and a historic monument in Paris, France, home to the Mona Lisa.",
        "country": "France",
        "tourPackage": {
          "hotel": "Le Meurice",
          "days": 4,
          "priceInINR": 220000,
          "members": 3,
          "rooms": [
            {
              "roomType": "Standard Room",
              "features": ["King-size bed", "City views", "Free Wi-Fi", "Mini-bar", "Luxury bath amenities"],
              "priceInINR": 30000,
              "available": true
            },
            {
              "roomType": "Deluxe Suite",
              "features": ["King-size bed", "Private terrace", "City views", "Jacuzzi", "Butler service"],
              "priceInINR": 65000,
              "available": true
            },
            {
              "roomType": "Presidential Suite",
              "features": ["King-size bed", "Panoramic views", "Private terrace", "Jacuzzi", "Private dining room"],
              "priceInINR": 120000,
              "available": false
            }
          ]
        }
      },
      {
        "id": 20,
        "name": "Banff National Park",
        "image": "https://example.com/banff_national_park.jpg",
        "description": "Canada's first national park, located in the Canadian Rockies, known for its stunning mountain landscapes and wildlife.",
        "country": "Canada",
        "tourPackage": {
          "hotel": "Fairmont Banff Springs",
          "days": 6,
          "priceInINR": 150000,
          "members": 4,
          "rooms": [
            {
              "roomType": "Mountain View Room",
              "features": ["Queen-size bed", "Mountain views", "Free Wi-Fi", "Mini-bar", "Flat-screen TV"],
              "priceInINR": 25000,
              "available": true
            },
            {
              "roomType": "Luxury Suite",
              "features": ["King-size bed", "Panoramic views", "Jacuzzi", "Mini-bar", "Private balcony"],
              "priceInINR": 50000,
              "available": true
            },
            {
              "roomType": "Presidential Suite",
              "features": ["King-size bed", "Private terrace", "Jacuzzi", "Mountain views", "Butler service"],
              "priceInINR": 100000,
              "available": false
            }
          ]
        }
      },
      {
        "id": 21,
        "name": "Angkor Wat",
        "image": "https://example.com/angkor_wat.jpg",
        "description": "A temple complex in Cambodia, originally built in the 12th century as a Hindu temple, later converted to a Buddhist one.",
        "country": "Cambodia",
        "tourPackage": {
          "hotel": "Sofitel Angkor Phokeethra Golf & Spa Resort",
          "days": 5,
          "priceInINR": 130000,
          "members": 2,
          "rooms": [
            {
              "roomType": "Standard Room",
              "features": ["King-size bed", "Garden views", "Free Wi-Fi", "Mini-bar", "Luxury bath amenities"],
              "priceInINR": 20000,
              "available": true
            },
            {
              "roomType": "Deluxe Room",
              "features": ["King-size bed", "Pool views", "Free Wi-Fi", "Mini-bar", "Complimentary breakfast"],
              "priceInINR": 40000,
              "available": true
            },
            {
              "roomType": "Suite",
              "features": ["King-size bed", "Private terrace", "Jacuzzi", "Pool views", "Butler service"],
              "priceInINR": 80000,
              "available": false
            }
          ]
        }
      },
      {
        "id": 22,
        "name": "Mount Fuji",
        "image": "https://example.com/mount_fuji.jpg",
        "description": "Japan's highest peak, an active stratovolcano, and an iconic symbol of the country.",
        "country": "Japan",
        "tourPackage": {
          "hotel": "Hotel Green Plaza Hakone",
          "days": 4,
          "priceInINR": 120000,
          "members": 3,
          "rooms": [
            {
              "roomType": "Standard Room",
              "features": ["King-size bed", "Mountain views", "Free Wi-Fi", "Mini-bar", "Private balcony"],
              "priceInINR": 25000,
              "available": true
            },
            {
              "roomType": "Deluxe Room",
              "features": ["King-size bed", "Fuji views", "Mini-bar", "Complimentary breakfast", "Jacuzzi"],
              "priceInINR": 50000,
              "available": true
            },
            {
              "roomType": "Presidential Suite",
              "features": ["King-size bed", "Panoramic views", "Private terrace", "Jacuzzi", "Butler service"],
              "priceInINR": 90000,
              "available": false
            }
          ]
        }
      },
      {
        "id": 23,
        "name": "Forbidden City",
        "image": "https://example.com/forbidden_city.jpg",
        "description": "A palace complex in Beijing, China, which served as the home of emperors and their households for almost 500 years.",
        "country": "China",
        "tourPackage": {
          "hotel": "The Peninsula Beijing",
          "days": 5,
          "priceInINR": 200000,
          "members": 4,
          "rooms": [
            {
              "roomType": "Superior Room",
              "features": ["King-size bed", "City views", "Free Wi-Fi", "Mini-bar", "Luxury bath amenities"],
              "priceInINR": 25000,
              "available": true
            },
            {
              "roomType": "Executive Suite",
              "features": ["King-size bed", "Panoramic city views", "Private balcony", "Mini-bar", "Complimentary breakfast"],
              "priceInINR": 60000,
              "available": true
            },
            {
              "roomType": "Presidential Suite",
              "features": ["King-size bed", "Private terrace", "Forbidden City views", "Jacuzzi", "Butler service"],
              "priceInINR": 120000,
              "available": false
            }
          ]
        }
      },
      {
        "id": 24,
        "name": "Palace of Versailles",
        "image": "https://example.com/palace_of_versailles.jpg",
        "description": "A former royal residence located in Versailles, France, known for its opulence and historical significance.",
        "country": "France",
        "tourPackage": {
          "hotel": "Trianon Palace Versailles",
          "days": 5,
          "priceInINR": 210000,
          "members": 3,
          "rooms": [
            {
              "roomType": "Standard Room",
              "features": ["King-size bed", "Garden views", "Free Wi-Fi", "Mini-bar", "Complimentary breakfast"],
              "priceInINR": 25000,
              "available": true
            },
            {
              "roomType": "Deluxe Suite",
              "features": ["King-size bed", "Palace views", "Jacuzzi", "Mini-bar", "Private balcony"],
              "priceInINR": 55000,
              "available": true
            },
            {
              "roomType": "Presidential Suite",
              "features": ["King-size bed", "Panoramic views", "Private terrace", "Jacuzzi", "Butler service"],
              "priceInINR": 100000,
              "available": false
            }
          ]
        }
      },
      {
        "id": 25,
        "name": "Brandenburg Gate",
        "image": "https://example.com/brandenburg_gate.jpg",
        "description": "A neoclassical monument in Berlin, Germany, symbolizing the reunification of East and West Germany.",
        "country": "Germany",
        "tourPackage": {
          "hotel": "Hotel Adlon Kempinski Berlin",
          "days": 4,
          "priceInINR": 180000,
          "members": 2,
          "rooms": [
            {
              "roomType": "Standard Room",
              "features": ["King-size bed", "City views", "Free Wi-Fi", "Mini-bar", "Private balcony"],
              "priceInINR": 25000,
              "available": true
            },
            {
              "roomType": "Executive Suite",
              "features": ["King-size bed", "Brandenburg Gate views", "Jacuzzi", "Mini-bar", "Complimentary breakfast"],
              "priceInINR": 50000,
              "available": true
            },
            {
              "roomType": "Presidential Suite",
              "features": ["King-size bed", "Panoramic city views", "Private terrace", "Jacuzzi", "Butler service"],
              "priceInINR": 100000,
              "available": false
            }
          ]
        }
      }
  
    
  
]
