//import useData from "./useData";
import genres from "../data/genres";

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

//const useGenres= () => useData<Genre>("/genres"); //call by using service

//use static data
const useGenres= () =>  ({ data:genres, error:null, isLoading: false });

export default useGenres;