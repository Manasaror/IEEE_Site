import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { contactFormSchema, type ContactFormValues } from '../../lib/schemas/contactFormSchema';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (_data: ContactFormValues) => {
    // Simulate submission / future endpoint integration
    await new Promise((resolve) => setTimeout(resolve, 800));
    setSubmitted(true);
    reset();
  };

  return (
    <div className="rounded-lg border border-[#3A3A3A] bg-[#303030] p-6 sm:p-8">
      <div className="mb-6">
        <h3 className="mb-1 text-xl font-bold text-[#F5F5F5]">Send an Inquiry</h3>
        <p className="text-xs text-[#C9C9C9] sm:text-sm">
          Have questions regarding membership, research collaborations, or upcoming hackathons?
          Reach out directly.
        </p>
      </div>

      {submitted ? (
        <div className="rounded-md border border-[#0077B6] bg-[#252525] p-6 text-center">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#1E5F88]/30 text-[#1689C9]">
            <CheckCircle className="h-6 w-6" />
          </div>
          <h4 className="mb-1 text-base font-bold text-[#F5F5F5]">Message Transmitted</h4>
          <p className="mb-4 text-xs text-[#C9C9C9] sm:text-sm">
            Thank you for reaching out to IEEE GBPIET Student Branch. Our executive team will
            respond to your email shortly.
          </p>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="font-mono text-xs font-semibold text-[#1689C9] underline hover:no-underline"
          >
            Send another inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="mb-1 block font-mono text-xs font-semibold uppercase text-[#C9C9C9]"
              >
                Your Full Name *
              </label>
              <input
                id="name"
                type="text"
                placeholder="e.g. Alex Kumar"
                className={`w-full rounded-md border px-3.5 py-2.5 text-sm transition-all focus:outline-none focus:ring-1 ${
                  errors.name
                    ? 'border-red-400 bg-red-950/20 text-[#F5F5F5] focus:ring-red-400'
                    : 'border-[#3A3A3A] bg-[#242424] text-[#F5F5F5] placeholder-[#777777] focus:border-[#0077B6] focus:ring-[#0077B6]'
                }`}
                {...register('name')}
              />
              {errors.name && (
                <p className="mt-1 flex items-center gap-1 text-[11px] font-medium text-red-400">
                  <AlertCircle className="h-3 w-3 shrink-0" />
                  <span>{errors.name.message}</span>
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-1 block font-mono text-xs font-semibold uppercase text-[#C9C9C9]"
              >
                Email Address *
              </label>
              <input
                id="email"
                type="email"
                placeholder="alex@example.com"
                className={`w-full rounded-md border px-3.5 py-2.5 text-sm transition-all focus:outline-none focus:ring-1 ${
                  errors.email
                    ? 'border-red-400 bg-red-950/20 text-[#F5F5F5] focus:ring-red-400'
                    : 'border-[#3A3A3A] bg-[#242424] text-[#F5F5F5] placeholder-[#777777] focus:border-[#0077B6] focus:ring-[#0077B6]'
                }`}
                {...register('email')}
              />
              {errors.email && (
                <p className="mt-1 flex items-center gap-1 text-[11px] font-medium text-red-400">
                  <AlertCircle className="h-3 w-3 shrink-0" />
                  <span>{errors.email.message}</span>
                </p>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="subject"
              className="mb-1 block font-mono text-xs font-semibold uppercase text-[#C9C9C9]"
            >
              Subject / Topic *
            </label>
            <input
              id="subject"
              type="text"
              placeholder="e.g. Membership Question / Project Collaboration"
              className={`w-full rounded-md border px-3.5 py-2.5 text-sm transition-all focus:outline-none focus:ring-1 ${
                errors.subject
                  ? 'border-red-400 bg-red-950/20 text-[#F5F5F5] focus:ring-red-400'
                  : 'border-[#3A3A3A] bg-[#242424] text-[#F5F5F5] placeholder-[#777777] focus:border-[#0077B6] focus:ring-[#0077B6]'
              }`}
              {...register('subject')}
            />
            {errors.subject && (
              <p className="mt-1 flex items-center gap-1 text-[11px] font-medium text-red-400">
                <AlertCircle className="h-3 w-3 shrink-0" />
                <span>{errors.subject.message}</span>
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-1 block font-mono text-xs font-semibold uppercase text-[#C9C9C9]"
            >
              Message *
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder="How can IEEE GBPIET assist you or collaborate?"
              className={`w-full rounded-md border px-3.5 py-2.5 text-sm transition-all focus:outline-none focus:ring-1 ${
                errors.message
                  ? 'border-red-400 bg-red-950/20 text-[#F5F5F5] focus:ring-red-400'
                  : 'border-[#3A3A3A] bg-[#242424] text-[#F5F5F5] placeholder-[#777777] focus:border-[#0077B6] focus:ring-[#0077B6]'
              }`}
              {...register('message')}
            />
            {errors.message && (
              <p className="mt-1 flex items-center gap-1 text-[11px] font-medium text-red-400">
                <AlertCircle className="h-3 w-3 shrink-0" />
                <span>{errors.message.message}</span>
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-md bg-[#0077B6] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-[#1689C9] disabled:opacity-50"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                <span>Transmitting...</span>
              </>
            ) : (
              <>
                <span>Transmit Message</span>
                <Send className="h-4 w-4" />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
