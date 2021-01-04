import Film from "@/views/film/index"
import ComingSoon from "@/views/film/comingSoon"
import Detail from "@/views/film/detail"
import NowPlaying from "@/views/film/nowPlaying"
var film = [
    {
        path:"/films",
        component:Film,
        children:[
            {
                path:"nowPlaying",
                component:NowPlaying
            },
            {
                path:"comingSoon",
                component:ComingSoon
            }
        ]
    },
    {
        path:"/film/:filmId",
        component:Detail
    }
  
]
export default film