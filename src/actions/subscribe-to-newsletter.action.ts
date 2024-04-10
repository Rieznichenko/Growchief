'use server';

export async function subscribeToNewsletter(formData: FormData) {
  const email = formData.get('email')?.toString();

  console.log(email);
}
