import './StatusMessage.css';
import { StatusMessageProps } from '../types/components';


function StatusMessage({ type, message }: StatusMessageProps) {
  return (
    <div className={`status-message ${type}`}>
      {message}
    </div>
  );
}

export default StatusMessage; 