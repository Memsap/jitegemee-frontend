<script setup>
import {ref} from 'vue'
  const courses = ref([
  {
    name: "Computer Science",
    school: "School of Computing and Engineering",
    description: "Covers algorithms, programming, data structures, AI, and system design to prepare students for dynamic tech careers.",
    intake: "July 2025"
  },
  {
    name: "Business Administration",
    school: "School of Business and Economics",
    description: "Equips students with leadership, marketing, finance, and operations skills for success in global business environments.",
    intake: "July 2025"
  },
  {
    name: "Mechanical Engineering",
    school: "School of Engineering and Technology",
    description: "Focuses on designing, analyzing, and manufacturing mechanical systems using scientific and mathematical principles.",
    intake: "July 2025"
  },
  {
    name: "Psychology",
    school: "School of Humanities and Social Sciences",
    description: "Explores human behavior, emotions, and cognitive processes with a foundation in research and clinical application.",
    intake: "July 2025"
  },
  {
    name: "Law",
    school: "School of Law",
    description: "Provides in-depth understanding of legal systems, critical thinking, and advocacy for a career in legal practice or justice.",
    intake: "July 2025"
  },
  {
    name: "Architecture",
    school: "School of Built Environment",
    description: "A design-focused course combining creativity, sustainability, and technical skills to shape the built environment.",
    intake: "July 2025"
  },
  {
    name: "Nursing",
    school: "School of Health Sciences",
    description: "Trains compassionate, evidence-based professionals through clinical exposure and theoretical grounding in patient care.",
    intake: "July 2025"
  },
  {
    name: "International Relations",
    school: "School of Social and Political Sciences",
    description: "Focuses on diplomacy, global governance, conflict resolution, and international cooperation across cultures and nations.",
    intake: "July 2025"
  },
  {
    name: "Data Science",
    school: "School of Computing and Engineering",
    description: "Blends statistics, coding, and machine learning to analyze data and support strategic decision-making in any field.",
    intake: "July 2025"
  },
  {
    name: "Mass Communication",
    school: "School of Media and Communication",
    description: "Teaches journalism, digital content creation, and PR strategies for impactful communication in the modern world.",
    intake: "July 2025"
  },
  {
    name: "Electrical Engineering",
    school: "School of Engineering and Technology",
    description: "Focuses on electrical systems, electronics, power generation, and emerging technologies like smart grids and IoT.",
    intake: "July 2025"
  },
  {
    name: "Finance",
    school: "School of Business and Economics",
    description: "Covers corporate finance, investment analysis, and financial modeling for careers in banking and global markets.",
    intake: "July 2025"
  },
  {
    name: "Software Engineering",
    school: "School of Computing and Engineering",
    description: "Emphasizes software design, testing, development lifecycles, and agile methodologies for scalable applications.",
    intake: "July 2025"
  },
  {
    name: "Biotechnology",
    school: "School of Life Sciences",
    description: "Integrates biology and technology to address challenges in medicine, agriculture, and environmental conservation.",
    intake: "July 2025"
  },
  {
    name: "Education",
    school: "School of Education and Human Development",
    description: "Prepares future educators through curriculum planning, child psychology, and modern pedagogical practices.",
    intake: "July 2025"
  },
  {
    name: "Marketing",
    school: "School of Business and Economics",
    description: "Covers branding, digital marketing, consumer behavior, and strategy for competitive market positioning.",
    intake: "July 2025"
  },
  {
    name: "Environmental Science",
    school: "School of Natural and Environmental Sciences",
    description: "Focuses on ecological systems, sustainability, and environmental policy to address global ecological challenges.",
    intake: "July 2025"
  },
  {
    name: "Cybersecurity",
    school: "School of Computing and Engineering",
    description: "Teaches risk management, ethical hacking, and network security to protect digital infrastructure and data.",
    intake: "July 2025"
  },
  {
    name: "Public Health",
    school: "School of Health Sciences",
    description: "Focuses on health promotion, disease prevention, epidemiology, and policy to improve community health outcomes.",
    intake: "July 2025"
  },
  {
    name: "Journalism",
    school: "School of Media and Communication",
    description: "Trains students in investigative reporting, storytelling, ethics, and multimedia production for modern journalism.",
    intake: "July 2025"
  }
]);
</script>

<template>
<v-container>
    <v-row>
      <v-col md ="4" v-for="course in courses"> 
      <v-card color = "cyan-darken-4"> 
        <v-card-item>
          <v-card-title>{{course.name}}</v-card-title>

          <v-card-subtitle>{{course.school}}</v-card-subtitle>
        </v-card-item>

        <v-card-text>
          {{course.description}}
        </v-card-text>
    <v-card-text>
            {{ course.intake }}
        </v-card-text>
      </v-card>
    </v-col> 
 </v-row>
</v-container>
</template>