import { Form, useTransition } from '@remix-run/react'
import { redirect } from '@remix-run/node'
import { db } from '../../services/db'

export const action = async ({ request }) => {
  const form = await request.formData()
  const name = form.get('name')
  const description = form.get('description')

  await new Promise(resolve => {
    setTimeout(resolve, 5000)
  })

  const tool = await db.tools.create({ data: { name, description } })

  return redirect(`/tools/${tool.id}`)
}

export function ErrorBoundary ({ error }) {
  return (
    <div>
      <strong>Something went wrong: {error.message}</strong>
    </div>
  )
}

export default function createTool () {
  const { state } = useTransition()
  const isSubmitting = state === 'submitting'
  return (
    <>
      <h2>Create Tool</h2>
      <Form method="POST" disabled={isSubmitting}>
        <div>
          <p>
            <label htmlFor="name">Name</label>
            <br />
            <input
              disabled={isSubmitting}
              placeholder="Name of tool"
              type="text"
              id="name"
              name="name"
            />
          </p>
        </div>
        <div>
          <p>
            <label htmlFor="description">Description</label>
            <br />
            <textarea
              disabled={isSubmitting}
              placeholder="description of tool"
              rows="6"
              id="description"
              name="description"
            />
          </p>
        </div>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Wait' : 'Add new Tool'}
        </button>
      </Form>
    </>
  )
}
