import GridPostList from "./GridPostList";
import Loader from "./Loader";
import { Models } from "appwrite";



type SearchResultProps = {
  isSearchFetching: boolean;
  searchedPosts: Models.Document[];
};

const SearchResults = ({ isSearchFetching, searchedPosts }: SearchResultProps) => {
  if (isSearchFetching) {
    return <Loader />;
  } else if (searchedPosts && searchedPosts.length > 0) {
    return <GridPostList posts={searchedPosts} />;
  } else {
    return (
      <p className="text-rose-300 mt-10 text-center w-full">No results found</p>
    );
  }
};

export default SearchResults;
