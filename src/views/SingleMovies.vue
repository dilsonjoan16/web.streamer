<template>
  <div class="SingleMovies mx-auto my-auto">
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
    </header>
    <div class="row col-12">
      <div class="col-lg-6 col-md-4 col-sm-12 mx-auto my-auto">
        <img
          :src="`https://image.tmdb.org/t/p/w500/` + movie.poster_path"
          :alt="movie.original_title"
        />
      </div>
      <div class="col-lg-6 col-md-4 col-sm-12 mx-auto my-auto text-white">
        <h1>
          {{ movie.original_title }}
        </h1>
        <br />
        <i>
          {{ movie.overview }}
        </i>
      </div>
    </div>
    <div class="container">
      <hr />
    </div>

    <img
      :src="`https://image.tmdb.org/t/p/original/` + movie.backdrop_path"
      :alt="movie.original_title"
      class="col-12 mt-3 mb-3"
    />

    <div class="container">
      <hr />
    </div>

    <h1 class="text-white">
      <i>
        Contenido similar a tu eleccion
      </i>
    </h1>

    <div class="container">
      <hr />
    </div>
    <!--Cards de peliculas similares-->
    <div class="card-group">
      <div
        v-for="(movie4, key) in movie2"
        :key="key"
        class="col-sm-12 col-md-6 col-lg-4 mx-auto my-2"
        @click="mostrar(movie4.id)"
        style="cursor: pointer"
      >
        <div class="card p-2">
          <img
            :src="`https://image.tmdb.org/t/p/w500/` + movie4.poster_path"
            :alt="movie.original_title"
          />
          <!--<div class="card-body">
                                    <h5 class="card-title">{{movie.title}}</h5>
                                    <p class="card-text">{{movie.overview}}</p>
                                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                </div>-->
        </div>
      </div>
    </div>
    <div class="container">
      <hr />
    </div>

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
                <h3>Follow us</h3>
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
                    <router-link to="/">Home</router-link>
                    <!--<a href="#">Home</a>-->
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
import axios from "axios";
export default {
  name: "SingleMovies",
  data: function() {
    return {
      movieid: null,
      movie: [],
      movie2: [],
      busqueda: [],
    };
  },
  methods: {
    async getsimilarmovies() {
      this.movieid = this.$route.params.id;
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/" +
          this.movieid +
          "/similar?api_key=9cce8ac649022e53376ee7864fe9a772&language=en-US&page=1"
      );
      this.movie2 = response.data.results;
      console.log(this.movie2);
    },
    mostrar(id) {
      this.$router.push("/singlemovie/" + id);
    },
    buscar(busqueda) {
      this.busqueda = busqueda;
      this.$router.push("/search/" + busqueda);
    },
  },
  created() {
    this.getsimilarmovies();
  },
  mounted: function() {
    this.movieid = this.$route.params.id;
    axios
      .get(
        "https://api.themoviedb.org/3/movie/" +
          this.movieid +
          "?api_key=9cce8ac649022e53376ee7864fe9a772&language=en-US"
      )
      .then((datos) => {
        this.movie = datos.data;
        console.log(datos);
      });
  },
};
</script>
<style scoped>
.SingleMovies {
  background: #000000; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #434343,
    #000000
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #434343,
    #000000
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
.header {
  background: transparent !important;
  min-height: 10vh;
  background-size: cover;
}
</style>
