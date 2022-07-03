import { Link, useLoaderData } from '@remix-run/react'
import { db } from '../../services/db'

export const loader = async () => {
  const tools = await db.tools.findMany()
  return { tools }
}

export default function Tools () {
  const { tools } = useLoaderData()
  return (
    <div>
      <h2>Home</h2>
      <nav>
        <ul>
          <li>
            <Link to="/about"> About </Link>
          </li>
          <li>
            <Link to="/tools/create"> Create Tool </Link>
          </li>
        </ul>
      </nav>
      {tools.map((tool) => (
        <div key={tool.id}>
          <h3>{tool.name}</h3>
          <p>{tool.description}</p>
          <a href={tool.link}>{tool.link}</a>
        </div>
      ))}
    </div>
  )
}
