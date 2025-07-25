// app/not-found.js
export default function NotFound() {
  return (
    <div className="text-center mt-20 text-slate-700">
      <h1 className="text-4xl font-bold text-blue-600">404 – Page Not Found</h1>
      <p className="mt-4">Let’s get you back <a className="text-blue-500 underline" href="/">home</a>.</p>
    </div>
  );
}
