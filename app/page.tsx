"use client"

import { useActionState } from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { submitName } from "./actions"

const initialState = {
  message: "",
}

export default function Home() {
  const [state, formAction] = useActionState(submitName, initialState)

  return (
    <main className="min-h-screen p-4 md:p-8 lg:p-24">
      <div className="max-w-3xl mx-auto space-y-8">
        <Card className="p-6">
          <form action={formAction} className="space-y-4">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Enter your name
              </label>
              <Input id="name" name="name" placeholder="Type your name here..." required className="w-full" />
            </div>
            <Button type="submit" className="w-full sm:w-auto">
              Submit
            </Button>
          </form>

          {state?.message && <p className="mt-4 text-lg font-medium text-center">{state.message}</p>}
        </Card>

        <Card className="p-6">
          <h2 className="text-2xl font-bold mb-4">How it works</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="server-actions">
              <AccordionTrigger>Server Actions</AccordionTrigger>
              <AccordionContent>
                Server Actions are asynchronous functions that execute on the server. In this example, when you submit
                the form, a server action processes your name and returns a greeting message. This happens without a
                full page reload, thanks to Next.js 15&apos;s enhanced form handling.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="components">
              <AccordionTrigger>Shadcn UI Components</AccordionTrigger>
              <AccordionContent>
                This app uses several Shadcn UI components: Card for container layouts, Input for the name field, Button
                for form submission, and Accordion for this explanation section. These components provide a consistent,
                accessible, and beautiful design system.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="nextjs">
              <AccordionTrigger>Next.js 15 Features</AccordionTrigger>
              <AccordionContent>
                This application showcases several Next.js 15 features, including Server Actions for form handling, the
                new App Router for simplified routing, and enhanced form handling with useActionState for managing form
                state and submissions.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Card>
      </div>
    </main>
  )
}

