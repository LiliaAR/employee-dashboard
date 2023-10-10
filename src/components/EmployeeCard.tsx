interface EmployeeCardProps {
  name: string;
  department: string;
  status: string;
}

export const EmployeeCard: React.FC<EmployeeCardProps> = ({ name, 
department, status }) => {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>{department}</p>
      <span>{status}</span>
    </div>
  );
}
// Nov 12
// Dec 2
// Jan 5
// Feb 16
// Apr 8
// Jun 10
// Aug 8
// Oct 10
