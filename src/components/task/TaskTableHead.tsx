type Props = {};

export default function TaskTableHead({}: Props) {
  return (
    <thead>
      <tr>
        <th></th>
        <th>Type</th>
        <th>Status</th>
        <th>Branch</th>
        <th>Tags</th>
      </tr>
    </thead>
  );
}
