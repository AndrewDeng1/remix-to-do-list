import { Form, useLoaderData } from "@remix-run/react";
import { getDb } from "../../db/client";
import { tasks } from "../../db/schema";
import { eq } from "drizzle-orm";

export async function loader({ context }: { context: { env: Env } }) {
  const db = getDb(context.env);
  const allTasks = await db.select().from(tasks).all();
  return { tasks: allTasks };
}

export async function action({ request, context }: { 
  request: Request; 
  context: { env: Env } 
}) {
  const db = getDb(context.env);
  const formData = await request.formData();
  const intent = formData.get("intent");

  switch (intent) {
    case "add":
      await db.insert(tasks).values({
        text: formData.get("text") as string,
        completed: false,
      });
      break;

    case "toggle":
      await db
        .update(tasks)
        .set({ completed: !!formData.get("completed") })
        .where(eq(tasks.id, parseInt(formData.get("taskId") as string)))
        .run();
      break;

    case "delete":
      await db
        .delete(tasks)
        .where(eq(tasks.id, parseInt(formData.get("taskId") as string)))
        .run();
      break;
  }

  return null;
}

// Keep the existing component code (update types to match D1 response)