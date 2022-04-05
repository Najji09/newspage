import NewsList from '../component/NewsList';
import Categories from './Categories';

const NewsPage = ({ match }) => {
  const category = match.params.category;
  return(
    <>
      <Categories />
      <NewsList category={category} />
    </>
  );
}

export default NewsPage;