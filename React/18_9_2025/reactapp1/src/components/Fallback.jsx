// components/Fallback.jsx
export default function Fallback({ error, resetErrorBoundary }) {
  return (
    <div style={{ color: "red" }}>
      <h2>Something went wrong!</h2>
      <p>{error.message}</p>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}
