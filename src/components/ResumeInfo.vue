<template>
  <v-flex xs12 class="vs_info my-2">
    <v-layout row wrap>
      <!-- INFO -->
      <v-flex xs10 class="pl-2 pr-5">
        <!-- Perfil -->
        <v-layout column class="my-4">
          <v-flex xs12 class="vs_section_title">Perfil</v-flex>
          <v-flex
            xs12
            class="vs_section_text"
          >Programador de aplicaciones, consultor GIS y responsable de producto: Posidonia SPACE y Local SPACE en Prodevelop. Me encanta el desarrollo web con VueJS y además tengo conocimientos avanzados de instalación y mantenimiento de componentes de servidor como bases de datos espaciales y servidores de mapas. Entre mis habilidades, me gustaría destacar: desarrollo Front-end, Análisis GIS, Geomática, Cartografía, CAD, Gestión de bases de datos espaciales, DevOps, VueJS, Scrum, Integración de soluciones CARTO, Software Libre (FOSS4G) y utilizo diariamente los lenguajes de programación (Javascript, Java, SQL, CSS)</v-flex>
        </v-layout>
        <!-- Historial laboral -->
        <v-layout column class="my-4">
          <v-flex xs12 class="vs_section_title">Historial laboral</v-flex>
          <v-flex
            xs12
            class="vs_section_subtitle"
          >Analista SIG al Centro de investigaciones sobre desertificación (CIDE) (CSIC-UV-GV), Albal (Valencia)</v-flex>
          <v-flex xs12 class="vs_section_dates">Junio 2002 - Julio 2003</v-flex>
          <v-flex
            xs12
            class="vs_section_text"
          >Estudio con técnicas GIS de la evolución de los usos del suelo en los LICs de la Comunitat Valenciana</v-flex>
          <!-- -->
          <v-flex
            xs12
            class="vs_section_subtitle"
          >Analista SIG al Centro de investigaciones sobre desertificación (CIDE) (CSIC-UV-GV), Albal (Valencia)</v-flex>
          <v-flex xs12 class="vs_section_dates">Junio 2002 - Julio 2003</v-flex>
          <v-flex
            xs12
            class="vs_section_text"
          >Estudio con técnicas GIS de la evolución de los usos del suelo en los LICs de la Comunitat Valenciana</v-flex>
          <!-- -->
          <v-flex
            xs12
            class="vs_section_subtitle"
          >Analista SIG al Centro de investigaciones sobre desertificación (CIDE) (CSIC-UV-GV), Albal (Valencia)</v-flex>
          <v-flex xs12 class="vs_section_dates">Junio 2002 - Julio 2003</v-flex>
          <v-flex
            xs12
            class="vs_section_text"
          >Estudio con técnicas GIS de la evolución de los usos del suelo en los LICs de la Comunitat Valenciana</v-flex>
        </v-layout>
        <!-- Educación -->
        <v-layout column class="my-4">
          <v-flex xs12 class="vs_section_title">Edución</v-flex>
          <v-flex
            xs12
            class="vs_section_text"
          >Programador de aplicaciones, consultor GIS y responsable de producto: Posidonia SPACE y Local SPACE en Prodevelop. Me encanta el desarrollo web con VueJS y además tengo conocimientos avanzados de instalación y mantenimiento de componentes de servidor como bases de datos espaciales y servidores de mapas. Entre mis habilidades, me gustaría destacar: desarrollo Front-end, Análisis GIS, Geomática, Cartografía, CAD, Gestión de bases de datos espaciales, DevOps, VueJS, Scrum, Integración de soluciones CARTO, Software Libre (FOSS4G) y utilizo diariamente los lenguajes de programación (Javascript, Java, SQL, CSS)</v-flex>
        </v-layout>
        <!-- Actividades extra curriculares -->
        <v-layout column class="my-4">
          <v-flex xs12 class="vs_section_title">Actividades extra curriculares</v-flex>
          <v-flex
            xs12
            class="vs_section_text"
          >Programador de aplicaciones, consultor GIS y responsable de producto: Posidonia SPACE y Local SPACE en Prodevelop. Me encanta el desarrollo web con VueJS y además tengo conocimientos avanzados de instalación y mantenimiento de componentes de servidor como bases de datos espaciales y servidores de mapas. Entre mis habilidades, me gustaría destacar: desarrollo Front-end, Análisis GIS, Geomática, Cartografía, CAD, Gestión de bases de datos espaciales, DevOps, VueJS, Scrum, Integración de soluciones CARTO, Software Libre (FOSS4G) y utilizo diariamente los lenguajes de programación (Javascript, Java, SQL, CSS)</v-flex>
        </v-layout>
      </v-flex>
      <!-- SKILLSETS -->
      <v-flex xs2 class="vs_rightsection pa-5">
        <!-- Competencias -->
        <v-layout column class="my-3">
          <v-flex xs12 class="vs_section_title">Competencias</v-flex>
          <v-flex xs12>
            <skill-bar title="Javascript" :value="90" color="pink darken-3"></skill-bar>
          </v-flex>
          <v-flex xs12>
            <skill-bar title="GIS" :value="100" color="pink darken-3"></skill-bar>
          </v-flex>
          <v-flex xs12>
            <skill-bar title="VueJs" :value="80" color="pink darken-3"></skill-bar>
          </v-flex>
          <v-flex xs12>
            <skill-bar title="Cartografía" :value="100" color="pink darken-3"></skill-bar>
          </v-flex>
        </v-layout>
        <!-- Idiomas -->
        <v-layout column class="my-3">
          <v-flex xs12 class="vs_section_title">Idiomas</v-flex>
          <v-flex xs12>
            <skill-bar title="Castellano" :value="100" color="deep-purple darken-4"></skill-bar>
          </v-flex>
          <v-flex xs12>
            <skill-bar title="Valenciano" :value="100" color="deep-purple darken-4"></skill-bar>
          </v-flex>
          <v-flex xs12>
            <skill-bar title="Inglés" :value="60" color="deep-purple darken-4"></skill-bar>
          </v-flex>
        </v-layout>
        <!-- Links -->
        <v-layout column class="my-3">
          <v-flex xs12 class="vs_section_title">Links</v-flex>
          <v-flex xs12>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/vsanjaime/"
              class="vs_link"
            >Linkedin</a>
          </v-flex>
          <v-flex xs12>
            <a target="_blank" href="https://twitter.com/visancal" class="vs_link">Twitter</a>
          </v-flex>
          <v-flex xs12>
            <a target="_blank" href="https://github.com/visancal" class="vs_link">github</a>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-flex>
</template>

<script>
import SkillBar from "@/components/SkillBar";

export default {
  name: "resumeinfo",
  components: { SkillBar }
};
</script>


<style scoped>
.vs_section_title {
  color: #283593;
  font-size: 1.4rem;
  font-weight: bold;
}
.vs_section_subtitle {
  font-size: 1.1rem;
  font-weight: 700;
  margin-left: 2rem;
}
.vs_section_dates {
  font-size: 1rem;
  color: gray;
  margin-left: 2rem;
}
.vs_section_text {
  font-size: 1rem;
  margin-left: 2rem;
}
.vs_rightsection {
  background-color: #f5f5f5;
  border-radius: 5px;
}
</style>
