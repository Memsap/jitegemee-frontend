import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useEventsStore = defineStore('events', () => {
   const events = ref([
  {
    name: "Tech Innovators Summit 2025",
    image: "../../public/Images/dmitry-spravko-t0Ddsj0WY4o-unsplash.jpg",
    date: "2025-07-10",
    time: "09:00 - 16:00",
    location: "Strathmore University Auditorium",
    category: "Conference",
    description: "Explore cutting-edge technologies and network with industry leaders driving Africa’s digital transformation.",
    
  },
  {
    name: "Women in Leadership Brunch",
    image: "../../public/Images/sable-flow-T74mVg__F_k-unsplash.jpg",
    date: "2025-08-15",
    time: "11:00 - 14:00",
    location: "Villa Rosa Kempinski",
    category: "Networking",
    description: "An exclusive brunch bringing together trailblazing women in governance, entrepreneurship, and innovation.",
    
  },
  {
    name: "Model United Nations Conference",
    image: "../../public/Images/mathias-reding-yfXhqAW5X0c-unsplash.jpg",
    date: "2025-09-01",
    time: "08:30 - 17:30",
    location: "UN Headquarters, Nairobi",
    category: "Academic",
    description: "A diplomatic simulation where delegates represent countries and debate pressing global issues.",
    
  },
  {
    name: "Annual Career & Internship Fair",
    image: "../../public/Images/sewupari-studio-TsJR6I2TDZc-unsplash.jpg",
    date: "2025-07-30",
    time: "10:00 - 16:00",
    location: "Strathmore Sports Hall",
    category: "Professional Development",
    description: "Meet top employers, submit your CV, and discover internship and career opportunities.",
    
  },
  {
    name: "Mental Health Awareness Walk",
    image: "../../public/Images/louis-galvez-I8gQVrDcXzY-unsplash.jpg",
    date: "2025-07-22",
    time: "07:00 - 11:00",
    location: "Uhuru Park, Nairobi",
    category: "Wellness",
    description: "A wellness walk to promote mental health awareness and emotional well-being across campuses.",
   
  },
     
    ])
   
  return { events }
})