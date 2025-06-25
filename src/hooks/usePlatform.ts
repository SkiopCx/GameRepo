//import useData from "./useData";
import platforms from "../data/platforms";

interface Platform{
  id: number,
  name: string,
  slug: string
}

//const usePlatforms = () => useData<Platform>("/platforms/lists/parents"); //call by using service

//use static data
const usePlatforms = () => ({ data:platforms, error:null, isLoading: false });

export default usePlatforms;