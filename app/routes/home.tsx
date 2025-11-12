import { Link } from "react-router";
import TopBar from "~/components/TopBar";

export default function Home() {
  return <> <TopBar/> <Link to="/about"> Go to About</Link></>;
}
