import store from './libs/StateManagement/Store.js'
import Search from "./Components/Search/Search.js";
import SongList from "./Components/List/SongList.js";
import Loader from "./Components/Loader/Loader.js";
import Lyrics from "./Components/Lyrics/Lyrics.js";
import Pagination from "./Components/Pagination/Pagination.js";

const searchInstance = new Search();
const loaderInstance = new Loader()
const songListInstance = new SongList();
const modalInstance = new Lyrics();
const paginatedInstance = new Pagination()

searchInstance.render();
loaderInstance.render();
songListInstance.render();
modalInstance.render();
paginatedInstance.render();
