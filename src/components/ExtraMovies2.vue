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
                Tu plataforma de Streaming favorita
              </h1>
              <p class="text-white font-italic">
                En Streamers entendemos que no toda la diversion queda en las
                peliculas y estrenos, asi que decidimos reservar este rincon
                para series de TV, siempre avanzando e innovando en nuestro
                contenido y plataforma buscando alcanzar siempre el mejor
                performance junto a nuestro magnifico #TeamStreamers.
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

    <div class="container">
      <hr />
    </div>
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-6 col-sm-12 my-auto mx-auto">
          <img
            v-bind:src="require('../assets/logomediano.png')"
            alt="logo-imago"
            class="p-2 bg-white rounded"
          />
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12 mt-2">
          <i class="text-white">
            Streamers, unete a la nueva tendencia en visualizacion de material y
            contenido multimedia. Nuestra plataforma te ofrece una experiencia
            inigualable, permitiendote hacer de un momento en familia un
            recuerdo memorable, fieles a nuestra primicia de convertir momentos
            en verdaderas aventuras junto a tu familia.

            <hr />

            "Lo unico que hacia falta para bancarla en la posicion #1. Este
            lugar es el mejor nicho para los conocedores del buen contenido
            multimedia, grandioso recurso para convertir un momento en familia
            en una inolvidable experiecia junto a mis seres queridos!
            #TeamStreamers #UltraStreamers" <br /><br />
            <strong>Gio Simeone @Giosimeo03</strong>

            <hr />

            " Un rincon pensado para los amantes de las buenas series de
            television! Grandiosa idea por parte del #TeamStreamers. Tremenda
            plataforma, sin duda alguna #SoyStreamers! " <br /><br />
            <strong>Mayren Garcia @Emmg14</strong>

            <hr />

            "Nada que agregar, en todo piensa el #TeamStreamers, todo lo cubren
            y se siente el verdadero respaldo de la plataforma, excelente
            servicio y el mejor contenido del mercado. Bancados en el Top como
            siempre #GoTeamStreamers #GoStreamers" <br /><br />
            <strong>Giuliana Vivas @Emgivv2001</strong>
          </i>
        </div>
      </div>
      <hr />
    </div>
    <!-- Inicio del Carrousel-->
    <div
      data-spy="scroll"
      data-target="#scroll"
      data-offset="0"
      class="scrollspy-example"
    >
      <div id="list-item-1">
        <div class="p-1 bg-white rounded">
          <div
            id="carouselExampleFade1"
            class="carousel slide carousel-fade"
            data-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  :src="
                    `https://image.tmdb.org/t/p/w1280/b0WmHGc8LHTdGCVzxRb3IBMur57.jpg`
                  "
                  class="d-block w-100"
                  :alt="`The Falcon and the Winter Soldier`"
                />
              </div>
              <div class="carousel-item">
                <img
                  :src="
                    `https://image.tmdb.org/t/p/w1280/mZjZgY6ObiKtVuKVDrnS9VnuNlE.jpg`
                  "
                  class="d-block w-100"
                  :alt="`The Good Doctor`"
                />
              </div>
              <div class="carousel-item">
                <img
                  :src="
                    `https://image.tmdb.org/t/p/w1280/z59kJfcElR9eHO9rJbWp4qWMuee.jpg`
                  "
                  class="d-block w-100"
                  :alt="`The Flash`"
                />
              </div>
              <div class="carousel-item">
                <img
                  :src="
                    `https://image.tmdb.org/t/p/w1280/qZtAf4Z1lazGQoYVXiHOrvLr5lI.jpg`
                  "
                  class="d-block w-100"
                  :alt="`Riverdale`"
                />
              </div>
              <div class="carousel-item">
                <img
                  :src="
                    `https://image.tmdb.org/t/p/w1280/edmk8xjGBsYVIf4QtLY9WMaMcXZ.jpg`
                  "
                  class="d-block w-100"
                  :alt="`Grey's Anatomy`"
                />
              </div>
              <div class="carousel-item">
                <img
                  :src="
                    `https://image.tmdb.org/t/p/w1280/uro2Khv7JxlzXtLb8tCIbRhkb9E.jpg`
                  "
                  class="d-block w-100"
                  :alt="`The Walking Dead`"
                />
              </div>
              <div class="carousel-item">
                <img
                  :src="
                    `https://image.tmdb.org/t/p/w1280/57vVjteucIF3bGnZj6PmaoJRScw.jpg`
                  "
                  class="d-block w-100"
                  :alt="`WandaVision`"
                />
              </div>
              <div class="carousel-item">
                <img
                  :src="
                    `https://image.tmdb.org/t/p/w1280/aq2yEMgRQBPfRkrO0Repo2qhUAT.jpg`
                  "
                  class="d-block w-100"
                  :alt="`Vikings`"
                />
              </div>
              <div class="carousel-item">
                <img
                  :src="
                    `https://image.tmdb.org/t/p/w1280/1qOA3kMtQO8bjnW8M2smjA8tp10.jpg`
                  "
                  class="d-block w-100"
                  :alt="`Élite`"
                />
              </div>
              <div class="carousel-item">
                <img
                  :src="
                    `https://image.tmdb.org/t/p/w1280/suopoADq0k8YZr4dQXcU6pToj6s.jpg`
                  "
                  class="d-block w-100"
                  :alt="`Game of Thrones`"
                />
              </div>
              <div class="carousel-item">
                <img
                  :src="
                    `https://image.tmdb.org/t/p/w1280/9ijMGlJKqcslswWUzTEwScm82Gs.jpg`
                  "
                  class="d-block w-100"
                  :alt="`The Mandalorian`"
                />
              </div>
              <div class="carousel-item">
                <img
                  :src="
                    `https://image.tmdb.org/t/p/w1280/oAkpvVvoyZWMo9cpNk3aQoVKsjM.jpg`
                  "
                  class="d-block w-100"
                  :alt="`Sin senos sí hay paraíso`"
                />
              </div>
              <div class="carousel-item">
                <img
                  :src="
                    `https://image.tmdb.org/t/p/w1280/mGVrXeIjyecj6TKmwPVpHlscEmw.jpg`
                  "
                  class="d-block w-100"
                  :alt="`The Boys`"
                />
              </div>
              <div class="carousel-item">
                <img
                  :src="
                    `https://image.tmdb.org/t/p/w1280/1bztL5ZgA9m8OSxO51TBYyoVO8P.jpg`
                  "
                  class="d-block w-100"
                  :alt="`Tribes of Europa`"
                />
              </div>
              <div class="carousel-item">
                <img
                  :src="
                    `https://image.tmdb.org/t/p/w1280/8A2IYYRLM5rR0hYwbWJr9KLPnUu.jpg`
                  "
                  class="d-block w-100"
                  :alt="`Smallville`"
                />
              </div>
              <div class="carousel-item">
                <img
                  :src="
                    `https://image.tmdb.org/t/p/w1280/fPF6h8LLtZ40NRqkHfx2DvFbmkW.jpg`
                  "
                  class="d-block w-100"
                  :alt="`Resident Alien`"
                />
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleFade1"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleFade1"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- Fin del carousel -->
    <div class="container">
      <hr />
    </div>

    <div class="container">
      <div class="row">
        <div class="mx-auto">
          <!-- Cards con peliculas 1era parte -->
          <div class="card-group">
            <div
              v-for="(movie, key) in movies"
              :key="key"
              class="col-sm-12 col-md-6 col-lg-4 mx-auto my-2"
              @click="mostrar(movie.id)"
            >
              <div class="card p-2">
                <img
                  :src="`https://image.tmdb.org/t/p/w500/` + movie.poster_path"
                  :alt="movie.original_name"
                />
                <!--<div class="card-body">
                                    <h5 class="card-title">{{movie.title}}</h5>
                                    <p class="card-text">{{movie.overview}}</p>
                                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                </div>-->
              </div>
            </div>
          </div>
          <hr />
          <div class="card-group">
            <div
              v-for="(movie2, key) in movies2"
              :key="key"
              class="col-sm-12 col-md-6 col-lg-4 mx-auto my-2"
              @click="mostrar(movie.id)"
            >
              <div class="card p-2">
                <img
                  :src="`https://image.tmdb.org/t/p/w500/` + movie2.poster_path"
                  :alt="movie2.original_name"
                />
                <!--<div class="card-body">
                                    <h5 class="card-title">{{movie.title}}</h5>
                                    <p class="card-text">{{movie.overview}}</p>
                                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                </div>-->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--Fin de cards-->
    <div class="container">
      <hr />
    </div>
    <!-- Inicio del Carrousel-->
    <div class="p-1 bg-white rounded">
      <div
        id="carouselExampleFade2"
        class="carousel slide carousel-fade"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              :src="
                `https://image.tmdb.org/t/p/w1280/gZzIQxo2ukFSdZGtlttA0wI6kax.jpg`
              "
              class="d-block w-100"
              :alt="`Teen Wolf`"
            />
          </div>
          <div class="carousel-item">
            <img
              :src="
                `https://image.tmdb.org/t/p/w1280/q3pCsNvJ7CmdJUz2sJEEUY3pOPC.jpg`
              "
              class="d-block w-100"
              :alt="`The Mentalist`"
            />
          </div>
          <div class="carousel-item">
            <img
              :src="
                `https://image.tmdb.org/t/p/w1280/v2moumGovVAmDASYkjakIl2WrOM.jpg`
              "
              class="d-block w-100"
              :alt="`MacGyver`"
            />
          </div>
          <div class="carousel-item">
            <img
              :src="
                `https://image.tmdb.org/t/p/w1280/wiE9doxiLwq3WCGamDIOb2PqBqc.jpg`
              "
              class="d-block w-100"
              :alt="`Peaky Blinders`"
            />
          </div>
          <div class="carousel-item">
            <img
              :src="
                `https://image.tmdb.org/t/p/w1280/VYo9j4vMFVGkAHu6SU4vOpyGzl.jpg`
              "
              class="d-block w-100"
              :alt="`Chilling Adventures of Sabrina`"
            />
          </div>
          <div class="carousel-item">
            <img
              :src="
                `https://image.tmdb.org/t/p/w1280/6x8vW5utEZahp6V3sSWxCTW0mHW.jpg`
              "
              class="d-block w-100"
              :alt="`The Nevers`"
            />
          </div>
          <div class="carousel-item">
            <img
              :src="
                `https://image.tmdb.org/t/p/w1280/tsRy63Mu5cu8etL1X7ZLyf7UP1M.jpg`
              "
              class="d-block w-100"
              :alt="`Breaking Bad`"
            />
          </div>
          <div class="carousel-item">
            <img
              :src="
                `https://image.tmdb.org/t/p/w1280/h3vViR087OJlk4PedNt5JLIKOOi.jpg`
              "
              class="d-block w-100"
              :alt="`House`"
            />
          </div>
          <div class="carousel-item">
            <img
              :src="
                `https://image.tmdb.org/t/p/w1280/56v2KjBlU4XaOv9rVYEQypROD7P.jpg`
              "
              class="d-block w-100"
              :alt="`Stranger Things`"
            />
          </div>
          <div class="carousel-item">
            <img
              :src="
                `https://image.tmdb.org/t/p/w1280/fThSrHjuS1X82XoH9VrtvgvMIXm.jpg`
              "
              class="d-block w-100"
              :alt="`Scorpion`"
            />
          </div>
          <div class="carousel-item">
            <img
              :src="
                `https://image.tmdb.org/t/p/w1280/qyDlF1U1yayXIUniECmGA1oBwZy.jpg`
              "
              class="d-block w-100"
              :alt="`Suits`"
            />
          </div>
          <div class="carousel-item">
            <img
              :src="
                `https://image.tmdb.org/t/p/w1280/s2IXx944vnZUtAxC2nPydOfqakh.jpg`
              "
              class="d-block w-100"
              :alt="`Walker`"
            />
          </div>
          <div class="carousel-item">
            <img
              :src="
                `https://image.tmdb.org/t/p/w1280/xGexTKCJDkl12dTW4YCBDXWb1AD.jpg`
              "
              class="d-block w-100"
              :alt="`La casa de papel`"
            />
          </div>
          <div class="carousel-item">
            <img
              :src="
                `https://image.tmdb.org/t/p/w1280/1KxLxLcMZbtR3Jf32s2jhvZzA6r.jpg`
              "
              class="d-block w-100"
              :alt="`9-1-1`"
            />
          </div>
          <div class="carousel-item">
            <img
              :src="
                `https://image.tmdb.org/t/p/w1280/bhF63Jd90gRYyTHd4y5GCGA2vX6.jpg`
              "
              class="d-block w-100"
              :alt="`Regular Show`"
            />
          </div>
          <div class="carousel-item">
            <img
              :src="
                `https://image.tmdb.org/t/p/w1280/uY3MJohUpY7UMMTK90BIhX5txEs.jpg`
              "
              class="d-block w-100"
              :alt="`American Gods`"
            />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleFade2"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleFade2"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
    <!-- Fin del carousel -->
    <div class="container">
      <hr />
    </div>
    <div class="container">
      <div class="row">
        <div class="mx-auto">
          <!-- Inicio de Cards 2da parte-->
          <div class="card-group">
            <div
              v-for="(movie3, key) in movies3"
              :key="key"
              class="col-sm-12 col-md-6 col-lg-4 mx-auto my-2"
              @click="mostrar(movie.id)"
            >
              <div class="card p-2">
                <img
                  :src="`https://image.tmdb.org/t/p/w500/` + movie3.poster_path"
                  :alt="movie3.original_name"
                />
                <!--<div class="card-body">
                                    <h5 class="card-title">{{movie.title}}</h5>
                                    <p class="card-text">{{movie.overview}}</p>
                                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                </div>-->
              </div>
            </div>
          </div>
          <hr />
          <div class="card-group">
            <div
              v-for="(movie4, key) in movies4"
              :key="key"
              class="col-sm-12 col-md-6 col-lg-4 mx-auto my-2"
              @click="mostrar(movie.id)"
            >
              <div class="card p-2">
                <img
                  :src="`https://image.tmdb.org/t/p/w500/` + movie4.poster_path"
                  :alt="movie4.original_name"
                />
                <!--<div class="card-body">
                                    <h5 class="card-title">{{movie.title}}</h5>
                                    <p class="card-text">{{movie.overview}}</p>
                                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                </div>-->
              </div>
            </div>
          </div>
          <!-- Fin de cards con peliculas-->
          <hr />
        </div>
      </div>
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
import axios from "axios";
export default {
  name: "ExtraMovies2",
  data() {
    return {
      movies: [],
      movies2: [],
      movies3: [],
      movies4: [],
      busqueda: [],
    };
  },
  methods: {
    async getmovie() {
      const response = await axios.get(
        "https://api.themoviedb.org/3/tv/popular?api_key=9cce8ac649022e53376ee7864fe9a772&language=en-US",
        {
          params: {
            page: 1,
          },
        }
      );
      this.movies = response.data.results;
      console.log(this.movies);
    },
    async getmovie2() {
      const response = await axios.get(
        "https://api.themoviedb.org/3/tv/popular?api_key=9cce8ac649022e53376ee7864fe9a772&language=en-US",
        {
          params: {
            page: 2,
          },
        }
      );
      this.movies2 = response.data.results;
      console.log(this.movies2);
    },
    async getmovie3() {
      const response = await axios.get(
        "https://api.themoviedb.org/3/tv/popular?api_key=9cce8ac649022e53376ee7864fe9a772&language=en-US",
        {
          params: {
            page: 3,
          },
        }
      );
      this.movies3 = response.data.results;
      console.log(this.movies3);
    },
    async getmovie4() {
      const response = await axios.get(
        "https://api.themoviedb.org/3/tv/popular?api_key=9cce8ac649022e53376ee7864fe9a772&language=en-US",
        {
          params: {
            page: 4,
          },
        }
      );
      this.movies4 = response.data.results;
      console.log(this.movies4);
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
    this.getmovie(), this.getmovie2(), this.getmovie3(), this.getmovie4();
  },
};
</script>
<style scoped>
/*ESTILOS DEL NAVBAR*/
.header {
  background: url(../assets/familia5.jpg) no-repeat center !important;
  background-size: cover;
  min-height: 100vh;
}
.header .navbar {
  background-color: transparent !important;
}
</style>
