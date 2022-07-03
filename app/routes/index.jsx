import { Link } from '@remix-run/react'

export default function Index () {
  return (
    <div>
      <h2>Home</h2>
      <nav>
        <ul>
          <li>
            <Link to="/about"> About </Link>
          </li>
          <li>
            <Link to="/tools"> Tools </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
