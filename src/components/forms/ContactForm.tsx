import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema, type ContactFormValues } from '@lib/schemas/contactFormSchema';

/**
 * ContactForm
 *
 * React island (hydrated client-side via Astro) that powers the /contact
 * page. Validation is handled with react-hook-form + zod. Submission
 * currently only logs the payload — wire up `PUBLIC_CONTACT_FORM_ENDPOINT`
 * (see env.example) once a backend/service is chosen.
 *
 * Usage in an .astro file:
 *   <ContactForm client:load />
 */
export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    // TODO: Replace with a real submission (API route, Formspree, etc.)
    // once PUBLIC_CONTACT_FORM_ENDPOINT is configured.
    console.warn('Contact form submitted (placeholder handler):', data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <label htmlFor="name">Name</label>
        <input id="name" type="text" aria-required="true" {...register('name')} />
        {errors.name && (
          <p role="alert" id="name-error">
            {errors.name.message}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="email">Email</label>
        <input id="email" type="email" aria-required="true" {...register('email')} />
        {errors.email && (
          <p role="alert" id="email-error">
            {errors.email.message}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="subject">Subject</label>
        <input id="subject" type="text" aria-required="true" {...register('subject')} />
        {errors.subject && (
          <p role="alert" id="subject-error">
            {errors.subject.message}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="message">Message</label>
        <textarea id="message" rows={5} aria-required="true" {...register('message')} />
        {errors.message && (
          <p role="alert" id="message-error">
            {errors.message.message}
          </p>
        )}
      </div>

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Sending…' : 'Send Message'}
      </button>

      {isSubmitSuccessful && <p role="status">Thanks — your message has been recorded.</p>}
    </form>
  );
}
