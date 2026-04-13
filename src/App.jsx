import ContactForm from './components/ContactForm'; 
export default function App() {
  return (
      <section id="contact" className="py-24 px-6 bg-zinc-900 border-t border-zinc-800">
        <div className="max-w-4xl mx-auto">
          <ContactForm />
        </div>
      </section>
  );
}