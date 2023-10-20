export default function PostPreview({ coverImg, category, title }) {
  return (
    <div>
      <div>
        <span>{category}</span>
        <span>{title}</span>
      </div>
    </div>
  );
}
