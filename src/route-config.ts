import IndexGenres from "./genres/IndexGenres";
import CreateGenre from "./genres/CreateGenre";
import EditGenre from "./genres/EditGenre";

import IndexActors from "./actors/IndexActors";
import CreateActor from "./actors/CreateActor";
import EditActor from "./actors/EditActor";

import IndexMovieTheaters from "./movietheaters/IndexMovieTheater";
import CreateMovieTheater from "./movietheaters/CreateMovieTheater";
import EditMovieTheater from "./movietheaters/EditMovieTheater";

import CreateMovie from "./Movies/CreateMovie";
import EditMovie from "./Movies/EditMovie";
import FilterMovies from "./Movies/FilterMovies";

import LandingPage from "./Movies/LandingPage";
import RedirectToLandingPage from "./Utilis/RedirectToLandingPage";


const routes = [

    { path: '/genres', component: IndexGenres, exact: true },
    { path: '/genres/create', component: CreateGenre },
    { path: '/genres/edit/:id(\\d+)', component: EditGenre },


    { path: '/actors', component: IndexActors, exact: true },
    { path: '/actors/create', component: CreateActor },
    { path: '/actors/edit/:id(\\d+)', component: EditActor },


    { path: '/movietheaters', component: IndexMovieTheaters, exact: true },
    { path: '/movietheaters/create', component: CreateMovieTheater },
    { path: '/movietheaters/edit/:id(\\d+)', component: EditMovieTheater },

    { path: '/Movies/create', component: CreateMovie, exact: true },
    { path: '/Movies/edit/:id(\\d+)', component: EditMovie },
    { path: '/Movies/filter', component: FilterMovies },


    { path: '/', component: LandingPage, exact: true },
    { path: '*', component: RedirectToLandingPage }

];

export default routes