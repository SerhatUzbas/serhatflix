### SERHATFLİX

serhatflix is netflix clone app which created by Serhat Uzbaş. 
serhatflix includes react-router,swiper,firebase,formik and more.
scss is prefered to style page.

### Functionality

1) User can open movie modal screen to see details.
2) User can bookmark a movie to list and see as realtime data via firebase.
3) User can search movie or TV shows depends every key stroke with product name.
4) User can go directly specific URL via react-router.
5) User can discover products with infinite slider through product types(popularity,top rated eg.).


### API

TMBD API is used to get movies and TV shows. 

Pros:
1) No request limit.
2) Most of movies and TV shows data is included by TMDB.
3) Supersearch api gets both movies and TV shows data.

Cons:
1) Poster size is really different from netflix. It leads to differentiation of design, so layout is not exact Netflix in some places of app.
2) Datas are seperated  much as meaningless between APIs. It causes unnecessary data fetch from different APIs and that leads some performance issues even they are small ones.
3) Too much undefined data, especially in old TV shows. It leads some extra effort to handle them.

### TODOS AND REGRETS

1) Router must get movie from url and load movie directly. (TODO)
2) Login page will be added. (TODO)
3) At least, one local video will be added. (TODO)
4) Movie icons(in hover stage) does not have same layout as Netflix because of different poster resolution. Maybe another API could be preffered. (a bit of regret)
5) Getting datas in top parent (app.js) is really bad idea especially in performance aspect. Too many re-renders occurs and it slows page motion in some parts of site.(hardest regret)

I am aware of that kind of problems, but I will not change the regret parts, because serhatflix is a practice app, so I will keep in my mind these mistakes and not try again in future projects.

You can check this app via : https://serhatflix.surge.sh

Please let me know if you catch any bugs or mistakes that prevents site works or makes worse.

serhatuzbas@gmail.com
