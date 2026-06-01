import { client } from "@repo/db/client"

export default async  function Home() {
  const todos = await client.todos.findMany();

  return <div>
    {todos.map((t) => todosStyle(t.content))}
  </div>
}

function todosStyle(content: string){
  return <div>
    {content}
  </div>
}