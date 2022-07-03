import { useLoaderData } from '@remix-run/react'
import { db } from '../../services/db'

export const loader = async ({ params }) => {
  const tool = await db.tools.findUnique({ where: { id: params.toolId } })
  return { tool }
}

export default function SingleTool () {
  const { tool } = useLoaderData()
  return (
    <>
      <h2>Post Tool of {tool.name}</h2>
      <p>{tool.description}</p>
    </>
  )
}
