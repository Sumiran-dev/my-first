"use server"

export async function submitName(prevState: any, formData: FormData) {
  const name = formData.get("name")

  if (!name || typeof name !== "string") {
    return { message: "Please enter a valid name" }
  }

  // Simulate a small delay to show loading state in production
  await new Promise((resolve) => setTimeout(resolve, 500))

  return {
    message: `Hello ${name}. I hope you are doing well. If you are looking for a full stack developer, please do contact Sumiran Bastola!`,
  }
}

