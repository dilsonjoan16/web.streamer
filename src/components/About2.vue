<template>
  <div>
    <header class="header">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <!--<a class="navbar-brand" href="#">Navbar</a>-->
        <button
          class="navbar-toggler"
          id="color-line"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <router-link to="/" class="nav-link text-white"
                >Home<span class="sr-only">(current)</span></router-link
              >
              <!--<a class="nav-link text-white" href="">Inicio<span class="sr-only">(current)</span></a>-->
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link text-white"
                >Nosotros</router-link
              >
              <!--<a class="nav-link text-white" href="./components/Nosotros.vue">Nosotros</a>-->
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle text-white"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Contenido
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <router-link to="/movies" class="dropdown-item"
                  >Mejor valorada</router-link
                >
                <router-link to="/bestmovies" class="dropdown-item"
                  >Mejor del momento</router-link
                >
                <!--<a class="dropdown-item" href="./components/Movies.vue">Mejor valoradas</a>
                <a class="dropdown-item" href="./components/NewMovies.vue">Mejor del momento</a>-->
                <div class="dropdown-divider"></div>
                <router-link to="/extramovies" class="dropdown-item"
                  >Algo mas</router-link
                >
                <!--<a class="dropdown-item" href="#">Algo mas</a>-->
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled text-white" href="#"
                >Streamers Company</a
              >
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              v-model="busqueda"
            />
            <button
              class="btn btn-outline-success my-2 my-sm-0"
              type="submit"
              @click="buscar(busqueda)"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
      <div>
        <div class="container">
          <div class="row">
            <div class="col-6 mx-auto">
              <h1 class="text-white">
                Streamers
              </h1>
              <p class="text-white font-italic">
                Una experiencia inolvidable
              </p>
              <div class="list-group hover-zoom">
                <a
                  id="titulo"
                  class="list-group-item list-group-item-action"
                  href="#list-item-1"
                >
                  <button class="btn btn-outline-success my-2 my-sm-0">
                    Echarle un vistazo
                  </button>
                </a>
              </div>
              <!--<div id="scroll" class="btn btn-outline-secondary btn-sm list-group">
                <a id="scroll2" class="list-group-item list-group-item-action text-secondary p-2" href="#list-item-1">
                <h4>
                    Echarle un vistazo !
                </h4>
                </a> 
                </div>-->
            </div>
          </div>
        </div>
      </div>
    </header>
    <hr />
    <div
      data-spy="scroll"
      data-target="#scroll"
      data-offset="0"
      class="scrollspy-example"
    >
      <div id="list-item-1">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-12 text-white mx-auto my-auto">
              <p>
                <span>
                  <h3>
                    Nosotros
                  </h3>
                  <i>
                    Somos una empresa dedicada al entretenimiento familiar, a
                    traves de contenido multimedia via streaming, siguiendo un
                    principio que nos caracteriza y desmarca de la competencia;
                    <strong>
                      Convertir cualquier momento en familia en una experiencia
                      digna de recordar </strong
                    >. Gracias a esto nuestra plataforma se ha desmarcado
                    exitosamente en el mercado
                  </i>
                  <hr />
                </span>
                <br />
                <span>
                  <h3>
                    Equipo de trabajo
                  </h3>
                  <i>
                    Nuestro equipo se compone por jovenes motivados y ansiosos
                    por generarle la satisfaccion mas alta a nuestros publico y
                    consumidores, en su mayoria son desarrolladores de contenido
                    web sumamente entregados a la causa y altamente capacitados
                    para brindar el mejor desempeño . Buscando siempre estar
                    preparados a cualquier imprevisto, bancando nuestra
                    plataforma en la vanguardia del mercado
                  </i>
                  <hr />
                </span>
                <br />
                <span>
                  <h3>
                    Nuestro alcance
                  </h3>
                  <i>
                    Actualmente nuestra plataforma tiene alcance mundial, nos
                    hemos desarrollado y adaptado correctamente al entorno
                    internacional, un entorno altamente exigente y hostil. Pero
                    gracias al nivel de competitividad de nuestro personal hemos
                    logrado con exito dicho paradigma; ademas nuestro publico
                    objetivo es la familia comun creando asi una generalidad muy
                    reconfortante a nuestros consumidores en general,
                    permitiendonos abarcar gran parte del mercado.
                  </i>
                </span>
                <br />
                <span>
                  <br />
                  <h5>
                    <i>
                      <strong>
                        CEO Elon Musk @TheBigMan_2000
                      </strong>
                    </i>
                  </h5>
                </span>
              </p>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 my-auto mx-auto">
              <img
                id="imago"
                v-bind:src="require('../assets/logo-pagina.jpg')"
                alt="logo-imago"
                class="p-2 bg-white rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr />
    <footer id="dk-footer" class="dk-footer">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-lg-4">
            <div class="dk-footer-box-info mt-5">
              <!--<a href="index.html" class="footer-logo">
                            <img src="images/footer_logo.png" alt="footer_logo" class="img-fluid">
                        </a>-->
              <p class="footer-info-text text-white">
                <span><h4>Streamers</h4></span>
                te ofrece producciones espectaculares, el mejor contenido en la
                mejor plataforma y un excelente servicio de peliculas, series y
                estelares cubiertos por los mejores artistas de la gran
                pantalla. Te aseguramos un momento de calidad en Familia
              </p>
              <div class="footer-social-link">
                <h3>Siguenos en las redes</h3>
                <ul>
                  <li>
                    <a href="#">
                      <i class="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-google-plus"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <!-- End Social link -->
            </div>
            <!-- End Footer info -->
            <div class="footer-awarad">
              <img src="images/icon/best.png" alt="" />
              <p>Best Streaming Company 2021</p>
            </div>
          </div>
          <!-- End Col -->
          <div class="col-md-12 col-lg-8">
            <div class="row">
              <div class="col-md-6">
                <div class="contact-us">
                  <div class="contact-icon">
                    <i class="fa fa-map-o" aria-hidden="true"></i>
                  </div>
                  <!-- End contact Icon -->
                  <div class="contact-info">
                    <h3>San Cristobal Venezuela</h3>
                    <p>5353 Road Avenue</p>
                  </div>
                  <!-- End Contact Info -->
                </div>
                <!-- End Contact Us -->
              </div>
              <!-- End Col -->
              <div class="col-md-6">
                <div class="contact-us contact-us-last">
                  <div class="contact-icon">
                    <i
                      class="fa fa-volume-control-phone"
                      aria-hidden="true"
                    ></i>
                  </div>
                  <!-- End contact Icon -->
                  <div class="contact-info">
                    <h3>+58 555 555</h3>
                    <p>Llamanos !</p>
                  </div>
                  <!-- End Contact Info -->
                </div>
                <!-- End Contact Us -->
              </div>
              <!-- End Col -->
            </div>
            <!-- End Contact Row -->
            <div class="row">
              <div class="col-md-12 col-lg-6">
                <div class="footer-widget footer-left-widget">
                  <div class="section-heading">
                    <h3>Useful Links</h3>
                    <span class="animate-border border-black"></span>
                  </div>
                  <ul>
                    <li>
                      <a href="#">About us</a>
                    </li>
                    <li>
                      <a href="#">Services</a>
                    </li>
                    <li>
                      <a href="#">Projects</a>
                    </li>
                    <li>
                      <a href="#">Our Team</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="#">Contact us</a>
                    </li>
                    <li>
                      <a href="#">Blog</a>
                    </li>
                    <li>
                      <a href="#">Testimonials</a>
                    </li>
                    <li>
                      <a href="#">Faq</a>
                    </li>
                  </ul>
                </div>
                <!-- End Footer Widget -->
              </div>
              <!-- End col -->
              <div class="col-md-12 col-lg-6">
                <div class="footer-widget">
                  <div class="section-heading">
                    <h3>Subscribe</h3>
                    <span class="animate-border border-black"></span>
                  </div>
                  <p class="text-white">
                    <!-- Don’t miss to subscribe to our new feeds, kindly fill the form below. -->
                    No olvides suscribirte y recibir en tu correo nuestros
                    titulos estelares !
                  </p>
                  <form action="#">
                    <div class="form-row">
                      <div class="col dk-footer-form">
                        <input
                          type="email"
                          class="form-control"
                          placeholder="Email Address"
                        />
                        <button type="submit">
                          <i class="fa fa-send"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                  <!-- End form -->
                </div>
                <!-- End footer widget -->
              </div>
              <!-- End Col -->
            </div>
            <!-- End Row -->
          </div>
          <!-- End Col -->
        </div>
        <!-- End Widget Row -->
      </div>
      <!-- End Contact Container -->

      <div class="copyright">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <span>Copyright © 2021, All Right Reserved Streamers</span>
            </div>
            <!-- End Col -->
            <div class="col-md-6">
              <div class="copyright-menu">
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Terms</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <!-- End col -->
          </div>
          <!-- End Row -->
        </div>
        <!-- End Copyright Container -->
      </div>
      <!-- End Copyright -->
      <!-- Back to top -->
      <div id="back-to-top" class="back-to-top">
        <button
          class="btn btn-dark"
          title="Back to Top"
          style="display: block;"
        >
          <i class="fa fa-angle-up"></i>
        </button>
      </div>
      <!-- End Back to top -->
    </footer>
  </div>
</template>
<script>
export default {
  name: "About2",
  data() {
    return {
      busqueda: [],
    };
  },
  methods: {
    buscar(busqueda) {
      this.busqueda = busqueda;
      this.$router.push("/search/" + busqueda);
    },
  },
};
</script>
<style scoped>
/*ESTILOS DEL NAVBAR*/
.header {
  background: url(../assets/familia2.jpg) no-repeat center;
  background-size: cover;
  min-height: 100vh;
}
.header .navbar {
  background-color: transparent !important;
}
#imago {
  width: 100%;
}
</style>
