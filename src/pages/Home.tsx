import { Link } from "react-router-dom";

export function Home () {
  return (
  <div className="container">
    <h1>
      It's home page
    </h1>
    <ul>
      <li>
        <Link to="/echarts">E-charts</Link>
      </li>
    </ul>
  </div>
  )
}