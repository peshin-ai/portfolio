import { useForm } from "react-hook-form";
import type { ContactFormInputs } from "../types";
import { Mail, MapPin, Phone } from "lucide-react";
import { profile } from "../lib/data";
import InputField from "../components/ui/input";

function ContactSection() {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormInputs>({
    defaultValues: { name: "", email: "", message: "" },
  });

  const onSubmit = (data: ContactFormInputs) => {
    const subject = encodeURIComponent(`Portfolio inquiry from ${data.name}`);
    const body = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\n\n${data.message}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    reset();
  };

  return (
    <section className="container mx-auto px-6 py-16" id="contact">
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50">
            Let&apos;s connect
          </h3>
          <p className="mt-2 text-gray-700 dark:text-gray-200">
            I&apos;m open to collaborations, roles, and interesting challenges.
            Feel free to reach out!
          </p>
          <ul className="mt-6 space-y-3">
            <li className="flex items-center gap-3 text-gray-800 dark:text-gray-100">
              <Mail size={18} className="text-blue-600 dark:text-blue-400" />
              <a href={`mailto:${profile.email}`} className="hover:underline">
                {profile.email}
              </a>
            </li>
            <li className="flex items-center gap-3 text-gray-800 dark:text-gray-100">
              <MapPin size={18} className="text-blue-600 dark:text-blue-400" />
              <span>{profile.location}</span>
            </li>
            <li className="flex items-center gap-3 text-gray-800 dark:text-gray-100">
              <Phone size={18} className="text-blue-600 dark:text-blue-400" />
              <span>{profile.phone}</span>
            </li>
          </ul>
          <div className="mt-6 flex gap-4">
            {profile.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4"
          noValidate
        >
          <InputField
            name="name"
            label="Name"
            control={control}
            placeholder="Your name"
            autoComplete="name"
            rules={{ required: "Name is required" }}
            errors={errors}
          />
          <InputField
            name="email"
            label="Email"
            control={control}
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            rules={{
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            }}
            errors={errors}
          />
          <InputField
            name="message"
            label="Message"
            control={control}
            multiline
            rows={6}
            placeholder="How can I help?"
            rules={{ required: "Message is required" }}
            errors={errors}
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition disabled:opacity-60 disabled:cursor-not-allowed shadow-md"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send message"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;
