import { useSearchParams } from "react-router-dom";
import { Card } from "../componenets";
import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";

export const Search = ({apipath}) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  useTitle(`Search result for "${queryTerm}"`);
  const { data:movies } = useFetch(apipath, queryTerm); 
  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <p className="text-2xl text-gray-700 dark:text-white">{ movies.length === 0 ? `No results found for "${queryTerm}"` : `Result for "${queryTerm}"` }</p>
        <div className="flex justify-start flex-wrap">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie}/>
          ))}
          
        </div>
      </section>
    </main>
  )
}
