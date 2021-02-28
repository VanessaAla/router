import { useParams } from "react-router-dom";
export default function MoviePage() {
  const route_parameters = useParams();
  console.log(route_parameters);
  return <div>This is the Movie Page</div>;
}
