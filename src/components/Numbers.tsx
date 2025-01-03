export default function Numbers({ numbers }: { numbers: number[] }) {
  return (
    <div>
      {numbers.map((number) => (
        <li>{number}</li>
      ))}
    </div>
  );
}
