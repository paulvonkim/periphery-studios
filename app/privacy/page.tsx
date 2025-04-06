import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>

      <div className="prose prose-sm sm:prose max-w-none">
        <h2>Cookie Policy</h2>
        <p>
          This website uses cookies to enhance your browsing experience, analyze
          site traffic, and serve personalized content. Below is information
          about how we use different types of cookies and how you can control
          them.
        </p>

        <h3>What are cookies?</h3>
        <p>
          Cookies are small text files that are placed on your device when you
          visit a website. They are widely used to make websites work more
          efficiently and provide information to the website owners.
        </p>

        <h3>Types of cookies we use:</h3>
        <ul>
          <li>
            <strong>Essential cookies:</strong> These are necessary for the
            website to function properly and cannot be switched off. They
            include cookies for session management, authentication, and
            security.
          </li>
          <li>
            <strong>Analytics cookies:</strong> These allow us to count visits
            and traffic sources so we can measure and improve our site's
            performance. They help us understand which pages are the most and
            least popular and see how visitors move around the site.
          </li>
          <li>
            <strong>Marketing cookies:</strong> These cookies are set through
            our site by our advertising partners. They may be used by those
            companies to build a profile of your interests and show you relevant
            advertisements on other sites.
          </li>
        </ul>

        <h3>Managing your cookie preferences</h3>
        <p>
          You can adjust your cookie preferences at any time by clicking the
          "Cookie Settings" button below. You can also delete cookies that have
          already been set in your browser settings.
        </p>

        <div className="my-8">
          <Link href="/" className="underline">
            Return to homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
