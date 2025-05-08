"use client";
export default function ContactForm() {
  return (
    <form className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Message
        </label>
        <textarea
          rows="4"
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-[var(--color-primary1)] text-white font-semibold py-2 px-6 rounded-lg hover:opacity-90 cursor-pointer transition"
      >
        Send Message
      </button>
    </form>
  );
}
