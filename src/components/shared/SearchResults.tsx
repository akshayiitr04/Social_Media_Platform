
import Loader from './Loader';


import GridPostList from './GridPostList';

// type SearchResultsProps = {
//     isSEARCHFetching : boolean;
//     searchedPosts: Models.Document[];

// }
type Document = {
    $id: string;
    // Other properties...
  };
  
  type DocumentList = {
    documents: Document[];
  };
  
  interface SearchResultsProps {
    isSearchFetching: boolean;
    searchedPosts?: DocumentList;
  }
  
const SearchResults = ({isSearchFetching, searchedPosts}: 
     SearchResultsProps) => {
        if(isSearchFetching) return <Loader/>

        if(searchedPosts && searchedPosts.documents.length >  0) {
                  return (
                     <GridPostList posts = {searchedPosts.documents}/>
                    )      
                }

        return (
            <p className='text-light-4 mt-10 text-center w-full'>No results found</p>
        )
    }

    export default SearchResults