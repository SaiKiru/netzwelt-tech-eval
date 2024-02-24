import '../public/css/styles.css';

export default function App({ children, ...props }) {
  const Page = children;

  return <Page {...props} />;
}
