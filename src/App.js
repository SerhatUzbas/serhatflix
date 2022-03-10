import "./Styles/Layout.css";
import { useCallback, useEffect, useState } from "react";
import Modal from "./Components/Modal";
import Header from "./Components/Header";
import Home from "./Components/Pages/Home";
import SearchPage from "./Components/Pages/SearchPage";
import MyList from "./Components/Pages/MyList";
import { Navigate, Route, Routes } from "react-router-dom";
import NotFound from "./Components/Pages/NotFound";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, remove, set, onValue } from "firebase/database";
function App() {
  const API_KEY = "211db75b256392ca8aebd95022305dda";

  const [popMoviesData, setPopMoviesData] = useState(false);
  const [mostWatchedMovies, setMostWatchedMovies] = useState(false);
  const [topRated, setTopRated] = useState(false);
  const [popTv, setPopTv] = useState(false);
  const [topRatedTv, setTopRatedTv] = useState(false);
  const [searchData, setSearchData] = useState(false);
  const [modal, setModal] = useState(false);

  // Reducer
  // const [curState, dispatch] = useReducer(Reducer, []);

  const [curState, setCurState] = useState([]);
  const firebaseConfig = {
    apiKey: "AIzaSyCYoEA2GZaQOJ9fETSlvrZqvIozaFg_ZxA",
    authDomain: "netflix-e7d0d.firebaseapp.com",
    databaseURL:
      "https://netflix-e7d0d-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "netflix-e7d0d",
    storageBucket: "netflix-e7d0d.appspot.com",
    messagingSenderId: "923548543078",
    appId: "1:923548543078:web:b4c477b837c2cb6108e5a7",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);

  const writeDB = useCallback(
    (movie, id) => {
      movie.bookmarked = true;
      set(ref(db, `${id}`), movie);
      console.log("22");
    },
    [db]
  );
  console.log("asd");

  const deleteMovie = useCallback(
    (movie, id) => {
      movie.bookmarked = false;
      remove(ref(db, `${id}`));
    },
    [db]
  );
  const handleFunc = (item) => {
    const isAdded = curState.some((listItem) => listItem.title === item.title);
    !isAdded ? writeDB(item, item.id) : deleteMovie(item, item.id);
    console.log(curState);
  };

  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      const data = snapshot.val();
      console.log(data);

      if (data !== null) {
        setCurState(Object.values(data)); // Object.values(data).map((mov) => setCurState((prev) => [...prev, mov]));
      }
    });
  }, [db]);

  //Fetch popular data--------------
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://api.themoviedb.org/3/discover/movie?api_key=" +
            API_KEY +
            "&sort_by=popularity.desc"
        );
        const rawdata = await res.json();

        const data = rawdata.results.map((movie) => ({
          title: movie.title,
          id: movie.id,
          type: "movie",
          overview: movie.overview,
          vote: movie.vote_average,
          image: movie.poster_path
            ? `https://image.tmdb.org/t/p/w185/${movie.poster_path}`
            : "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg",

          relDate: movie.release_date,
          bookmarked: curState.some((mov) => movie.id === mov.id)
            ? true
            : false,
        }));
        console.log(data);

        setPopMoviesData(data);
      } catch (error) {}
    };
    fetchData();
  }, [curState]);
  //Fetch popular data--------------

  //Fetch mostwatched data--------------
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://api.themoviedb.org/3/discover/movie?api_key=" +
            API_KEY +
            "&sort_by=vote_count.desc&page=1&page=1"
        );
        const rawdata = await res.json();
        const data = rawdata.results.map((movie) => ({
          title: movie.title,
          type: "movie",
          id: movie.id,
          overview: movie.overview,
          vote: movie.vote_average,
          image: movie.poster_path
            ? `https://image.tmdb.org/t/p/w185/${movie.poster_path}`
            : "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg",

          relDate: movie.release_date,
          bookmarked: curState.some((mov) => movie.id === mov.id)
            ? true
            : false,
        }));
        setMostWatchedMovies(data);
      } catch (error) {}
    };
    fetchData();
  }, [curState]);
  //Fetch mostwatched data--------------

  //Fetch Toprated data--------------
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://api.themoviedb.org/3/discover/movie?api_key=211db75b256392ca8aebd95022305dda&language=en-US&vote_count.gte=2000&sort_by=vote_average.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate"
        );
        const rawdata = await res.json();
        const data = rawdata.results.map((movie) => ({
          title: movie.title || movie.name || "No Data",
          type: "movie" || "No Data",
          id: movie.id || "No Data",
          overview: movie.overview || "No Data",
          vote: movie.vote_average || "No Data",
          image: movie.poster_path
            ? `https://image.tmdb.org/t/p/w185/${movie.poster_path}`
            : "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg",

          relDate: movie.release_date || "No Data",
          bookmarked: curState.some((mov) => movie.id === mov.id)
            ? true
            : false,
        }));
        setTopRated(data);
      } catch (error) {}
    };
    fetchData();
  }, [curState]);
  //Fetch Toprated data--------------

  // Fetch Popular TV Shows data---------------
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://api.themoviedb.org/3/discover/tv?api_key=211db75b256392ca8aebd95022305dda&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0"
        );
        const rawdata = await res.json();
        const data = rawdata.results.map((movie) => ({
          title: movie.title || movie.name || "No data",
          type: "tv" || "No data",
          id: movie.id || "No data",
          overview: movie.overview || "No data",
          vote: movie.vote_average || "No data",
          image: movie.poster_path
            ? `https://image.tmdb.org/t/p/w185/${movie.poster_path}`
            : "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg",

          relDate: movie.release_date || "No data",
          bookmarked: curState.some((mov) => movie.id === mov.id)
            ? true
            : false,
        }));
        setPopTv(data);
      } catch (error) {}
    };
    fetchData();
  }, [curState]);
  // Fetch Popular TV SHows data---------------

  // Fetch topRated TV Shows data--------------
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://api.themoviedb.org/3/discover/tv?api_key=211db75b256392ca8aebd95022305dda&language=en-US&sort_by=vote_average.desc&page=1&timezone=America%2FNew_York&vote_count.gte=100&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0"
        );
        const rawdata = await res.json();
        const data = rawdata.results.map((movie) => ({
          title: movie.title || movie.name || "No data",
          type: "tv" || "No data",
          id: movie.id || "No data",
          overview: movie.overview || "No data",
          vote: movie.vote_average || "No data",
          image: movie.poster_path
            ? `https://image.tmdb.org/t/p/w185/${movie.poster_path}`
            : "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg",

          relDate: movie.release_date || "No data",
          bookmarked: curState.some((mov) => movie.id === mov.id)
            ? true
            : false,
        }));
        setTopRatedTv(data);
      } catch (error) {}
    };
    fetchData();
  }, [curState]);

  const fetchTV = useCallback(async (id) => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/tv/${id}?api_key=211db75b256392ca8aebd95022305dda&language=en-US`
      );
      const rawdata = await res.json();
      console.log(rawdata);

      const data = {
        title: rawdata.title || rawdata.name || "No data",
        id: rawdata.id || "No data",
        genres: rawdata.genres || ["No data", "No"],
        tagline: rawdata.tagline || "Story",
        overview: rawdata.overview || "No data",
        vote: rawdata.vote_average || "No data",
        image: rawdata.poster_path
          ? `https://image.tmdb.org/t/p/w1280/${rawdata.poster_path}`
          : "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg",
        backdrop: rawdata.backdrop_path
          ? `https://image.tmdb.org/t/p/w1280/${rawdata.backdrop_path}`
          : "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg",
        relDate: rawdata.release_date || "No data",
        bookmarked: false,
      };
      console.log(data);
      setModal(data);
    } catch (error) {}
  }, []);

  const fetchSearch = useCallback(
    async (query) => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/search/multi?api_key=211db75b256392ca8aebd95022305dda&language=en-US&query=${query}&page=1&include_adult=false`
        );
        const rawdata = await res.json();
        const pureData = rawdata.results.filter(
          (movie) => movie.media_type !== "person"
        );
        console.log(pureData);
        const data = pureData.map((movie) => ({
          title: movie.title || "No data",
          id: movie.id || "No data",
          type: movie.media_type || "No data",
          overview: movie.overview || "No data",
          vote: movie.vote_average || "No data",
          image: movie.poster_path
            ? `https://image.tmdb.org/t/p/w185/${movie.poster_path}`
            : "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg",

          relDate: movie.release_date || "No data",
          bookmarked: curState.some((mov) => movie.id === mov.id)
            ? true
            : false,
        }));
        console.log(data);

        setSearchData(data);
      } catch (error) {}
    },
    [curState]
  );
  //Fetch search data--------------

  const fetchMovie = useCallback(async (id) => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=211db75b256392ca8aebd95022305dda&language=en-US`
      );
      const rawdata = await res.json();
      console.log(rawdata);

      const data = {
        title: rawdata.title || "No data",
        id: rawdata.id || "No data",
        genres: rawdata.genres || "No data",
        tagline: rawdata.tagline || "Story",
        overview: rawdata.overview || "No data",
        vote: rawdata.vote_average || "No data",
        image: rawdata.poster_path
          ? `https://image.tmdb.org/t/p/w1280/${rawdata.poster_path}`
          : "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg",
        backdrop: rawdata.backdrop_path
          ? `https://image.tmdb.org/t/p/w1280/${rawdata.backdrop_path}`
          : "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg",
        relDate: rawdata.release_date || "No data",
        bookmarked: false,
      };
      setModal(data);
    } catch (error) {}
  }, []);

  const closeModal = useCallback(() => {
    setModal(false);
  }, []);

  //Fetch mostwatched data--------------

  return (
    <div className='container'>
      <Header searchMovie={fetchSearch} />
      <Routes>
        <Route path='/' element={<Navigate to='/Home' />} />
        <Route
          path='/Home'
          element={
            <Home
              fetchSearch={fetchSearch}
              addToList={handleFunc}
              fetchTV={fetchTV}
              fetchMovie={fetchMovie}
              popMoviesData={popMoviesData}
              mostMoviesData={mostWatchedMovies}
              topMoviesData={topRated}
              popTvData={popTv}
              topTvData={topRatedTv}
              onClose={closeModal}
              curState={curState}
            />
          }
        ></Route>

        <Route
          path='/List'
          element={
            <MyList
              addToList={handleFunc}
              fetchTV={fetchTV}
              fetchMovie={fetchMovie}
              onClose={closeModal}
              searchlist={searchData}
              fetchSearch={fetchSearch}
              curState={curState}
            />
          }
        />
        <Route
          path='/search'
          element={
            <SearchPage
              addToList={handleFunc}
              fetchTV={fetchTV}
              fetchMovie={fetchMovie}
              onClose={closeModal}
              searchlist={searchData}
              fetchSearch={fetchSearch}
            />
          }
        />

        <Route path='*' element={<NotFound />} />
      </Routes>
      {modal && <Modal onClose={closeModal} movie={modal} />}
    </div>
  );
}

export default App;
