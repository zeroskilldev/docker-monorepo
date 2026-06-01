import { client } from "@repo/db/client";


Bun.serve({
    port: 3002,
    fetch(req, server){
        if(server.upgrade(req)) return;
        return new Response("connection upgrade failed", { status: 500 })
    },
    websocket: {
        message(ws, message) {
            client.todos.create({
                data: {
                    content: "created from ws-server"
                }
            })
            ws.send(message)
        }
    }
})